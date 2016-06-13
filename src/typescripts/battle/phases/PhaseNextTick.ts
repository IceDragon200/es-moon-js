import PhaseBase from "./PhaseBase";
import ComponentTactics from "../../components/ComponentTactics";
import ComponentWaitTime from "../../components/ComponentWaitTime";

export default class PhaseNextTick extends PhaseBase {
	public process(world: IWorld) {
		const entities = world.getEntities().filter(function(entity) {
			return world.hasComponent(entity, "wait_time");
		});
		if (entities.length === 0) {
			this.eachTactics(world, function(_e, tactics) {
				tactics.nextPhase = "BattleEnd";
			});
		} else {
			const entity = _.min(entities, function(en) {
				const wt = <ComponentWaitTime>world.getComponent(en, "wait_time");
				return wt.value;
			});
			const ewt = <ComponentWaitTime>world.getComponent(entity, "wait_time");
			let diff = ewt.value;
			this.eachTactics(world, function(_e, tactics) {
				const r = tactics.roundWt - diff;
				if (r < 0) {
					diff = tactics.roundWt;
					//tactics.subject = null;
					tactics.nextPhase = "RoundEnd";
				} else {
					//tactics.subject = entity.id;
					tactics.nextPhase = "TurnStart";
				}
				tactics.roundWt -= diff;
				tactics.battleWt += diff;
			});
			entities.forEach(function(en) {
				const wt = <ComponentWaitTime>world.getComponent(en, "wait_time");
				wt.value -= diff;
			});
		}
	}
}

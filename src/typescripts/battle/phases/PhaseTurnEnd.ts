import PhaseBase from "./PhaseBase";
import ComponentWaitTime from "../../components/ComponentWaitTime";

export default class PhaseTurnEnd extends PhaseBase {
	public process(world: IWorld) {
		this.getSubject(world, function(_t, entity) {
			const wt = <ComponentWaitTime>world.getComponent(entity, "wait_time");
			if (wt) {
				wt.value += wt.reset;
				wt.reset = 0;
			}
		});
		this.eachTactics(world, function(_e, tactics) {
			tactics.nextPhase = "TurnJudge";
		});
	}
}

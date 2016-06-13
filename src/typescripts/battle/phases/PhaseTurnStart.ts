import PhaseBase from "./PhaseBase";
import ComponentWaitTime from "../../components/ComponentWaitTime";
import ComponentActionPoints from "../../components/ComponentActionPoints";

export default class PhaseTurnStart extends PhaseBase {
	public process(world: IWorld) {
		this.getSubject(world, function(_t, subject) {
			const wt = <ComponentWaitTime>world.getComponent(subject, "wait_time");
			if (wt) wt.reset = wt.max;

			const ap = <ComponentActionPoints>world.getComponent(subject, "action_points");
			if (ap) ap.value += ap.regen;
		});

		this.eachTactics(world, function(_e, tactics) {
			tactics.nextPhase = "TurnEnd";
		});
	}
}

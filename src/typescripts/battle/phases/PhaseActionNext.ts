import PhaseBase from "./PhaseBase";

export default class PhaseActionNext extends PhaseBase {
	public process(world: IWorld) {
		this.getSubject(world, function(t, subject) {
			const actions = world.getComponent(subject, "actions");
			if (subject && actions) {
				t.nextPhase = "ActionMake";
			} else {
				t.nextPhase = "TurnEnd";
			}
		});
	}
}

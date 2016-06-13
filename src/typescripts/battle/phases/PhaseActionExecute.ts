import PhaseBase from "./PhaseBase";

export default class PhaseActionExecute extends PhaseBase {
	public process(world: IWorld) {
		this.eachTactics(world, function(_e, tactics) {
			tactics.nextPhase = "ActionEnd";
		});
	}
}

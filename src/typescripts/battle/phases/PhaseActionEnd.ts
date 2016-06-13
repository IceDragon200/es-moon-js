import PhaseBase from "./PhaseBase";

export default class PhaseActionEnd extends PhaseBase {
	public process(world: IWorld) {
		this.eachTactics(world, function(_e, tactics) {
			tactics.nextPhase = "ActionJudge";
		});
	}
}

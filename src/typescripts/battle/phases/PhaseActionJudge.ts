import PhaseBase from "./PhaseBase";

export default class PhaseActionJudge extends PhaseBase {
	public process(world: IWorld) {
		this.eachTactics(world, function(_e, tactics) {
			tactics.nextPhase = "ActionNext";
		});
	}
}

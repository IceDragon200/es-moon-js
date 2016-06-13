import PhaseBase from "./PhaseBase";

export default class PhaseTurnJudge extends PhaseBase {
	public process(world: IWorld) {
		this.eachTactics(world, function(_e, tactics) {
			tactics.nextPhase = "TurnJudge";
		});
	}
}

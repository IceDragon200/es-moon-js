import PhaseBase from "./PhaseBase";

export default class PhaseBattleJudge extends PhaseBase {
	public process(world: IWorld) {
		this.eachTactics(world, function(_e, tactics) {
		});
	}
}

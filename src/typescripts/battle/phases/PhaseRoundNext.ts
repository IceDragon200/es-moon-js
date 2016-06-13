import PhaseBase from "./PhaseBase";
import ComponentTactics from "../../components/ComponentTactics";

export default class PhaseRoundNext extends PhaseBase {
	public process(world: IWorld) {
		this.eachTactics(world, function(e, tactics) {
			tactics.rounds += 1;
			tactics.roundWt = tactics.roundWtMax;
			tactics.nextPhase = "RoundStart";
		});
	}
}

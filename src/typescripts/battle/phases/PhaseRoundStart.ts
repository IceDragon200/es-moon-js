import PhaseBase from "./PhaseBase";
import ComponentTactics from "../../components/ComponentTactics";

export default class PhaseRoundStart extends PhaseBase {
	public process(world: IWorld) {
		this.eachTactics(world, function(e, tactics) {
			tactics.nextPhase = "NextTick";
		});
	}
}

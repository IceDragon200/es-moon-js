import ComponentWaitTime from "../../components/ComponentWaitTime";
import ComponentTactics from "../../components/ComponentTactics";
import PhaseBase from "./PhaseBase";

export default class PhaseBattleStart extends PhaseBase {
	public process(world: IWorld) {
		this.eachTactics(world, function(_e, tactics) {
			// tactics management
			tactics.battleWt = 0;
			tactics.roundWt = 0;
			tactics.rounds = 0;
			tactics.turns = 0;
			tactics.idle = true;
			tactics.nextPhase = "RoundNext";
		});

		world.filterByComponents(["wait_time"], function(e, packet) {
			// wait time reset
			const waitTime = <ComponentWaitTime>packet["wait_time"];
			waitTime.battleReset();
		});
	}
}

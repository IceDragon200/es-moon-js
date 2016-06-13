import ComponentTactics from "components/ComponentTactics";
import PhaseBattleStart from "battle/phases/PhaseBattleStart";
import PhaseRoundNext from "battle/phases/PhaseRoundNext";
import PhaseRoundStart from "battle/phases/PhaseRoundStart";
import PhaseNextTick from "battle/phases/PhaseNextTick";
import PhaseTurnStart from "battle/phases/PhaseTurnStart";
import PhaseActionNext from "battle/phases/PhaseActionNext";
import PhaseActionMake from "battle/phases/PhaseActionMake";
import PhaseActionPrepare from "battle/phases/PhaseActionPrepare";
import PhaseActionExecute from "battle/phases/PhaseActionExecute";
import PhaseActionEnd from "battle/phases/PhaseActionEnd";
import PhaseActionJudge from "battle/phases/PhaseActionJudge";
import PhaseTurnEnd from "battle/phases/PhaseTurnEnd";
import PhaseTurnJudge from "battle/phases/PhaseTurnJudge";
import PhaseRoundEnd from "battle/phases/PhaseRoundEnd";
import PhaseRoundJudge from "battle/phases/PhaseRoundJudge";
import PhaseBattleEnd from "battle/phases/PhaseBattleEnd";
import PhaseBattleJudge from "battle/phases/PhaseBattleJudge";

export default class PhaseManager {
	private phases = {};

	constructor() {
		this.phases["BattleStart"] = new PhaseBattleStart();
		this.phases["RoundNext"] = new PhaseRoundNext();
		this.phases["RoundStart"] = new PhaseRoundStart();
		this.phases["NextTick"] = new PhaseNextTick();
		this.phases["ActionNext"] = new PhaseActionNext();
		this.phases["ActionMake"] = new PhaseActionMake();
		this.phases["ActionPrepare"] = new PhaseActionPrepare();
		this.phases["ActionExecute"] = new PhaseActionExecute();
		this.phases["ActionEnd"] = new PhaseActionEnd();
		this.phases["ActionJudge"] = new PhaseActionJudge();
		this.phases["TurnStart"] = new PhaseTurnStart();
		this.phases["TurnEnd"] = new PhaseTurnEnd();
		this.phases["TurnJudge"] = new PhaseTurnJudge();
		this.phases["RoundEnd"] = new PhaseRoundEnd();
		this.phases["RoundJudge"] = new PhaseRoundJudge();
		this.phases["BattleEnd"] = new PhaseBattleEnd();
		this.phases["BattleJudge"] = new PhaseBattleJudge();
	}

	private gotoNextPhase(tactics: ComponentTactics) {
		if (tactics.nextPhase) {
			tactics.phase = tactics.nextPhase;
			tactics.nextPhase = null;
		}
	}

	public update(world: IWorld) {
		world.filterByComponents(["tactics"], (entity, packet) => {
			const tactics = <ComponentTactics>packet["tactics"];
			while (!tactics.idle) {
				this.gotoNextPhase(tactics);
				this.phases[tactics.phase].process(world);
			}
		});
	}
}

import StateBase from "states/StateBase";
import PhaseManager from "battle/PhaseManager";

export default class StateBattle extends StateBase {
	private phaseManager: PhaseManager;

	public init() {
		this.phaseManager = new PhaseManager();
	}


}

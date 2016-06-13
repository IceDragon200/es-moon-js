import Component from "ecs/Component";

export default class ComponentTactics extends Component {
	public idle = false;
	public battleWt = 0;
	public roundWt = 0;
	public roundWtMax = 1000;
	public rounds = 0;
	public turns = 0;
	public phase: string;
	public nextPhase: string;
	public subjectId: string;

	public getName(): string {
		return "tactics";
	}
}

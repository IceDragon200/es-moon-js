import Component from "ecs/Component";

export default class ComponentActionPoints extends Component {
	public value: number = 0;
	public max: number = 10;
	public regen: number = 3;

	public getName(): string {
		return "action_points";
	}
}

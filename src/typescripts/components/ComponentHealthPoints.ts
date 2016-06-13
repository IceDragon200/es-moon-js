import Component from "ecs/Component";

export default class ComponentHealthPoints extends Component {
	public value: number = 0;
	public max: number = 10;
	public regen: number = 1;

	public getName(): string {
		return "health_points";
	}
}

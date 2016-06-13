import Component from "ecs/Component";

export default class ComponentPosition extends Component {
	public x: number = 0;
	public y: number = 0;
	public z: number = 0;

	public getName(): string {
		return "position";
	}

	public translate(x: number, y: number, z: number) {
		this.x += x;
		this.y += y;
		this.z += z;
		return this;
	}

	public moveto(x: number, y: number, z: number) {
		this.x = x;
		this.y = y;
		this.z = z;
		return this;
	}
}

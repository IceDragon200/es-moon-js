import Component from "ecs/Component";
import Vec3 from "utils/Vec3";

export default class ComponentMapPosition extends Component {
	public position: IVec3<number> = new Vec3();
	public target: IVec3<number> = new Vec3();
	public moving: boolean;

	public getName(): string {
		return "map_position";
	}

	public moveto(vec: IVec3<number>) {
		this.target.x = this.position.x = vec.x;
		this.target.y = this.position.y = vec.y;
		this.target.z = this.position.z = vec.z;
		return this;
	}
}

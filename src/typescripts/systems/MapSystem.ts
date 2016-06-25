import ComponentPosition from "components/ComponentPosition";
import ComponentMapPosition from "components/ComponentMapPosition";
import System from "ecs/System";

export default class MapSystem extends System {
	private tilesize: IVec2<number>;

	constructor(tilesize: IVec2<number>) {
		super();
		this.tilesize = tilesize;
	}

	public onDestroy() {
	}

	public update(world: IWorld, ticks: number) {
		world.filterByComponents(["position", "map_position"], (_en, packet) => {
			const position = <ComponentPosition>packet["position"];
			const mapPosition = <ComponentMapPosition>packet["map_position"];

			position.x = mapPosition.position.x * this.tilesize.x;
			position.y = mapPosition.position.y * this.tilesize.y;
			position.z = mapPosition.position.z;
		});
	}
}

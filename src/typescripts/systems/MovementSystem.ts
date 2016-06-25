import ComponentMapPosition from "components/ComponentMapPosition";
import System from "ecs/System";
import Interpolation from "utils/Interpolation";

export default class MovementSystem extends System {
	public onDestroy() {
	}

	public update(world: IWorld, ticks: number) {
		world.filterByComponents(["map_position"], (_en, packet) => {
			const mp = <ComponentMapPosition>packet["map_position"];
			const moveSpeed = 0.1;
			mp.moving = mp.position.x != mp.target.x ||
				mp.position.y != mp.target.y ||
				mp.position.z != mp.target.z;

			if (mp.position.x != mp.target.x) {
				mp.position.x = Interpolation.lerpFixed(mp.target.x, mp.position.x, moveSpeed);
			}

			if (mp.position.y != mp.target.y) {
				mp.position.y = Interpolation.lerpFixed(mp.target.y, mp.position.y, moveSpeed);
			}

			if (mp.position.z != mp.target.z) {
				mp.position.z = Interpolation.lerpFixed(mp.target.z, mp.position.z, moveSpeed);
			}
		});
	}
}

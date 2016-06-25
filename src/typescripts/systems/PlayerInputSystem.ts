import ComponentMapPosition from "components/ComponentMapPosition";
import System from "ecs/System";
import Keyboard from "utils/Keyboard";
import Vec3 from "utils/Vec3";

export default class PlayerInputSystem extends System {
	private keyboard: Keyboard = new Keyboard([
		{ code: Keyboard.KEYS.up, preventDefault: true },
		{ code: Keyboard.KEYS.down, preventDefault: true },
		{ code: Keyboard.KEYS.left, preventDefault: true },
		{ code: Keyboard.KEYS.right, preventDefault: true }
	]);

	public onDestroy() {
	}

	public update(world: IWorld, ticks: number) {
		const vel: IVec3<number> = { x: 0, y: 0, z: 0 };
		if (this.keyboard.isDown(Keyboard.KEYS.up)) {
			vel.y -= 1;
		} else if (this.keyboard.isDown(Keyboard.KEYS.down)) {
			vel.y += 1;
		}

		if (this.keyboard.isDown(Keyboard.KEYS.left)) {
			vel.x -= 1;
		} else if (this.keyboard.isDown(Keyboard.KEYS.right)) {
			vel.x += 1;
		}

		if (vel.x != 0 || vel.y != 0) {
			world.filterByComponents(["player_controlled", "map_position"], function(_entity, packet) {
				const mapPosition = <ComponentMapPosition>packet["map_position"];
				if (!mapPosition.moving) {
					Vec3.add(mapPosition.target, vel);
				}
			});
		}

		this.keyboard.ticks = ticks;
	}
}

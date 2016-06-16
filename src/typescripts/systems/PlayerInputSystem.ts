import System from "ecs/System";
import Keyboard from "utils/Keyboard";

export default class PlayerInputSystem extends System {
	private keyboard: Keyboard = new Keyboard([
		{ code: Keyboard.KEYS.up, preventDefault: true },
		{ code: Keyboard.KEYS.down, preventDefault: true },
		{ code: Keyboard.KEYS.left, preventDefault: true },
		{ code: Keyboard.KEYS.right, preventDefault: true }
	]);

	public update(world: IWorld, ticks: number) {
		if (this.keyboard.isDown(Keyboard.KEYS.up)) {
			console.log("up");
		} else if (this.keyboard.isDown(Keyboard.KEYS.down)) {
			console.log("down");
		}
		this.keyboard.ticks = ticks;
	}
}

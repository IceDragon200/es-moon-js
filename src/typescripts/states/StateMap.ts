import StateBase from "states/StateBase";
import ComponentPosition from "components/ComponentPosition";
import ComponentSprite from "components/ComponentSprite";
import RenderSystem from "systems/RenderSystem";
import PlayerInputSystem from "systems/PlayerInputSystem";
import Table from "utils/Table";
import TableUtils from "utils/TableUtils";
import AStar from "utils/AStar";

export default class StateMap extends StateBase {
	public init() {
		super.init();
		const worldUpdater = {
			update: () => {
				this.game.world.update();
			}
		};
		// World.systems
		const rsys = new RenderSystem();
		rsys.view = this.view;
		this.game.world.addSystem(rsys);
		this.game.world.addSystem(new PlayerInputSystem());

		// World.entities
		this.game.world.createEntity(function(entity, world) {
			world.addComponent(entity, new ComponentPosition());
			const sprite = new ComponentSprite();
			sprite.texture = "ph_knight";
			world.addComponent(entity, sprite);
		});

		// State.elements
		this.addElement(worldUpdater);

		const table = Table.fromData({ x: 10, y: 10 }, [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
			0, 1, 1, 1, 1, 1, 1, 0, 1, 0,
			0, 1, 1, 1, 1, 1, 1, 0, 1, 0,
			0, 1, 1, 1, 1, 1, 1, 0, 1, 0,
			0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
			0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
			0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
			0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		]);
		const result = AStar.findPath(table, { x: 1, y: 1 }, { x: 8, y: 3 });
		console.log(result);
		//for (let row of TableUtils.toCsvMap(result)) {
		//	console.log(row);
		//}
	}

	public terminate() {
		super.terminate();
		this.game.world.clearSystems();
		this.game.world.clearEntities();
	}
}

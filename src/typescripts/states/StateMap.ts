import StateBase from "states/StateBase";
import ComponentPosition from "components/ComponentPosition";
import ComponentMapPosition from "components/ComponentMapPosition";
import ComponentSprite from "components/ComponentSprite";
import MapSystem from "systems/MapSystem";
import MovementSystem from "systems/MovementSystem";
import PlayerInputSystem from "systems/PlayerInputSystem";
import RenderSystem from "systems/RenderSystem";

export default class StateMap extends StateBase {
	public init() {
		super.init();
		// World.systems
		this.game.world.addSystem(new PlayerInputSystem());
		this.game.world.addSystem(new MovementSystem());
		this.game.world.addSystem(new MapSystem({ x: 12, y: 12 }));
		const rsys = new RenderSystem();
		rsys.view = this.view;
		this.game.world.addSystem(rsys);

		// World.entities
		this.game.world.createEntity(function(entity, world) {
			world.addComponent(entity, new ComponentPosition());
			world.addComponent(entity, new ComponentMapPosition());
			const sprite = new ComponentSprite();
			sprite.texture = "ph_knight";
			world.addComponent(entity, sprite);
		});

		// State.elements
		const worldUpdater = {
			update: () => {
				this.game.world.update();
			}
		};
		this.addElement(worldUpdater);
	}

	public terminate() {
		super.terminate();
		this.game.world.clearSystems();
		this.game.world.clearEntities();
	}
}

import StateBase from "states/StateBase";
import ComponentPosition from "components/ComponentPosition";
import ComponentSprite from "components/ComponentSprite";
import RenderSystem from "systems/RenderSystem";

export default class StateMap extends StateBase {
	public init() {
		super.init();
		const worldUpdater = {
			update: () => {
				this.game.world.update();
			}
		};
		this.addElement(worldUpdater);
		this.game.world.createEntity(function(entity, world) {
			world.addComponent(entity, new ComponentPosition());
			const sprite = new ComponentSprite();
			sprite.texture = "placeholders";
			world.addComponent(entity, sprite);
		});
		const rsys = new RenderSystem();
		rsys.view = this.view;
		this.game.world.addSystem(rsys);
	}
}

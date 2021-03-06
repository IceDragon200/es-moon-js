import ComponentPosition from "components/ComponentPosition";
import ComponentSprite from "components/ComponentSprite";
import System from "ecs/System";

export default class RenderSystem extends System {
	public view: PIXI.Container;

	constructor() {
		super();
		this.events.on("added.component", (event) => {
			const component: IComponent = event.component;

			if ("sprite" === component.getName()) {
				const sp: ComponentSprite = <any>component;
				sp._sprite = new PIXI.Sprite();
				sp._requireRefresh = true;
				console.log("RenderSystem : Initialized Sprite");
				this.view.addChild(sp._sprite);
			}
		});

		this.events.on("remove.component", (event) => {
			const component: IComponent = event.component;

			if ("sprite" === component.getName()) {
				const sp: ComponentSprite = <any>component;

				if (sp._sprite) {
					this.view.removeChild(sp._sprite);
					sp._sprite.destroy();
					sp._sprite = null;
				}
			}
		});
	}

	public onDestroy() {
	}

	public update(world: IWorld, ticks: number) {
		world.filterByComponents(["sprite", "position"], (_e, packet) => {
			const sp = <ComponentSprite>packet["sprite"];
			const position = <ComponentPosition>packet["position"];
			sp._sprite.position.set(position.x, position.y);
			if (sp._requireRefresh) {
				sp._requireRefresh = false;
				sp._sprite.texture = PIXI.utils.TextureCache[sp.texture];
			}
		});
	}
}

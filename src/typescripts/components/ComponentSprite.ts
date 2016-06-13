import Vec2 from "utils/Vec2";
import Component from "ecs/Component";

export default class ComponentSprite extends Component {
	// texture handle name
	public texture: string;
	public position = new Vec2(0, 0);
	public opacity: number = 1.0;
	public _sprite: PIXI.Sprite;
	public _requireRefresh: boolean = false;

	public getName(): string {
		return "sprite";
	}

	public setTexture(texture: string) {
		this.texture = texture;
		this._requireRefresh = true;
	}
}

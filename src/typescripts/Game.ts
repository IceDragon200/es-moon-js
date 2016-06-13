import GameWorld from "game_objects/GameWorld";
import StateManager from "StateManager";

export default class Game {
	public renderer: (PIXI.CanvasRenderer | PIXI.WebGLRenderer);
	public stage = new PIXI.Container();
	public assetLoader = PIXI.loader;
	public stateManager = new StateManager();
	public world = new GameWorld();

	public static instance: Game;

	constructor() {
		Game.instance = this;
	}

	public update() {
		this.stateManager.update();
	}
}

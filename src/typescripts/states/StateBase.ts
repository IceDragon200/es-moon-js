import Game from "Game";

export default class StateBase {
	public elements: Array<IElement> = [];
	public view = new PIXI.Container();
	public game: Game;
	private started: boolean = false;

	constructor(game) {
		this.game = game;
	}

	public init() {
		console.log("State #init", this);
	}

	public start() {
		console.log("State #start", this);
	}

	public terminate() {
		console.log("State #terminate", this);
		this.game.stage.removeChild(this.view);
	}

	public pause() {
		console.log("State #pause", this);
		this.game.stage.removeChild(this.view);
	}

	public resume() {
		console.log("State #resume", this);
		this.game.stage.addChild(this.view);
	}

	public addElement(obj: IElement) {
		this.elements.push(obj);
	}

	public removeElement(obj: IElement) {
		_.remove(this.elements, obj);
	}

	public update() {
		this.elements.forEach(function(element) {
			element.update();
		});
	}

	public tick() {
		if (!this.started) {
			this.game.stage.addChild(this.view);
			this.started = true;
			this.start();
		}
		this.update();
	}
}

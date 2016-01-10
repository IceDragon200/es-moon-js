class Game {
	public stage = new PIXI.Container();

	public run() {
		const renderer = PIXI.autoDetectRenderer(800, 600);
		renderer.view.style.alignSelf("center");
		document.body.appendChild(renderer.view);
		renderer.render(this.stage);
	}
}

const game = new Game();
game.run();

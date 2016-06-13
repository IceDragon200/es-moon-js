import StateBattle from "states/StateBattle";
import StateMap from "states/StateMap";
import Game from "Game";

function main() {
	const game: Game = new Game();

	//const texture = game.assetLoader.resources["icons/weapons/spear"].texture;
	//const sprite = new PIXI.Sprite(texture);
	//const battle = new StateBattle(game);
	//game.stage.addChild(sprite);

	function loaderProgress(loader, resource) {
		console.log(loader.progress);
	}

	function preload(cb) {
		game.assetLoader
			.add("/icons/weapons/spear", "/assets/icons/weapons/spear.png")
			.add("/assets/placeholders.json")
			.load(cb);

		game.assetLoader.on("progress", (l, resource) => {
			loaderProgress(l, resource);
		});
	}

	function run(startFunction: (game: Game) => void) {
		game.renderer = PIXI.autoDetectRenderer(800, 600);
		document.body.appendChild(game.renderer.view);

		preload(() => {
			startFunction(game);
		});
	}

	run(function(gm) {
		gm.stateManager.push(new StateMap(gm));
		const step = function() {
			game.update();
			game.renderer.render(game.stage);
			requestAnimationFrame(step);
		};
		step();
	});
}

main();

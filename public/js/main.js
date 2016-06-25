define(["require", "exports", "states/StateMap", "Game"], function (require, exports, StateMap_1, Game_1) {
    "use strict";
    function main() {
        var game = new Game_1.default();
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
            game.assetLoader.on("progress", function (l, resource) {
                loaderProgress(l, resource);
            });
        }
        function run(startFunction) {
            game.renderer = PIXI.autoDetectRenderer(800, 600);
            document.body.appendChild(game.renderer.view);
            preload(function () {
                startFunction(game);
            });
        }
        run(function (gm) {
            gm.stateManager.push(new StateMap_1.default(gm));
            var step = function () {
                game.update();
                game.renderer.render(game.stage);
                requestAnimationFrame(step);
            };
            step();
        });
    }
    main();
});

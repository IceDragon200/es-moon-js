define(["require", "exports", "game_objects/GameWorld", "StateManager"], function (require, exports, GameWorld_1, StateManager_1) {
    var Game = (function () {
        function Game() {
            this.stage = new PIXI.Container();
            this.assetLoader = PIXI.loader;
            this.stateManager = new StateManager_1.default();
            this.world = new GameWorld_1.default();
            Game.instance = this;
        }
        Game.prototype.update = function () {
            this.stateManager.update();
        };
        return Game;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Game;
});

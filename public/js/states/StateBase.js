define(["require", "exports"], function (require, exports) {
    "use strict";
    var StateBase = (function () {
        function StateBase(game) {
            this.elements = [];
            this.view = new PIXI.Container();
            this.started = false;
            this.game = game;
        }
        StateBase.prototype.init = function () {
            console.log("State #init", this);
        };
        StateBase.prototype.start = function () {
            console.log("State #start", this);
        };
        StateBase.prototype.terminate = function () {
            console.log("State #terminate", this);
            this.game.stage.removeChild(this.view);
        };
        StateBase.prototype.pause = function () {
            console.log("State #pause", this);
            this.game.stage.removeChild(this.view);
        };
        StateBase.prototype.resume = function () {
            console.log("State #resume", this);
            this.game.stage.addChild(this.view);
        };
        StateBase.prototype.addElement = function (obj) {
            this.elements.push(obj);
        };
        StateBase.prototype.removeElement = function (obj) {
            _.remove(this.elements, obj);
        };
        StateBase.prototype.update = function () {
            this.elements.forEach(function (element) {
                element.update();
            });
        };
        StateBase.prototype.tick = function () {
            if (!this.started) {
                this.game.stage.addChild(this.view);
                this.started = true;
                this.start();
            }
            this.update();
        };
        return StateBase;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = StateBase;
});

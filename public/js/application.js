(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require("./main");

},{"./main":2}],2:[function(require,module,exports){
var Game = (function () {
    function Game() {
        this.stage = new PIXI.Container();
    }
    Game.prototype.run = function () {
        var renderer = PIXI.autoDetectRenderer(800, 600);
        renderer.view.style.alignSelf("center");
        document.body.appendChild(renderer.view);
        renderer.render(this.stage);
    };
    return Game;
})();
var game = new Game();
game.run();

},{}]},{},[1])
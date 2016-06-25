define(["require", "exports"], function (require, exports) {
    "use strict";
    var Tileset = (function () {
        function Tileset() {
            this.index = {};
        }
        Tileset.prototype.add = function (id, res) {
            this.index[id] = res;
            return this;
        };
        Tileset.prototype.get = function (id) {
            return this.index[id];
        };
        return Tileset;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Tileset;
});

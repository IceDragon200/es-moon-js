define(["require", "exports"], function (require, exports) {
    var Vec2 = (function () {
        function Vec2(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.x = x;
            this.y = y;
        }
        Vec2.prototype.set = function (x, y) {
            this.x = x;
            this.y = y;
            return this;
        };
        Vec2.prototype.add = function (other) {
            this.x += other.x;
            this.y += other.y;
            return this;
        };
        Vec2.prototype.sub = function (other) {
            this.x -= other.x;
            this.y -= other.y;
            return this;
        };
        Vec2.prototype.mul = function (other) {
            this.x *= other.x;
            this.y *= other.y;
            return this;
        };
        Vec2.prototype.div = function (other) {
            this.x /= other.x;
            this.y /= other.y;
            return this;
        };
        return Vec2;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Vec2;
});

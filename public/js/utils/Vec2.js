define(["require", "exports"], function (require, exports) {
    var Vec2 = (function () {
        function Vec2(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.x = x;
            this.y = y;
        }
        Vec2.prototype.copy = function () {
            return new Vec2(this.x, this.y);
        };
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
        Vec2.equals = function (a, b) {
            return a.x === b.x && a.y === b.y;
        };
        Vec2.from = function (vec2) {
            return new Vec2(vec2.x, vec2.y);
        };
        Vec2.NORTH = new Vec2(0, -1);
        Vec2.SOUTH = new Vec2(0, 1);
        Vec2.EAST = new Vec2(1, 0);
        Vec2.WEST = new Vec2(-1, 0);
        return Vec2;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Vec2;
});

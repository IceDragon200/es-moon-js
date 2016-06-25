define(["require", "exports"], function (require, exports) {
    "use strict";
    var Vec3 = (function () {
        function Vec3(x, y, z) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            this.x = x;
            this.y = y;
            this.z = z;
        }
        Vec3.prototype.copy = function () {
            return new Vec3(this.x, this.y, this.z);
        };
        Vec3.set = function (vec, x, y, z) {
            vec.x = x;
            vec.y = y;
            vec.z = z;
            return vec;
        };
        Vec3.add = function (vec, other) {
            vec.x += other.x;
            vec.y += other.y;
            vec.z += other.z;
            return vec;
        };
        Vec3.sub = function (vec, other) {
            vec.x -= other.x;
            vec.y -= other.y;
            vec.z -= other.z;
            return vec;
        };
        Vec3.mul = function (vec, other) {
            vec.x *= other.x;
            vec.y *= other.y;
            vec.z *= other.z;
            return vec;
        };
        Vec3.div = function (vec, other) {
            vec.x /= other.x;
            vec.y /= other.y;
            vec.z /= other.z;
            return vec;
        };
        Vec3.equals = function (a, b) {
            return a.x === b.x && a.y === b.y && a.z === b.z;
        };
        Vec3.from = function (vec) {
            return new Vec3(vec.x, vec.y, vec.z);
        };
        Vec3.NORTH = new Vec3(0, -1);
        Vec3.SOUTH = new Vec3(0, 1);
        Vec3.EAST = new Vec3(1, 0);
        Vec3.WEST = new Vec3(-1, 0);
        return Vec3;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Vec3;
});

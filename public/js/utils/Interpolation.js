define(["require", "exports"], function (require, exports) {
    "use strict";
    var InterpolationUtils = (function () {
        function InterpolationUtils() {
        }
        InterpolationUtils.prototype.lerpFixed = function (target, cur, amt) {
            if (target < cur) {
                return Math.max(target, cur - amt);
            }
            else if (target > cur) {
                return Math.min(target, cur + amt);
            }
            return target;
        };
        InterpolationUtils.prototype.lerp = function (a, b, delta) {
            return a + (b - a) * delta;
        };
        return InterpolationUtils;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new InterpolationUtils();
});

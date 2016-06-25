var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "ecs/Component"], function (require, exports, Component_1) {
    "use strict";
    var ComponentHealthPoints = (function (_super) {
        __extends(ComponentHealthPoints, _super);
        function ComponentHealthPoints() {
            _super.apply(this, arguments);
            this.value = 0;
            this.max = 10;
            this.regen = 1;
        }
        ComponentHealthPoints.prototype.getName = function () {
            return "health_points";
        };
        return ComponentHealthPoints;
    }(Component_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ComponentHealthPoints;
});

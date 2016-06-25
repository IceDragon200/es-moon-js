var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "ecs/Component", "utils/Vec3"], function (require, exports, Component_1, Vec3_1) {
    "use strict";
    var ComponentMapPosition = (function (_super) {
        __extends(ComponentMapPosition, _super);
        function ComponentMapPosition() {
            _super.apply(this, arguments);
            this.position = new Vec3_1.default();
            this.target = new Vec3_1.default();
        }
        ComponentMapPosition.prototype.getName = function () {
            return "map_position";
        };
        ComponentMapPosition.prototype.moveto = function (vec) {
            this.target.x = this.position.x = vec.x;
            this.target.y = this.position.y = vec.y;
            this.target.z = this.position.z = vec.z;
            return this;
        };
        return ComponentMapPosition;
    }(Component_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ComponentMapPosition;
});

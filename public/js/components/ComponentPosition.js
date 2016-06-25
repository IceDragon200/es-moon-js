var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "ecs/Component"], function (require, exports, Component_1) {
    "use strict";
    var ComponentPosition = (function (_super) {
        __extends(ComponentPosition, _super);
        function ComponentPosition() {
            _super.apply(this, arguments);
            this.x = 0;
            this.y = 0;
            this.z = 0;
        }
        ComponentPosition.prototype.getName = function () {
            return "position";
        };
        ComponentPosition.prototype.translate = function (x, y, z) {
            this.x += x;
            this.y += y;
            this.z += z;
            return this;
        };
        ComponentPosition.prototype.moveto = function (x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
            return this;
        };
        return ComponentPosition;
    }(Component_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ComponentPosition;
});

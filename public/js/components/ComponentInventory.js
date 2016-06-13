var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "ecs/Component"], function (require, exports, Component_1) {
    var ComponentInventory = (function (_super) {
        __extends(ComponentInventory, _super);
        function ComponentInventory() {
            _super.apply(this, arguments);
        }
        ComponentInventory.prototype.getName = function () {
            return "inventory";
        };
        return ComponentInventory;
    })(Component_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ComponentInventory;
});

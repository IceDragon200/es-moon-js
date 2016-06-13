var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "utils/Vec2", "ecs/Component"], function (require, exports, Vec2_1, Component_1) {
    var ComponentSprite = (function (_super) {
        __extends(ComponentSprite, _super);
        function ComponentSprite() {
            _super.apply(this, arguments);
            this.position = new Vec2_1.default(0, 0);
            this.opacity = 1.0;
            this._requireRefresh = false;
        }
        ComponentSprite.prototype.getName = function () {
            return "sprite";
        };
        ComponentSprite.prototype.setClipRect = function (rect) {
            this._clipRect = rect;
            this._requireRefresh = true;
        };
        return ComponentSprite;
    })(Component_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ComponentSprite;
});

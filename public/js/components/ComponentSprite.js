var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "ecs/Component"], function (require, exports, Component_1) {
    "use strict";
    var ComponentSprite = (function (_super) {
        __extends(ComponentSprite, _super);
        function ComponentSprite() {
            _super.apply(this, arguments);
            this.opacity = 1.0;
            this._requireRefresh = false;
        }
        ComponentSprite.prototype.getName = function () {
            return "sprite";
        };
        ComponentSprite.prototype.setTexture = function (texture) {
            this.texture = texture;
            this._requireRefresh = true;
        };
        return ComponentSprite;
    }(Component_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ComponentSprite;
});

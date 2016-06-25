var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "ecs/System"], function (require, exports, System_1) {
    "use strict";
    var RenderSystem = (function (_super) {
        __extends(RenderSystem, _super);
        function RenderSystem() {
            var _this = this;
            _super.call(this);
            this.events.on("added.component", function (event) {
                var component = event.component;
                if ("sprite" === component.getName()) {
                    var sp = component;
                    sp._sprite = new PIXI.Sprite();
                    sp._requireRefresh = true;
                    console.log("RenderSystem : Initialized Sprite");
                    _this.view.addChild(sp._sprite);
                }
            });
            this.events.on("remove.component", function (event) {
                var component = event.component;
                if ("sprite" === component.getName()) {
                    var sp = component;
                    if (sp._sprite) {
                        _this.view.removeChild(sp._sprite);
                        sp._sprite.destroy();
                        sp._sprite = null;
                    }
                }
            });
        }
        RenderSystem.prototype.onDestroy = function () {
        };
        RenderSystem.prototype.update = function (world, ticks) {
            world.filterByComponents(["sprite", "position"], function (_e, packet) {
                var sp = packet["sprite"];
                var position = packet["position"];
                sp._sprite.position.set(position.x, position.y);
                if (sp._requireRefresh) {
                    sp._requireRefresh = false;
                    sp._sprite.texture = PIXI.utils.TextureCache[sp.texture];
                }
            });
        };
        return RenderSystem;
    }(System_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = RenderSystem;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "Game", "ecs/System"], function (require, exports, Game_1, System_1) {
    var RenderSystem = (function (_super) {
        __extends(RenderSystem, _super);
        function RenderSystem() {
            var _this = this;
            _super.call(this);
            this.events.on("added.component", function (event) {
                var component = event.component;
                if ("sprite" === component.getName()) {
                    var sp = component;
                    var texture = Game_1.default.instance.assetLoader.resources[sp.texture].texture;
                    sp._sprite = new PIXI.Sprite(texture);
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
        RenderSystem.prototype.update = function (world, ticks) {
            world.filterByComponents(["sprite"], function (_e, comps) {
                var sp = comps["sprite"];
                if (sp._requireRefresh) {
                    sp._requireRefresh = false;
                }
            });
        };
        return RenderSystem;
    })(System_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = RenderSystem;
});

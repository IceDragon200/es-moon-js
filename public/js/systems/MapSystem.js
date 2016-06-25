var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "ecs/System"], function (require, exports, System_1) {
    "use strict";
    var MapSystem = (function (_super) {
        __extends(MapSystem, _super);
        function MapSystem(tilesize) {
            _super.call(this);
            this.tilesize = tilesize;
        }
        MapSystem.prototype.onDestroy = function () {
        };
        MapSystem.prototype.update = function (world, ticks) {
            var _this = this;
            world.filterByComponents(["position", "map_position"], function (_en, packet) {
                var position = packet["position"];
                var mapPosition = packet["map_position"];
                position.x = mapPosition.position.x * _this.tilesize.x;
                position.y = mapPosition.position.y * _this.tilesize.y;
                position.z = mapPosition.position.z;
            });
        };
        return MapSystem;
    }(System_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MapSystem;
});

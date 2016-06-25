var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "ecs/System", "utils/Interpolation"], function (require, exports, System_1, Interpolation_1) {
    "use strict";
    var MovementSystem = (function (_super) {
        __extends(MovementSystem, _super);
        function MovementSystem() {
            _super.apply(this, arguments);
        }
        MovementSystem.prototype.onDestroy = function () {
        };
        MovementSystem.prototype.update = function (world, ticks) {
            world.filterByComponents(["map_position"], function (_en, packet) {
                var mp = packet["map_position"];
                var moveSpeed = 0.1;
                mp.moving = mp.position.x != mp.target.x ||
                    mp.position.y != mp.target.y ||
                    mp.position.z != mp.target.z;
                if (mp.position.x != mp.target.x) {
                    mp.position.x = Interpolation_1.default.lerpFixed(mp.target.x, mp.position.x, moveSpeed);
                }
                if (mp.position.y != mp.target.y) {
                    mp.position.y = Interpolation_1.default.lerpFixed(mp.target.y, mp.position.y, moveSpeed);
                }
                if (mp.position.z != mp.target.z) {
                    mp.position.z = Interpolation_1.default.lerpFixed(mp.target.z, mp.position.z, moveSpeed);
                }
            });
        };
        return MovementSystem;
    }(System_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MovementSystem;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "ecs/System", "utils/Keyboard", "utils/Vec3"], function (require, exports, System_1, Keyboard_1, Vec3_1) {
    "use strict";
    var PlayerInputSystem = (function (_super) {
        __extends(PlayerInputSystem, _super);
        function PlayerInputSystem() {
            _super.apply(this, arguments);
            this.keyboard = new Keyboard_1.default([
                { code: Keyboard_1.default.KEYS.up, preventDefault: true },
                { code: Keyboard_1.default.KEYS.down, preventDefault: true },
                { code: Keyboard_1.default.KEYS.left, preventDefault: true },
                { code: Keyboard_1.default.KEYS.right, preventDefault: true }
            ]);
        }
        PlayerInputSystem.prototype.onDestroy = function () {
        };
        PlayerInputSystem.prototype.update = function (world, ticks) {
            var vel = { x: 0, y: 0, z: 0 };
            if (this.keyboard.isDown(Keyboard_1.default.KEYS.up)) {
                vel.y -= 1;
            }
            else if (this.keyboard.isDown(Keyboard_1.default.KEYS.down)) {
                vel.y += 1;
            }
            if (this.keyboard.isDown(Keyboard_1.default.KEYS.left)) {
                vel.x -= 1;
            }
            else if (this.keyboard.isDown(Keyboard_1.default.KEYS.right)) {
                vel.x += 1;
            }
            if (vel.x != 0 || vel.y != 0) {
                world.filterByComponents(["player_controlled", "map_position"], function (_entity, packet) {
                    var mapPosition = packet["map_position"];
                    if (!mapPosition.moving) {
                        Vec3_1.default.add(mapPosition.target, vel);
                    }
                });
            }
            this.keyboard.ticks = ticks;
        };
        return PlayerInputSystem;
    }(System_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PlayerInputSystem;
});

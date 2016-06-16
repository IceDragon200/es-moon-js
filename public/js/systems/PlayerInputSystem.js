var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "ecs/System", "utils/Keyboard"], function (require, exports, System_1, Keyboard_1) {
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
        PlayerInputSystem.prototype.update = function (world, ticks) {
            if (this.keyboard.isDown(Keyboard_1.default.KEYS.up)) {
                console.log("up");
            }
            else if (this.keyboard.isDown(Keyboard_1.default.KEYS.down)) {
                console.log("down");
            }
            this.keyboard.ticks = ticks;
        };
        return PlayerInputSystem;
    })(System_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PlayerInputSystem;
});

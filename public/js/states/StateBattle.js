var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "states/StateBase", "battle/PhaseManager"], function (require, exports, StateBase_1, PhaseManager_1) {
    var StateBattle = (function (_super) {
        __extends(StateBattle, _super);
        function StateBattle() {
            _super.apply(this, arguments);
        }
        StateBattle.prototype.init = function () {
            this.phaseManager = new PhaseManager_1.default();
        };
        return StateBattle;
    })(StateBase_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = StateBattle;
});

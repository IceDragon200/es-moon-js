var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./PhaseBase"], function (require, exports, PhaseBase_1) {
    "use strict";
    var PhaseBattleEnd = (function (_super) {
        __extends(PhaseBattleEnd, _super);
        function PhaseBattleEnd() {
            _super.apply(this, arguments);
        }
        PhaseBattleEnd.prototype.process = function (world) {
            this.eachTactics(world, function (_e, tactics) {
                tactics.nextPhase = "BattleJudge";
            });
        };
        return PhaseBattleEnd;
    }(PhaseBase_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PhaseBattleEnd;
});

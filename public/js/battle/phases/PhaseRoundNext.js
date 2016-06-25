var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./PhaseBase"], function (require, exports, PhaseBase_1) {
    "use strict";
    var PhaseRoundNext = (function (_super) {
        __extends(PhaseRoundNext, _super);
        function PhaseRoundNext() {
            _super.apply(this, arguments);
        }
        PhaseRoundNext.prototype.process = function (world) {
            this.eachTactics(world, function (e, tactics) {
                tactics.rounds += 1;
                tactics.roundWt = tactics.roundWtMax;
                tactics.nextPhase = "RoundStart";
            });
        };
        return PhaseRoundNext;
    }(PhaseBase_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PhaseRoundNext;
});

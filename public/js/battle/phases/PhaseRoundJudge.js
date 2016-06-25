var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./PhaseBase"], function (require, exports, PhaseBase_1) {
    "use strict";
    var PhaseRoundJudge = (function (_super) {
        __extends(PhaseRoundJudge, _super);
        function PhaseRoundJudge() {
            _super.apply(this, arguments);
        }
        PhaseRoundJudge.prototype.process = function (world) {
            this.eachTactics(world, function (_e, tactics) {
                tactics.nextPhase = "RoundNext";
            });
        };
        return PhaseRoundJudge;
    }(PhaseBase_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PhaseRoundJudge;
});

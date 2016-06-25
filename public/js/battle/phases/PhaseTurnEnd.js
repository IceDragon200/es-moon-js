var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./PhaseBase"], function (require, exports, PhaseBase_1) {
    "use strict";
    var PhaseTurnEnd = (function (_super) {
        __extends(PhaseTurnEnd, _super);
        function PhaseTurnEnd() {
            _super.apply(this, arguments);
        }
        PhaseTurnEnd.prototype.process = function (world) {
            this.getSubject(world, function (_t, entity) {
                var wt = world.getComponent(entity, "wait_time");
                if (wt) {
                    wt.value += wt.reset;
                    wt.reset = 0;
                }
            });
            this.eachTactics(world, function (_e, tactics) {
                tactics.nextPhase = "TurnJudge";
            });
        };
        return PhaseTurnEnd;
    }(PhaseBase_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PhaseTurnEnd;
});

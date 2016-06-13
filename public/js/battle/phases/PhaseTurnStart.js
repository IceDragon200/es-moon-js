var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./PhaseBase"], function (require, exports, PhaseBase_1) {
    var PhaseTurnStart = (function (_super) {
        __extends(PhaseTurnStart, _super);
        function PhaseTurnStart() {
            _super.apply(this, arguments);
        }
        PhaseTurnStart.prototype.process = function (world) {
            this.getSubject(world, function (_t, subject) {
                var wt = world.getComponent(subject, "wait_time");
                if (wt)
                    wt.reset = wt.max;
                var ap = world.getComponent(subject, "action_points");
                if (ap)
                    ap.value += ap.regen;
            });
            this.eachTactics(world, function (_e, tactics) {
                tactics.nextPhase = "TurnEnd";
            });
        };
        return PhaseTurnStart;
    })(PhaseBase_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PhaseTurnStart;
});

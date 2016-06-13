var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./PhaseBase"], function (require, exports, PhaseBase_1) {
    var PhaseRoundStart = (function (_super) {
        __extends(PhaseRoundStart, _super);
        function PhaseRoundStart() {
            _super.apply(this, arguments);
        }
        PhaseRoundStart.prototype.process = function (world) {
            this.eachTactics(world, function (e, tactics) {
                tactics.nextPhase = "NextTick";
            });
        };
        return PhaseRoundStart;
    })(PhaseBase_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PhaseRoundStart;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./PhaseBase"], function (require, exports, PhaseBase_1) {
    var PhaseActionJudge = (function (_super) {
        __extends(PhaseActionJudge, _super);
        function PhaseActionJudge() {
            _super.apply(this, arguments);
        }
        PhaseActionJudge.prototype.process = function (world) {
            this.eachTactics(world, function (_e, tactics) {
                tactics.nextPhase = "ActionNext";
            });
        };
        return PhaseActionJudge;
    })(PhaseBase_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PhaseActionJudge;
});

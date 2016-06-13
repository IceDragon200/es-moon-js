var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./PhaseBase"], function (require, exports, PhaseBase_1) {
    var PhaseActionExecute = (function (_super) {
        __extends(PhaseActionExecute, _super);
        function PhaseActionExecute() {
            _super.apply(this, arguments);
        }
        PhaseActionExecute.prototype.process = function (world) {
            this.eachTactics(world, function (_e, tactics) {
                tactics.nextPhase = "ActionEnd";
            });
        };
        return PhaseActionExecute;
    })(PhaseBase_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PhaseActionExecute;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./PhaseBase"], function (require, exports, PhaseBase_1) {
    var PhaseActionNext = (function (_super) {
        __extends(PhaseActionNext, _super);
        function PhaseActionNext() {
            _super.apply(this, arguments);
        }
        PhaseActionNext.prototype.process = function (world) {
            this.getSubject(world, function (t, subject) {
                var actions = world.getComponent(subject, "actions");
                if (subject && actions) {
                    t.nextPhase = "ActionMake";
                }
                else {
                    t.nextPhase = "TurnEnd";
                }
            });
        };
        return PhaseActionNext;
    })(PhaseBase_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PhaseActionNext;
});

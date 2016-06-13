var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./PhaseBase"], function (require, exports, PhaseBase_1) {
    var PhaseBattleStart = (function (_super) {
        __extends(PhaseBattleStart, _super);
        function PhaseBattleStart() {
            _super.apply(this, arguments);
        }
        PhaseBattleStart.prototype.process = function (world) {
            this.eachTactics(world, function (_e, tactics) {
                // tactics management
                tactics.battleWt = 0;
                tactics.roundWt = 0;
                tactics.rounds = 0;
                tactics.turns = 0;
                tactics.idle = true;
                tactics.nextPhase = "RoundNext";
            });
            world.filterByComponents(["wait_time"], function (e, packet) {
                // wait time reset
                var waitTime = packet["wait_time"];
                waitTime.battleReset();
            });
        };
        return PhaseBattleStart;
    })(PhaseBase_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PhaseBattleStart;
});

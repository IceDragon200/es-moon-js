define(["require", "exports", "battle/phases/PhaseBattleStart", "battle/phases/PhaseRoundNext", "battle/phases/PhaseRoundStart", "battle/phases/PhaseNextTick", "battle/phases/PhaseTurnStart", "battle/phases/PhaseActionNext", "battle/phases/PhaseActionMake", "battle/phases/PhaseActionPrepare", "battle/phases/PhaseActionExecute", "battle/phases/PhaseActionEnd", "battle/phases/PhaseActionJudge", "battle/phases/PhaseTurnEnd", "battle/phases/PhaseTurnJudge", "battle/phases/PhaseRoundEnd", "battle/phases/PhaseRoundJudge", "battle/phases/PhaseBattleEnd", "battle/phases/PhaseBattleJudge"], function (require, exports, PhaseBattleStart_1, PhaseRoundNext_1, PhaseRoundStart_1, PhaseNextTick_1, PhaseTurnStart_1, PhaseActionNext_1, PhaseActionMake_1, PhaseActionPrepare_1, PhaseActionExecute_1, PhaseActionEnd_1, PhaseActionJudge_1, PhaseTurnEnd_1, PhaseTurnJudge_1, PhaseRoundEnd_1, PhaseRoundJudge_1, PhaseBattleEnd_1, PhaseBattleJudge_1) {
    var PhaseManager = (function () {
        function PhaseManager() {
            this.phases = {};
            this.phases["BattleStart"] = new PhaseBattleStart_1.default();
            this.phases["RoundNext"] = new PhaseRoundNext_1.default();
            this.phases["RoundStart"] = new PhaseRoundStart_1.default();
            this.phases["NextTick"] = new PhaseNextTick_1.default();
            this.phases["ActionNext"] = new PhaseActionNext_1.default();
            this.phases["ActionMake"] = new PhaseActionMake_1.default();
            this.phases["ActionPrepare"] = new PhaseActionPrepare_1.default();
            this.phases["ActionExecute"] = new PhaseActionExecute_1.default();
            this.phases["ActionEnd"] = new PhaseActionEnd_1.default();
            this.phases["ActionJudge"] = new PhaseActionJudge_1.default();
            this.phases["TurnStart"] = new PhaseTurnStart_1.default();
            this.phases["TurnEnd"] = new PhaseTurnEnd_1.default();
            this.phases["TurnJudge"] = new PhaseTurnJudge_1.default();
            this.phases["RoundEnd"] = new PhaseRoundEnd_1.default();
            this.phases["RoundJudge"] = new PhaseRoundJudge_1.default();
            this.phases["BattleEnd"] = new PhaseBattleEnd_1.default();
            this.phases["BattleJudge"] = new PhaseBattleJudge_1.default();
        }
        PhaseManager.prototype.gotoNextPhase = function (tactics) {
            if (tactics.nextPhase) {
                tactics.phase = tactics.nextPhase;
                tactics.nextPhase = null;
            }
        };
        PhaseManager.prototype.update = function (world) {
            var _this = this;
            world.filterByComponents(["tactics"], function (entity, packet) {
                var tactics = packet["tactics"];
                while (!tactics.idle) {
                    _this.gotoNextPhase(tactics);
                    _this.phases[tactics.phase].process(world);
                }
            });
        };
        return PhaseManager;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PhaseManager;
});

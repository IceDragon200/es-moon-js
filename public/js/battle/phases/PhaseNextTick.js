var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./PhaseBase"], function (require, exports, PhaseBase_1) {
    var PhaseNextTick = (function (_super) {
        __extends(PhaseNextTick, _super);
        function PhaseNextTick() {
            _super.apply(this, arguments);
        }
        PhaseNextTick.prototype.process = function (world) {
            var entities = world.getEntities().filter(function (entity) {
                return world.hasComponent(entity, "wait_time");
            });
            if (entities.length === 0) {
                this.eachTactics(world, function (_e, tactics) {
                    tactics.nextPhase = "BattleEnd";
                });
            }
            else {
                var entity = _.min(entities, function (en) {
                    var wt = world.getComponent(en, "wait_time");
                    return wt.value;
                });
                var ewt = world.getComponent(entity, "wait_time");
                var diff = ewt.value;
                this.eachTactics(world, function (_e, tactics) {
                    var r = tactics.roundWt - diff;
                    if (r < 0) {
                        diff = tactics.roundWt;
                        //tactics.subject = null;
                        tactics.nextPhase = "RoundEnd";
                    }
                    else {
                        //tactics.subject = entity.id;
                        tactics.nextPhase = "TurnStart";
                    }
                    tactics.roundWt -= diff;
                    tactics.battleWt += diff;
                });
                entities.forEach(function (en) {
                    var wt = world.getComponent(en, "wait_time");
                    wt.value -= diff;
                });
            }
        };
        return PhaseNextTick;
    })(PhaseBase_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PhaseNextTick;
});

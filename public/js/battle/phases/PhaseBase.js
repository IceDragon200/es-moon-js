define(["require", "exports"], function (require, exports) {
    var PhaseBase = (function () {
        function PhaseBase() {
        }
        PhaseBase.prototype.eachTactics = function (world, func) {
            world.filterByComponents(["tactics"], function (e, packet) {
                func(e, packet["tactics"]);
            });
        };
        PhaseBase.prototype.getSubject = function (world, func) {
            this.eachTactics(world, function (_e, tactics) {
                if (tactics.subjectId) {
                    world.getEntities().forEach(function (entity) {
                        if (entity.id === tactics.subjectId) {
                            func(tactics, entity);
                        }
                    });
                }
            });
        };
        PhaseBase.prototype.process = function (world) {
        };
        return PhaseBase;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PhaseBase;
});

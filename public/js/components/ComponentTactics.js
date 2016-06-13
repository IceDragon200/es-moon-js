var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "ecs/Component"], function (require, exports, Component_1) {
    var ComponentTactics = (function (_super) {
        __extends(ComponentTactics, _super);
        function ComponentTactics() {
            _super.apply(this, arguments);
            this.idle = false;
            this.battleWt = 0;
            this.roundWt = 0;
            this.roundWtMax = 1000;
            this.rounds = 0;
            this.turns = 0;
        }
        ComponentTactics.prototype.getName = function () {
            return "tactics";
        };
        return ComponentTactics;
    })(Component_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ComponentTactics;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "ecs/Component"], function (require, exports, Component_1) {
    var ComponentWaitTime = (function (_super) {
        __extends(ComponentWaitTime, _super);
        function ComponentWaitTime() {
            _super.apply(this, arguments);
            this.value = 0;
            this.max = 500;
            this.reset = 0;
        }
        ComponentWaitTime.prototype.battleReset = function () {
            this.value = this.max;
        };
        ComponentWaitTime.prototype.turnReset = function () {
            this.value += this.max;
        };
        ComponentWaitTime.prototype.getName = function () {
            return "wait_time";
        };
        return ComponentWaitTime;
    })(Component_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ComponentWaitTime;
});

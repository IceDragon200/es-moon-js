var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "ecs/Component"], function (require, exports, Component_1) {
    "use strict";
    var ComponentMessageBuffer = (function (_super) {
        __extends(ComponentMessageBuffer, _super);
        function ComponentMessageBuffer() {
            _super.apply(this, arguments);
        }
        ComponentMessageBuffer.prototype.getName = function () {
            return "message_buffer";
        };
        return ComponentMessageBuffer;
    }(Component_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ComponentMessageBuffer;
});

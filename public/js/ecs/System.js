define(["require", "exports"], function (require, exports) {
    "use strict";
    var System = (function () {
        function System() {
            this.events = new EventEmitter();
        }
        return System;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = System;
});

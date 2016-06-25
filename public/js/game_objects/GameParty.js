define(["require", "exports"], function (require, exports) {
    "use strict";
    var GameParty = (function () {
        function GameParty() {
            this.members = [];
        }
        GameParty.prototype.getLeader = function () {
            return this.members[0];
        };
        return GameParty;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = GameParty;
});

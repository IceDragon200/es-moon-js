define(["require", "exports", "utils/ID"], function (require, exports, ID_1) {
    var Entity = (function () {
        function Entity() {
            this.id = ID_1.default.base64(16);
        }
        return Entity;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Entity;
});

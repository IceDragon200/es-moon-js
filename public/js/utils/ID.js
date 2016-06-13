define(["require", "exports"], function (require, exports) {
    var IdUtils = (function () {
        function IdUtils() {
        }
        IdUtils.prototype.randChars = function (chars, length) {
            var result = [];
            for (var i = 0; i < length; ++i) {
                result.push(chars[Math.floor(Math.random() * chars.length)]);
            }
            return result.join("");
        };
        IdUtils.prototype.hex16 = function (length) {
            return this.randChars(IdUtils.HEX_CHARS_16, length);
        };
        IdUtils.prototype.hex22 = function (length) {
            return this.randChars(IdUtils.HEX_CHARS_22, length);
        };
        IdUtils.prototype.hex = function (length) {
            return this.hex22(length);
        };
        IdUtils.prototype.octal = function (length) {
            return this.randChars(IdUtils.OCTAL_CHARS, length);
        };
        IdUtils.prototype.base64 = function (length) {
            return this.randChars(IdUtils.BASE_64_CHARS, length);
        };
        IdUtils.prototype.safeBase64 = function (length) {
            return this.randChars(IdUtils.SAFE_BASE_64_CHARS, length);
        };
        // https://jsfiddle.net/briguy37/2MVFd/
        IdUtils.prototype.uuid = function () {
            var d = new Date().getTime();
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
        };
        IdUtils.HEX_CHARS_16 = "0123456789ABCDEF".split("");
        IdUtils.HEX_CHARS_22 = "0123456789ABCDEFabcdef".split("");
        IdUtils.OCTAL_CHARS = "01234567".split("");
        IdUtils.BASE_64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
        IdUtils.SAFE_BASE_64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("");
        return IdUtils;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new IdUtils();
});

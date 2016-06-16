define(["require", "exports", "utils/Vec2"], function (require, exports, Vec2_1) {
    var EnumDir = (function () {
        function EnumDir(axis, ord, inv) {
            this.axis = axis;
            this.ordinal = ord;
            this.inv = inv;
        }
        EnumDir.prototype.inverse = function () {
            return EnumDir.fromOrdinal(this.inv);
        };
        EnumDir.fromOrdinal = function (ord) {
            return this.DIR4[ord];
        };
        EnumDir.fromInvertedOrdinal = function (ord) {
            return this.IDIR4[ord];
        };
        EnumDir.NORTH = new EnumDir(Vec2_1.default.NORTH, 3, 0);
        EnumDir.SOUTH = new EnumDir(Vec2_1.default.SOUTH, 0, 3);
        EnumDir.EAST = new EnumDir(Vec2_1.default.EAST, 2, 1);
        EnumDir.WEST = new EnumDir(Vec2_1.default.WEST, 1, 2);
        EnumDir.DIR4 = [EnumDir.SOUTH, EnumDir.WEST, EnumDir.EAST, EnumDir.NORTH];
        EnumDir.IDIR4 = [EnumDir.NORTH, EnumDir.EAST, EnumDir.WEST, EnumDir.SOUTH];
        return EnumDir;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = EnumDir;
});

define(["require", "exports"], function (require, exports) {
    var TableUtils = (function () {
        function TableUtils() {
        }
        TableUtils.prototype.toArray2D = function (table) {
            var result = new Array(table.ysize);
            table.eachCell(function (x, y, value) {
                if (!result[y]) {
                    result[y] = [];
                }
                result[y][x] = value;
            });
            return result;
        };
        TableUtils.prototype.toCsvMap = function (table) {
            var result = [];
            for (var _i = 0, _a = this.toArray2D(table); _i < _a.length; _i++) {
                var row = _a[_i];
                result.push(row.join(","));
            }
            return result;
        };
        return TableUtils;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new TableUtils();
});

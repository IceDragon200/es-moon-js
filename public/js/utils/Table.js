define(["require", "exports"], function (require, exports) {
    "use strict";
    var Table = (function () {
        function Table(xsize, ysize, defaultValue) {
            if (defaultValue === void 0) { defaultValue = 0; }
            this.xsize = xsize;
            this.ysize = ysize;
            this.defaultValue = defaultValue;
            this.refreshData();
        }
        Table.prototype.refreshData = function () {
            this.size = this.xsize * this.ysize;
            this.data = new Int32Array(this.size);
            this.data.fill(this.defaultValue);
        };
        Table.prototype.get = function (x, y) {
            if (x < 0 || x >= this.xsize || y < 0 || y >= this.ysize) {
                return this.defaultValue;
            }
            return this.data[x + y * this.xsize];
        };
        Table.prototype.set = function (x, y, value) {
            if (x < 0 || x >= this.xsize || y < 0 || y >= this.ysize) {
                return this;
            }
            this.data[x + y * this.xsize] = value;
            return this;
        };
        Table.prototype.eachCell = function (cb) {
            for (var y = 0; y < this.ysize; ++y) {
                for (var x = 0; x < this.xsize; ++x) {
                    cb(x, y, this.get(x, y));
                }
            }
        };
        Table.prototype.blitData = function (tx, ty, srcSize, data, srcRect) {
            if (srcRect === void 0) { srcRect = null; }
            var cols = srcRect ? Math.min(srcSize.x, srcRect.width) : srcSize.x;
            var rows = srcRect ? Math.min(srcSize.y, srcRect.height) : srcSize.y;
            var sx = srcRect ? srcRect.x : 0;
            var sy = srcRect ? srcRect.y : 0;
            for (var y = 0; y < rows; ++y) {
                for (var x = 0; x < cols; ++x) {
                    var value = data[sx + x + (sy + y) * srcSize.x];
                    this.set(tx + x, ty + y, value);
                }
            }
        };
        Table.prototype.blit = function (x, y, table, srcRect) {
            if (srcRect === void 0) { srcRect = null; }
            this.blitData(x, y, { x: table.xsize, y: table.ysize }, table.data, srcRect);
        };
        Table.prototype.resize = function (xsize, ysize) {
            var oldXsize = this.xsize;
            var oldYsize = this.ysize;
            var oldData = this.data;
            this.xsize = xsize;
            this.ysize = ysize;
            this.refreshData();
            this.blitData(0, 0, { x: oldXsize, y: oldYsize }, oldData);
        };
        Table.fromData = function (dimensions, data) {
            var result = new Table(dimensions.x, dimensions.y);
            result.blitData(0, 0, dimensions, Int32Array.from(data));
            return result;
        };
        return Table;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Table;
});

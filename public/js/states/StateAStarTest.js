define(["require", "exports", "utils/AStar", "utils/Table"], function (require, exports, AStar_1, Table_1) {
    "use strict";
    var StateAStarTest = (function () {
        function StateAStarTest() {
        }
        StateAStarTest.prototype.init = function () {
            var table = Table_1.default.fromData({ x: 10, y: 10 }, [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
                0, 1, 1, 1, 1, 1, 1, 0, 1, 0,
                0, 1, 1, 1, 1, 1, 1, 0, 1, 0,
                0, 1, 1, 1, 1, 1, 1, 0, 1, 0,
                0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
                0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
                0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
                0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ]);
            var result = AStar_1.default.findPath(table, { x: 1, y: 1 }, { x: 8, y: 3 });
            console.log(result);
            //for (let row of TableUtils.toCsvMap(result)) {
            //	console.log(row);
            //}
        };
        return StateAStarTest;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = StateAStarTest;
});

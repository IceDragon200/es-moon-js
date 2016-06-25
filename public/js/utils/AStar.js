define(["require", "exports", "utils/Table", "utils/Vec2", "utils/EnumDir"], function (require, exports, Table_1, Vec2_1, EnumDir_1) {
    "use strict";
    var AStar = (function () {
        function AStar() {
        }
        AStar.findPath = function (table, fromPos, toPos) {
            if (Vec2_1.default.equals(fromPos, toPos))
                return [];
            var frontier = [fromPos];
            var visited = new Table_1.default(table.xsize, table.ysize);
            visited.set(fromPos.x, fromPos.y, 1);
            var earlyExit = false;
            while (frontier.length > 0) {
                var node = frontier.shift();
                for (var _i = 0, _a = EnumDir_1.default.DIR4; _i < _a.length; _i++) {
                    var dir = _a[_i];
                    var tx = node.x + dir.axis.x;
                    var ty = node.y + dir.axis.y;
                    if (visited.get(tx, ty) == 0) {
                        if (table.get(tx, ty) > 0) {
                            // Reachable from dir
                            visited.set(tx, ty, dir.inv);
                            frontier.push({ x: tx, y: ty });
                        }
                        else {
                            // Unreachable
                            visited.set(tx, ty, -1);
                        }
                    }
                    if (toPos.x === tx && toPos.y === ty) {
                        earlyExit = true;
                        break;
                    }
                }
                if (earlyExit)
                    break;
            }
            var current = toPos;
            var path = [current];
            while (!Vec2_1.default.equals(fromPos, current)) {
                var fromOrd = visited.get(current.x, current.y);
                if (fromOrd == -1)
                    return [];
                var dir = EnumDir_1.default.fromOrdinal(fromOrd);
                current = Vec2_1.default.add(Vec2_1.default.from(current), dir.axis);
                path.push(current);
            }
            return path;
        };
        return AStar;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = AStar;
});

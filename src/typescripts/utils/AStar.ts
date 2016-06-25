import Table from "utils/Table";
import Vec2 from "utils/Vec2";
import EnumDir from "utils/EnumDir";

export default class AStar {
	public static findPath(table: Table, fromPos: IVec2<number>, toPos: IVec2<number>) {
		if (Vec2.equals(fromPos, toPos)) return [];

		const frontier = [fromPos];
		const visited = new Table(table.xsize, table.ysize);
		visited.set(fromPos.x, fromPos.y, 1);

		let earlyExit = false;

		while (frontier.length > 0) {
			const node = frontier.shift();
			for (let dir of EnumDir.DIR4) {
				const tx = node.x + dir.axis.x;
				const ty = node.y + dir.axis.y;

				if (visited.get(tx, ty) == 0) {
					if (table.get(tx, ty) > 0) {
						// Reachable from dir
						visited.set(tx, ty, dir.inv);
						frontier.push({ x: tx, y: ty });
					} else {
						// Unreachable
						visited.set(tx, ty, -1);
					}
				}

				if (toPos.x === tx && toPos.y === ty) {
					earlyExit = true;
					break;
				}
			}
			if (earlyExit) break;
		}

		let current = toPos;
		const path = [current];
		while (!Vec2.equals(fromPos, current)) {
			const fromOrd = visited.get(current.x, current.y);
			if (fromOrd == -1) return [];
			const dir = EnumDir.fromOrdinal(fromOrd);
			current = Vec2.add(Vec2.from(current), dir.axis);
			path.push(current);
		}
		return path;
	}
}

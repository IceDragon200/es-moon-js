import AStar from "utils/AStar";
import Table from "utils/Table";
import TableUtils from "utils/TableUtils";

export default class StateAStarTest {
	public init() {
		const table = Table.fromData({ x: 10, y: 10 }, [
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
		const result = AStar.findPath(table, { x: 1, y: 1 }, { x: 8, y: 3 });
		console.log(result);

		//for (let row of TableUtils.toCsvMap(result)) {
		//	console.log(row);
		//}
	}
}

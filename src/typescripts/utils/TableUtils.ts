import Table from "utils/Table";

class TableUtils {
	public toArray2D(table: Table) {
		const result: Array<Array<number>> = new Array(table.ysize);
		table.eachCell(function(x, y, value) {
			if (!result[y]) {
				result[y] = [];
			}
			result[y][x] = value;
		});
		return result;
	}

	public toCsvMap(table: Table) {
		const result = [];
		for (let row of this.toArray2D(table)) {
			result.push(row.join(","));
		}
		return result;
	}
}

export default new TableUtils();

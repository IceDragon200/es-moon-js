export default class Table {
	public xsize: number;
	public ysize: number;
	public size: number;
	public defaultValue: number;
	protected data: Int32Array;

	constructor(xsize: number, ysize: number, defaultValue: number = 0) {
		this.xsize = xsize;
		this.ysize = ysize;
		this.defaultValue = defaultValue;
		this.refreshData();
	}

	private refreshData() {
		this.size = this.xsize * this.ysize;
		this.data = new Int32Array(this.size);
		this.data.fill(this.defaultValue);
	}

	public get(x: number, y: number): number {
		if (x < 0 || x >= this.xsize || y < 0 || y >= this.ysize) {
			return this.defaultValue;
		}
		return this.data[x + y * this.xsize];
	}

	public set(x: number, y: number, value: number): Table {
		if (x < 0 || x >= this.xsize || y < 0 || y >= this.ysize) {
			return this;
		}
		this.data[x + y * this.xsize] = value;
		return this;
	}

	public eachCell(cb: (x: number, y: number, value: number) => void) {
		for (let y = 0; y < this.ysize; ++y) {
			for (let x = 0; x < this.xsize; ++x) {
				cb(x, y, this.get(x, y));
			}
		}
	}

	public blitData(tx: number, ty: number, srcSize: IVec2<number>, data: Int32Array, srcRect: PIXI.Rectangle = null) {
		const cols = srcRect ? Math.min(srcSize.x, srcRect.width) : srcSize.x;
		const rows = srcRect ? Math.min(srcSize.y, srcRect.height) : srcSize.y;
		const sx = srcRect ? srcRect.x : 0;
		const sy = srcRect ? srcRect.y : 0;
		for (let y = 0; y < rows; ++y) {
			for (let x = 0; x < cols; ++x) {
				const value = data[sx + x + (sy + y) * srcSize.x];
				this.set(tx + x, ty + y, value);
			}
		}
	}

	public blit(x: number, y: number, table: Table, srcRect: PIXI.Rectangle = null) {
		this.blitData(x, y, { x: table.xsize, y: table.ysize }, table.data, srcRect);
	}

	public resize(xsize: number, ysize: number) {
		const oldXsize = this.xsize;
		const oldYsize = this.ysize;
		const oldData = this.data;
		this.xsize = xsize;
		this.ysize = ysize;
		this.refreshData();
		this.blitData(0, 0, { x: oldXsize, y: oldYsize }, oldData);
	}

	public static fromData(dimensions: IVec2<number>, data: Array<number> | Int32Array) {
		const result = new Table(dimensions.x, dimensions.y);
		result.blitData(0, 0, dimensions, Int32Array.from(data));
		return result;
	}
}

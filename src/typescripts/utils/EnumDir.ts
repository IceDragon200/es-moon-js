import Vec2 from "utils/Vec2";

export default class EnumDir {
	public static NORTH = new EnumDir(Vec2.NORTH, 3, 0);
	public static SOUTH = new EnumDir(Vec2.SOUTH, 0, 3);
	public static EAST = new EnumDir(Vec2.EAST, 2, 1);
	public static WEST = new EnumDir(Vec2.WEST, 1, 2);
	public static DIR4 = [EnumDir.SOUTH, EnumDir.WEST, EnumDir.EAST, EnumDir.NORTH];
	public static IDIR4 = [EnumDir.NORTH, EnumDir.EAST, EnumDir.WEST, EnumDir.SOUTH];

	public ordinal: number;
	public inv: number;
	public axis: IVec2<number>;

	constructor(axis: IVec2<number>, ord: number, inv: number) {
		this.axis = axis;
		this.ordinal = ord;
		this.inv = inv;
	}

	public inverse() {
		return EnumDir.fromOrdinal(this.inv);
	}

	public static fromOrdinal(ord: number) {
		return this.DIR4[ord];
	}

	public static fromInvertedOrdinal(ord: number) {
		return this.IDIR4[ord];
	}
}

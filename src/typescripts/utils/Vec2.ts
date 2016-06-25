export default class Vec2 implements IVec2<number> {
	public static NORTH = new Vec2(0, -1);
	public static SOUTH = new Vec2(0, 1);
	public static EAST = new Vec2(1, 0);
	public static WEST = new Vec2(-1, 0);

	public x: number;
	public y: number;

	constructor(x: number = 0, y: number = 0) {
		this.x = x;
		this.y = y;
	}

	public copy() {
		return new Vec2(this.x, this.y);
	}

	public static set(vec: IVec2<number>, x: number, y: number) {
		vec.x = x;
		vec.y = y;
		return vec;
	}

	public static add(vec: IVec2<number>, other: IVec2<number>) {
		vec.x += other.x;
		vec.y += other.y;
		return vec;
	}

	public static sub(vec: IVec2<number>, other: IVec2<number>) {
		vec.x -= other.x;
		vec.y -= other.y;
		return vec;
	}

	public static mul(vec: IVec2<number>, other: IVec2<number>) {
		vec.x *= other.x;
		vec.y *= other.y;
		return vec;
	}

	public static div(vec: IVec2<number>, other: IVec2<number>) {
		vec.x /= other.x;
		vec.y /= other.y;
		return vec;
	}

	public static equals(a: IVec2<number>, b: IVec2<number>) {
		return a.x === b.x && a.y === b.y;
	}

	public static from(vec2: IVec2<number>) {
		return new Vec2(vec2.x, vec2.y);
	}
}

export default class Vec3 implements IVec3<number> {
	public static NORTH = new Vec3(0, -1);
	public static SOUTH = new Vec3(0, 1);
	public static EAST = new Vec3(1, 0);
	public static WEST = new Vec3(-1, 0);

	public x: number;
	public y: number;
	public z: number;

	constructor(x: number = 0, y: number = 0, z: number = 0) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	public copy() {
		return new Vec3(this.x, this.y, this.z);
	}

	public static set(vec: IVec3<number>, x: number, y: number, z: number) {
		vec.x = x;
		vec.y = y;
		vec.z = z;
		return vec;
	}

	public static add(vec: IVec3<number>, other: IVec3<number>) {
		vec.x += other.x;
		vec.y += other.y;
		vec.z += other.z;
		return vec;
	}

	public static sub(vec: IVec3<number>, other: IVec3<number>) {
		vec.x -= other.x;
		vec.y -= other.y;
		vec.z -= other.z;
		return vec;
	}

	public static mul(vec: IVec3<number>, other: IVec3<number>) {
		vec.x *= other.x;
		vec.y *= other.y;
		vec.z *= other.z;
		return vec;
	}

	public static div(vec: IVec3<number>, other: IVec3<number>) {
		vec.x /= other.x;
		vec.y /= other.y;
		vec.z /= other.z;
		return vec;
	}

	public static equals(a: IVec3<number>, b: IVec3<number>) {
		return a.x === b.x && a.y === b.y && a.z === b.z;
	}

	public static from(vec: IVec3<number>) {
		return new Vec3(vec.x, vec.y, vec.z);
	}
}

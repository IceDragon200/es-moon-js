export default class Vec2 {
	public x: number;
	public y: number;

	constructor(x: number = 0, y: number = 0) {
		this.x = x;
		this.y = y;
	}

	public set(x: number, y: number) {
		this.x = x;
		this.y = y;
		return this;
	}

	public add(other: Vec2) {
		this.x += other.x;
		this.y += other.y;
		return this;
	}

	public sub(other: Vec2) {
		this.x -= other.x;
		this.y -= other.y;
		return this;
	}

	public mul(other: Vec2) {
		this.x *= other.x;
		this.y *= other.y;
		return this;
	}

	public div(other: Vec2) {
		this.x /= other.x;
		this.y /= other.y;
		return this;
	}
}

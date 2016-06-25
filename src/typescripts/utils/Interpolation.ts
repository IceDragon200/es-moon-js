class InterpolationUtils {
	public lerpFixed(target: number, cur: number, amt: number) {
		if (target < cur) {
			return Math.max(target, cur - amt);
		} else if (target > cur) {
			return Math.min(target, cur + amt);
		}
		return target;
	}

	public lerp(a: number, b: number, delta: number) {
		return a + (b - a) * delta;
	}
}

export default new InterpolationUtils();

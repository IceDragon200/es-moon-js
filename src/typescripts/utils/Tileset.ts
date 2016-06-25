export default class Tileset {
	private index = {};

	public add(id: number, res: string) {
		this.index[id] = res;
		return this;
	}

	public get(id: number) {
		return this.index[id];
	}
}

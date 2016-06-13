interface IUpdatable {
	update(): void;
}

interface IElement extends IUpdatable {
}

interface IMap<T> {
	[key: string]: T;
}

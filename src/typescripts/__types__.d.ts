interface IUpdatable {
	update(): void;
}

interface IElement extends IUpdatable {
}

interface IMap<T> {
	[key: string]: T;
}

interface IVec2<T extends number> {
	x: T;
	y: T;
}

interface IVec3<T extends number> extends IVec2<T> {
	z: T;
}


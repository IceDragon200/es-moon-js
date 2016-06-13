interface IComponent {
	getName(): string;
}

interface IEntity {
	id: string;
}

interface IWorld {
	createEntity(cb: (entity: IEntity, world: IWorld) => void): void;
	getEntities(): Array<IEntity>;
	removeEntity(entity: IEntity): void;
	addComponent(entity: IEntity, component: IComponent): void;
	hasComponent(entity: IEntity, component: string): boolean;
	getComponent(entity: IEntity, component: string): IComponent;
	removeComponents(entity: IEntity, ...components: string[]): void;
	removeComponent(entity: IEntity, component: string): void;
	filterByComponents(components: Array<string>, callback: (entity: IEntity, packet: IMap<IComponent>) => void): void;
	addSystem(system: ISystem): void;
}

interface ISystem {
	events: Wolfy87EventEmitter.EventEmitter;
	update(world: IWorld, ticks: number);
}

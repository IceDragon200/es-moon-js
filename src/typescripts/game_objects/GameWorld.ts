import Entity from "ecs/Entity";

export default class GameWorld implements IWorld {
	public ticks: number;
	private entities: Array<IEntity> = [];
	private systems: Array<ISystem> = [];
	private components: IMap<IMap<IComponent>> = {};

	private emitSystemsEvent(name: string, event) {
		for (let system of this.systems) {
			system.events.emit(name, event);
		}
	}

	public getEntities(): Array<IEntity> {
		return this.entities;
	}

	public addEntity(entity: IEntity, cb: (entity: IEntity, world: IWorld) => void) {
		this.entities.push(entity);
		cb(entity, this);
		const event = {
			world: this,
			entity: entity
		};
		this.emitSystemsEvent("added.entity", event);
	}

	public createEntity(cb: (entity: IEntity, world: IWorld) => void) {
		const entity = new Entity();
		this.addEntity(entity, cb);
	}

	public removeEntityById(id: string) {
		const removed = _.remove(this.entities, function(obj) {
			return id === obj.id;
		});

		for (let entity of removed) {
			const event = {
				world: this,
				entity: entity
			}

			this.emitSystemsEvent("remove.entity", event);

			for (let key in this.components) {
				if (this.components.hasOwnProperty(key)) {
					if (this.hasComponent(entity, key)) {
						this.removeComponent(entity, key);
					}
				}
			}

			this.emitSystemsEvent("removed.entity", event);
		}
	}

	public removeEntity(entity: IEntity) {
		this.removeEntityById(entity.id);
	}

	public addComponent(entity: IEntity, component: IComponent) {
		const comps = this.components[component.getName()] = this.components[component.getName()] || {};
		const event = {
			world: this,
			entity: entity,
			component: component
		};
		comps[entity.id] = component;
		this.emitSystemsEvent("added.component", event);
	}

	public removeComponents(entity: IEntity, ...components: string[]): void {
		for (let i = 0; i < components.length; ++i) {
			const component = components[i];
			const comps = this.components[component];
			if (comps && comps[entity.id]) {
				const event = {
					world: this,
					entity: entity,
					component: comps[entity.id]
				};
				this.emitSystemsEvent("remove.component", event);
				delete comps[entity.id];
				this.emitSystemsEvent("removed.component", event);
			}
		}
	}

	public removeComponent(entity: IEntity, component: string): void {
		this.removeComponents(entity, component);
	}

	public hasComponent(entity: IEntity, component: string): boolean {
		const comps = this.components[component];
		if (comps) {
			return !!comps[entity.id];
		}
		return false;
	}

	public getComponent(entity: IEntity, component: string): IComponent {
		const comps = this.components[component];
		if (comps) {
			return comps[entity.id];
		}
		return null;
	}

	public filterByComponents(components: Array<string>, callback: (entity: IEntity, packet: IMap<IComponent>) => void): void {
		this.entities.forEach((entity) => {
			const packet: IMap<IComponent> = {};
			for (let i = 0; i < components.length; ++i) {
				const key = components[i];
				const comps = this.components[key];
				if (comps) {
					const comp =  comps[entity.id];
					if (!comp) return;
					packet[key] = comp;
				}
			}
			callback(entity, packet);
		});
	}

	public addSystem(system: ISystem) {
		this.systems.push(system);
	}

	public update() {
		this.ticks++;
		for (let i = 0; i < this.systems.length; ++i) {
			this.systems[i].update(this, this.ticks);
		}
	}
}

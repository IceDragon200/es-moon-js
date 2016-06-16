abstract class System implements ISystem {
	public events: Wolfy87EventEmitter.EventEmitter = new EventEmitter();

	abstract update(world: IWorld, ticks: number);
	abstract onDestroy();
}

export default System;

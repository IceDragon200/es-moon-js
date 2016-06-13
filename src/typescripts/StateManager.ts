import StateBase from "states/StateBase";

export default class StateManager {
	private states: Array<StateBase> = [];

	public getCurrent(): StateBase {
		return this.states[this.states.length - 1];
	}

	public push(state: StateBase): StateManager {
		console.log("StateManager #push", state);
		const current = this.getCurrent();
		if (current) current.pause();
		this.states.push(state);
		state.init();
		return this;
	}

	public clear(): StateManager {
		console.log("StateManager #clear");
		this.states.forEach(function(state: StateBase) {
			state.terminate();
		});
		return this;
	}

	public pop(): StateManager {
		const prevState = this.states.pop();
		console.log("StateManager #pop", prevState);
		if (prevState) prevState.terminate();
		const state = this.getCurrent();
		if (state) state.resume();
		return this;
	}

	public replace(state: StateBase): StateManager {
		console.log("StateManager #replace", state);
		const prev = this.states.pop();
		if (prev) prev.terminate();
		this.states.push(state);
		state.init();
		return this;
	}

	public update() {
		const state = this.getCurrent();
		if (state) state.tick();
	}
}

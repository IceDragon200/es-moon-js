import Component from "ecs/Component";

export default class ComponentWaitTime extends Component {
	public value = 0;
	public max = 500;
	public reset = 0;

	public battleReset() {
		this.value = this.max;
	}

	public turnReset() {
		this.value += this.max;
	}

	public getName(): string {
		return "wait_time";
	}
}

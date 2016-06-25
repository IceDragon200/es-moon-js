import Component from "ecs/Component";

export default class ComponentMessageBuffer extends Component {
	public list: Array<IMessage>;

	public getName(): string {
		return "message_buffer";
	}
}

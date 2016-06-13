import Component from "ecs/Component";
import ID from "utils/ID";

export default class Entity implements IEntity {
	public id: string = ID.base64(16);
}

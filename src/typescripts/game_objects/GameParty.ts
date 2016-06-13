import GameActor from "game_objects/GameActor";

export default class GameParty {
	public members: Array<GameActor> = [];

	constructor() {

	}

	public getLeader() {
		return this.members[0];
	}
}

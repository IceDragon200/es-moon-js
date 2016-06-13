import ComponentTactics from "../../components/ComponentTactics";

export default class PhaseBase implements IPhase {
	public eachTactics(world: IWorld, func: (entity: IEntity, tactics: ComponentTactics) => void) {
		world.filterByComponents(["tactics"], function(e, packet) {
			func(e, <ComponentTactics>packet["tactics"]);
		});
	}

	public getSubject(world: IWorld, func: (tactics: ComponentTactics, entity: IEntity) => void) {
		this.eachTactics(world, function(_e, tactics) {
			if (tactics.subjectId) {
				world.getEntities().forEach(function(entity) {
					if (entity.id === tactics.subjectId) {
						func(tactics, entity);
					}
				});
			}
		});
	}

	public process(world: IWorld) {

	}
}

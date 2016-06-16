var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "states/StateBase", "components/ComponentPosition", "components/ComponentSprite", "systems/RenderSystem", "systems/PlayerInputSystem", "utils/Table", "utils/AStar"], function (require, exports, StateBase_1, ComponentPosition_1, ComponentSprite_1, RenderSystem_1, PlayerInputSystem_1, Table_1, AStar_1) {
    var StateMap = (function (_super) {
        __extends(StateMap, _super);
        function StateMap() {
            _super.apply(this, arguments);
        }
        StateMap.prototype.init = function () {
            var _this = this;
            _super.prototype.init.call(this);
            var worldUpdater = {
                update: function () {
                    _this.game.world.update();
                }
            };
            // World.systems
            var rsys = new RenderSystem_1.default();
            rsys.view = this.view;
            this.game.world.addSystem(rsys);
            this.game.world.addSystem(new PlayerInputSystem_1.default());
            // World.entities
            this.game.world.createEntity(function (entity, world) {
                world.addComponent(entity, new ComponentPosition_1.default());
                var sprite = new ComponentSprite_1.default();
                sprite.texture = "ph_knight";
                world.addComponent(entity, sprite);
            });
            // State.elements
            this.addElement(worldUpdater);
            var table = Table_1.default.fromData({ x: 10, y: 10 }, [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
                0, 1, 1, 1, 1, 1, 1, 0, 1, 0,
                0, 1, 1, 1, 1, 1, 1, 0, 1, 0,
                0, 1, 1, 1, 1, 1, 1, 0, 1, 0,
                0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
                0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
                0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
                0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ]);
            var result = AStar_1.default.findPath(table, { x: 1, y: 1 }, { x: 8, y: 3 });
            console.log(result);
            //for (let row of TableUtils.toCsvMap(result)) {
            //	console.log(row);
            //}
        };
        StateMap.prototype.terminate = function () {
            _super.prototype.terminate.call(this);
            this.game.world.clearSystems();
            this.game.world.clearEntities();
        };
        return StateMap;
    })(StateBase_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = StateMap;
});

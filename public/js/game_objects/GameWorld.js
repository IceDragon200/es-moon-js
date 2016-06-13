define(["require", "exports", "ecs/Entity"], function (require, exports, Entity_1) {
    var GameWorld = (function () {
        function GameWorld() {
            this.entities = [];
            this.systems = [];
            this.components = {};
        }
        GameWorld.prototype.emitSystemsEvent = function (name, event) {
            for (var _i = 0, _a = this.systems; _i < _a.length; _i++) {
                var system = _a[_i];
                system.events.emit(name, event);
            }
        };
        GameWorld.prototype.getEntities = function () {
            return this.entities;
        };
        GameWorld.prototype.addEntity = function (entity, cb) {
            this.entities.push(entity);
            cb(entity, this);
            var event = {
                world: this,
                entity: entity
            };
            this.emitSystemsEvent("added.entity", event);
        };
        GameWorld.prototype.createEntity = function (cb) {
            var entity = new Entity_1.default();
            this.addEntity(entity, cb);
        };
        GameWorld.prototype.removeEntityById = function (id) {
            var removed = _.remove(this.entities, function (obj) {
                return id === obj.id;
            });
            for (var _i = 0; _i < removed.length; _i++) {
                var entity = removed[_i];
                var event_1 = {
                    world: this,
                    entity: entity
                };
                this.emitSystemsEvent("remove.entity", event_1);
                for (var key in this.systems) {
                    if (this.hasComponent(entity, key)) {
                        this.removeComponent(entity, key);
                    }
                }
                this.emitSystemsEvent("removed.entity", event_1);
            }
        };
        GameWorld.prototype.removeEntity = function (entity) {
            this.removeEntityById(entity.id);
        };
        GameWorld.prototype.addComponent = function (entity, component) {
            var comps = this.components[component.getName()] = this.components[component.getName()] || {};
            var event = {
                world: this,
                entity: entity,
                component: component
            };
            comps[entity.id] = component;
            this.emitSystemsEvent("added.component", event);
        };
        GameWorld.prototype.removeComponents = function (entity) {
            var components = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                components[_i - 1] = arguments[_i];
            }
            for (var i = 0; i < components.length; ++i) {
                var component = components[i];
                var comps = this.components[component];
                if (comps && comps[entity.id]) {
                    var event_2 = {
                        world: this,
                        entity: entity,
                        component: comps[entity.id]
                    };
                    this.emitSystemsEvent("remove.component", event_2);
                    delete comps[entity.id];
                    this.emitSystemsEvent("removed.component", event_2);
                }
            }
        };
        GameWorld.prototype.removeComponent = function (entity, component) {
            this.removeComponents(entity, component);
        };
        GameWorld.prototype.hasComponent = function (entity, component) {
            var comps = this.components[component];
            if (comps) {
                return !!comps[entity.id];
            }
            return false;
        };
        GameWorld.prototype.getComponent = function (entity, component) {
            var comps = this.components[component];
            if (comps) {
                return comps[entity.id];
            }
            return null;
        };
        GameWorld.prototype.filterByComponents = function (components, callback) {
            var _this = this;
            this.entities.forEach(function (entity) {
                var packet = {};
                for (var i = 0; i < components.length; ++i) {
                    var key = components[i];
                    var comps = _this.components[key];
                    if (comps) {
                        var comp = comps[entity.id];
                        if (!comp)
                            return;
                        packet[key] = comp;
                    }
                }
                callback(entity, packet);
            });
        };
        GameWorld.prototype.addSystem = function (system) {
            this.systems.push(system);
        };
        GameWorld.prototype.update = function () {
            this.ticks++;
            for (var i = 0; i < this.systems.length; ++i) {
                this.systems[i].update(this, this.ticks);
            }
        };
        return GameWorld;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = GameWorld;
});

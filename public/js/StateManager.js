define(["require", "exports"], function (require, exports) {
    var StateManager = (function () {
        function StateManager() {
            this.states = [];
        }
        StateManager.prototype.getCurrent = function () {
            return this.states[this.states.length - 1];
        };
        StateManager.prototype.push = function (state) {
            console.log("StateManager #push", state);
            var current = this.getCurrent();
            if (current)
                current.pause();
            this.states.push(state);
            state.init();
            return this;
        };
        StateManager.prototype.clear = function () {
            console.log("StateManager #clear");
            this.states.forEach(function (state) {
                state.terminate();
            });
            return this;
        };
        StateManager.prototype.pop = function () {
            var prevState = this.states.pop();
            console.log("StateManager #pop", prevState);
            if (prevState)
                prevState.terminate();
            var state = this.getCurrent();
            if (state)
                state.resume();
            return this;
        };
        StateManager.prototype.replace = function (state) {
            console.log("StateManager #replace", state);
            var prev = this.states.pop();
            if (prev)
                prev.terminate();
            this.states.push(state);
            state.init();
            return this;
        };
        StateManager.prototype.update = function () {
            var state = this.getCurrent();
            if (state)
                state.tick();
        };
        return StateManager;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = StateManager;
});

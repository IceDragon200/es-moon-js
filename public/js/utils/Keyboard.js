define(["require", "exports"], function (require, exports) {
    var Key = (function () {
        function Key(code) {
            this.state = false;
            this.lastChanged = 0;
            this.preventDefault = false;
            this.code = code;
        }
        return Key;
    })();
    exports.Key = Key;
    var Keyboard = (function () {
        function Keyboard(filter) {
            if (filter === void 0) { filter = null; }
            this.ticks = 0;
            this.keyStates = {};
            this.initializeKeys(filter);
            this.activate();
        }
        Keyboard.prototype.activate = function () {
            var _this = this;
            this.keydownHandler = document.addEventListener("keydown", function (event) {
                var k = _this.setKeyState(event.keyCode, true);
                if (k && k.preventDefault) {
                    event.preventDefault();
                }
            });
            this.keyupHandler = document.addEventListener("keyup", function (event) {
                var k = _this.setKeyState(event.keyCode, false);
                if (k && k.preventDefault) {
                    event.preventDefault();
                }
            });
        };
        Keyboard.prototype.deactivate = function () {
            if (this.keydownHandler) {
                document.removeEventListener("keydown", this.keydownHandler);
                this.keydownHandler = null;
            }
            if (this.keyupHandler) {
                document.removeEventListener("keyup", this.keyupHandler);
                this.keyupHandler = null;
            }
        };
        Keyboard.prototype.initializeKeys = function (filter) {
            if (filter) {
                for (var _i = 0; _i < filter.length; _i++) {
                    var data = filter[_i];
                    var k = new Key(data.code);
                    k.preventDefault = data.preventDefault;
                    this.keyStates[data.code] = k;
                }
            }
            else {
                for (var key in Keyboard.KEYS) {
                    if (Keyboard.KEYS.hasOwnProperty(key)) {
                        var code = Keyboard.KEYS[key];
                        this.keyStates[code] = new Key(code);
                    }
                }
            }
        };
        Keyboard.prototype.setKeyState = function (key, value) {
            var k = this.keyStates[key];
            if (k) {
                k.lastChanged = this.ticks;
                k.state = value;
            }
            return k;
        };
        Keyboard.prototype.hasKey = function (key) {
            return !!this.keyStates[key];
        };
        Keyboard.prototype.getKey = function (key) {
            return this.keyStates[key];
        };
        Keyboard.prototype.isDown = function (key) {
            return this.hasKey(key) && this.getKey(key).state;
        };
        Keyboard.prototype.isUp = function (key) {
            return this.hasKey(key) && !this.getKey(key).state;
        };
        Keyboard.KEYS = {
            backspace: 8,
            tab: 9,
            enter: 13,
            shift: 16,
            ctrl: 17,
            alt: 18,
            capslock: 20,
            escape: 27,
            spacebar: 32,
            page_up: 33,
            page_down: 34,
            end: 35,
            home: 35,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            print: 42,
            insert: 45,
            delete: 46,
            n0: 48,
            n1: 49,
            n2: 50,
            n3: 51,
            n4: 52,
            n5: 53,
            n6: 54,
            n7: 55,
            n8: 56,
            n9: 57,
            a: 65,
            b: 66,
            c: 67,
            d: 68,
            e: 69,
            f: 70,
            g: 71,
            h: 72,
            i: 73,
            j: 74,
            k: 75,
            l: 76,
            m: 77,
            n: 78,
            o: 79,
            p: 80,
            q: 81,
            r: 82,
            s: 83,
            t: 84,
            u: 85,
            v: 86,
            w: 87,
            x: 88,
            y: 89,
            z: 90,
            super: 91,
            num0: 96,
            num1: 97,
            num2: 98,
            num3: 99,
            num4: 100,
            num5: 101,
            num6: 102,
            num7: 103,
            num8: 104,
            num9: 105,
            multiply: 106,
            add: 107,
            subtract: 109,
            decimal: 110,
            divide: 111,
            f1: 112,
            f2: 113,
            f3: 114,
            f4: 115,
            f5: 116,
            f6: 117,
            f7: 118,
            f8: 119,
            f9: 120,
            f10: 121,
            f11: 122,
            f12: 123,
            numlock: 144,
            semi_colon: 186,
            equal: 187,
            comma: 188,
            dash: 189,
            period: 190,
            forward_slash: 191,
            accent: 192,
            open_bracket: 219,
            back_slash: 220,
            close_bracket: 221,
            quote: 222,
        };
        return Keyboard;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Keyboard;
});

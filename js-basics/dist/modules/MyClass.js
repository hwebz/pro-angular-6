"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var MyClass = /** @class */ (function () {
    function MyClass(name, weather) {
        this.name = name;
        this._weather = weather;
    }
    Object.defineProperty(MyClass.prototype, "weather", {
        get: function () {
            return "Today is " + this._weather;
        },
        set: function (value) {
            this._weather = value;
        },
        enumerable: true,
        configurable: true
    });
    MyClass.prototype.printMessage = function () {
        console.log("Hello " + this.name + ".");
        console.log(this.weather);
    };
    return MyClass;
}());
exports.MyClass = MyClass;
var MySubClass = /** @class */ (function (_super) {
    __extends(MySubClass, _super);
    function MySubClass(name, weather, city) {
        var _this = _super.call(this, name, weather) || this;
        _this.city = city;
        return _this;
    }
    MySubClass.prototype.printMessage = function () {
        _super.prototype.printMessage.call(this);
        console.log("You are in " + this.city);
    };
    return MySubClass;
}(MyClass));
exports.MySubClass = MySubClass;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyClass_1 = require("./modules/MyClass");
var NameAndWeatherLocation = require("./modules/NameAndWeather");
var DuplicateName_1 = require("./modules/DuplicateName");
var tempConverter_1 = require("./modules/tempConverter");
var myData = new MyClass_1.MySubClass("Adam", "sunny", "London");
myData.printMessage();
var name = new NameAndWeatherLocation.Name('Adam', 'Freeman');
var loc = new NameAndWeatherLocation.WeatherLocation('raining', 'London');
var other = new DuplicateName_1.Name();
var cTemp = tempConverter_1.TempConverter.convertFtoC("38");
var fTemp = tempConverter_1.TempConverter.convertCtoF("3.3");
var tuple;
tuple = ["London", "raining", tempConverter_1.TempConverter.convertFtoC("38")];
var cities = {};
cities["London"] = ["raning", tempConverter_1.TempConverter.convertFtoC("38")];
cities["Paris"] = ["sunny", tempConverter_1.TempConverter.convertFtoC("52")];
cities["Berlin"] = ["snowing", tempConverter_1.TempConverter.convertFtoC("23")];
console.log(name.nameMessage);
console.log(loc.weatherMessage);
console.log(other.message);
console.log("The temp is " + cTemp + "C");
console.log("The temp is " + fTemp + "F");
console.log("It is " + tuple[2] + " degree C and " + tuple[1] + " in " + tuple[0]);
for (var key in cities) {
    console.log(key + ": " + cities[key][0] + ", " + cities[key][1]);
}

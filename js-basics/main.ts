import { MySubClass } from './modules/MyClass';
import * as NameAndWeatherLocation from './modules/NameAndWeather';
import { Name as OtherName } from './modules/DuplicateName'
import { TempConverter } from './modules/tempConverter';


let myData = new MySubClass("Adam", "sunny", "London");
myData.printMessage();

let name = new NameAndWeatherLocation.Name('Adam', 'Freeman');
let loc = new NameAndWeatherLocation.WeatherLocation('raining', 'London');
let other = new OtherName();

let cTemp = TempConverter.convertFtoC("38");
let fTemp = TempConverter.convertCtoF("3.3");

let tuple: [string, string, string];
tuple = ["London", "raining", TempConverter.convertFtoC("38")];

let cities: { [index: string]: [string, string]} = {};

cities["London"] = ["raning", TempConverter.convertFtoC("38")];
cities["Paris"] = ["sunny", TempConverter.convertFtoC("52")];
cities["Berlin"] = ["snowing", TempConverter.convertFtoC("23")];

console.log(name.nameMessage);
console.log(loc.weatherMessage);
console.log(other.message);
console.log(`The temp is ${cTemp}C`);
console.log(`The temp is ${fTemp}F`);
console.log(`It is ${tuple[2]} degree C and ${tuple[1]} in ${tuple[0]}`);

for(let key in cities) {
    console.log(`${key}: ${cities[key][0]}, ${cities[key][1]}`);
}
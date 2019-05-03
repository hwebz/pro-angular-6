export class MyClass {
    name: string;
    _weather: string;

    constructor(name: string, weather: string) {
        this.name = name;
        this._weather = weather;
    }

    set weather(value) {
        this._weather = value;
    }

    get weather() {
        return `Today is ${this._weather}`;
    }

    printMessage() {
        console.log("Hello " + this.name + ".");
        console.log(this.weather);
    }
}

export class MySubClass extends MyClass {
    city: string;
    
    constructor(name, weather, city) {
        super(name, weather);
        this.city = city;
    }

    printMessage() {
        super.printMessage();
        console.log(`You are in ${this.city}`);
    }
}
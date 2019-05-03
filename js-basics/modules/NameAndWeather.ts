export class Name {
    constructor(private first: string, private second: string) {}

    get nameMessage() {
        return `Hello ${this.first} ${this.second}`;
    }
}

export class WeatherLocation {
    weather: string;
    city: string;

    constructor(weather: string, city: string) {
        this.weather = weather;
        this.city = city;
    }

    get weatherMessage(): string {
        return `It is ${this.weather} in ${this.city}`;
    }
}
export class TempConverter {
    static convertFtoC(temp: number | string): string {
        let value: number = (<number>temp).toPrecision ? temp as number : parseFloat(<string>temp);
        return TempConverter.performCalculation(value).toFixed(1);
    }

    static convertCtoF(temp: any): string {
        let value: number;
        if ((temp as number).toPrecision) {
            value = temp;
        } else if ((temp as string).indexOf) {
            value = parseFloat(<string>temp);
        } else {
            value = 0;
        }
        return ((value * 1.8) + 32).toFixed(1);
    }

    private static performCalculation(value: number): number {
        return (parseFloat(value.toPrecision(2)) - 32) / 1.8;
    }
}
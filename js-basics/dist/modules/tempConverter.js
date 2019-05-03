"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TempConverter = /** @class */ (function () {
    function TempConverter() {
    }
    TempConverter.convertFtoC = function (temp) {
        var value = temp.toPrecision ? temp : parseFloat(temp);
        return TempConverter.performCalculation(value).toFixed(1);
    };
    TempConverter.convertCtoF = function (temp) {
        var value;
        if (temp.toPrecision) {
            value = temp;
        }
        else if (temp.indexOf) {
            value = parseFloat(temp);
        }
        else {
            value = 0;
        }
        return ((value * 1.8) + 32).toFixed(1);
    };
    TempConverter.performCalculation = function (value) {
        return (parseFloat(value.toPrecision(2)) - 32) / 1.8;
    };
    return TempConverter;
}());
exports.TempConverter = TempConverter;

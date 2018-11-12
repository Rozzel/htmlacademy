var initialAmount = 50000;
var depositDuration = 12;
var simplePercent = 7;
var complexPercent = 6;

var calculateDeposit = function (deposit, percent, duration, capitalization) {
    var result = deposit;
    var percentForMonth = percent / 1200;

    for (var i = 1; i <= duration; i++) {
        if (capitalization) {
            result += result * percentForMonth;
        } else {
        result += deposit * percentForMonth;
    }
}
    return Math.round(result);
};


var simple = calculateDeposit(initialAmount, simplePercent, depositDuration, false);
var complex = calculateDeposit(initialAmount, complexPercent, depositDuration, true);

var recommendedType;
var finalAmount;

if (simple > complex) {
    recommendedType = 'simple';
    finalAmount = simple;
} else {
    recommendedType = 'complex';
    finalAmount = complex;
}
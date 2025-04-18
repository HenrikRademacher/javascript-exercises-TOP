const fibonacci = function(inputInt) {
    let fibSequence = [1,1]
    try {
        inputInt = parseInt(inputInt);
    } catch {
        return "ERROR";
    }
    if (inputInt < 0) {return "OOPS"}
    if (inputInt === 0) {return 0}
    if (inputInt < 3) {return fibSequence[0]}
    for (i = 2; i < inputInt; i++) {
        fibSequence.push(fibSequence[i-1]+fibSequence[i-2]);
    }
    return fibSequence[i-1];
};


// Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
// fibonacci(4); returns the 4th member of the series: 3  (1, 1, 2, 3)
// Do not edit below this line
module.exports = fibonacci;

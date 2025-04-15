const sumAll = function(firstInput, secondInput) {
    if (isNaN(firstInput) || isNaN(secondInput)) {
        return "ERROR";
    }
    if (!Number.isInteger(firstInput) || !Number.isInteger(secondInput)) {
        return "ERROR";
    }
    if (firstInput < 0 || secondInput < 0) {
        return "ERROR";
    }
    if (firstInput > secondInput) {
        var upperInt = firstInput;
        var lowerInt = secondInput;
    } else {
        var upperInt = secondInput;
        var lowerInt = firstInput;
    }
    
    let currentSum = 0
    for (let i = lowerInt; i<= upperInt; i++) {
        currentSum = currentSum + i
    }
    return currentSum

};

sumAll(5,2)

// Do not edit below this line
module.exports = sumAll;

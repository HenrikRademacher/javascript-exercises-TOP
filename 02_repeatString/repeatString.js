const repeatString = function(input, times) {
    let stringResult = "";
    if (times < 0) {
        return "ERROR";
    }
    for (let i = 1; i <= times; i++) {
        stringResult = stringResult + input;
    }
    return stringResult;
};

// Do not edit below this line
module.exports = repeatString;

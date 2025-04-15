const reverseString = function(textInput) {
    const inputArray = textInput.split("");
    console.log(inputArray)
    resultString = "";
    for (let i = inputArray.length-1; i >=0; i--) {
        resultString = resultString + inputArray[i];
    }
    return resultString
};
reverseString("Hello")
// Do not edit below this line
module.exports = reverseString;

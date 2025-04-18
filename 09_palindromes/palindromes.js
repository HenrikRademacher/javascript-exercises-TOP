const palindromes = function (inputString) {
    inputString = inputString.toLowerCase();
    inputString = inputString.replaceAll(" ", "").replaceAll("!", "").replaceAll(".", "").replaceAll("-", "").replaceAll(",", "");
    let inputArray = inputString.split("");
    let reverseArray = [];
    for (let i = inputArray.length-1; i >= 0; i--) {
        reverseArray.push(inputArray[i]);
    }
    let reverseString = reverseArray.join("");
    return inputString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;

const removeFromArray = function(inputArray, ...allParas) {
    let editedArray = inputArray
    for (removal of allParas) {
        for (let i = 0; i <= editedArray.length-1; i++) {
            if (editedArray[i] === removal) {
                editedArray.splice(i,1);
                i--;
            }
        }
    }
    return editedArray;
};

removeFromArray([1,2,2,4,5],2,5)

// Do not edit below this line
module.exports = removeFromArray;

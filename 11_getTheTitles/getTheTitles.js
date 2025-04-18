const getTheTitles = function(inputObject) {
    return inputObject.map((item) => item.title);
};

// Variable looks like:
// const books = [
//     {
//       title: 'Book',
//       author: 'Name'
//     },
//     {
//       title: 'Book2',
//       author: 'Name2'
//     }
//   ]

// Do not edit below this line
module.exports = getTheTitles;

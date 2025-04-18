function findTheOldest(inputArray) {
    let sortedArray = inputArray.slice().sort((personA, personB) => {
    if (personA.yearOfDeath === undefined) {personA.yearOfDeath = parseInt(new Date().getFullYear())}
    if (personB.yearOfDeath === undefined) {personB.yearOfDeath = parseInt(new Date().getFullYear())}
    let ageA = personA.yearOfDeath - personA.yearOfBirth;
    let ageB = personB.yearOfDeath - personB.yearOfBirth;
    console.log(`compared ${personA.name} aged ${ageA} to ${personB.name} aged ${ageB}.`);
    return(ageB - ageA);
  }).slice(0,1);
    return sortedArray[0];
  } 




// Object looks like:
// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]

// Do not edit below this line
module.exports = findTheOldest;

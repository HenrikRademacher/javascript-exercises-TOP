const add = function(a, b) {
	return a+ b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(inputArray) {
	return inputArray.reduce((total, current) => total + current, 0);
};

const multiply = function(inputArray) {
  return inputArray.reduce((total, current) => total * current, 1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	let valArray = [];
  for (i = 1; i<= a; i++) {
    valArray.push(i);
  }
  return multiply(valArray);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

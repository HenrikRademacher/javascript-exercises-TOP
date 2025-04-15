const convertToCelsius = function(inputFahrenheit) {
  let outputCelcius = (inputFahrenheit - 32) * (5/9);
  outputCelcius = Math.round(outputCelcius * 10) / 10;
  return outputCelcius;
};

const convertToFahrenheit = function(inputCelsius) {
  let outputFahrenheit = inputCelsius * (9 / 5) + 32;
  outputFahrenheit = Math.round(outputFahrenheit * 10) / 10;
  return outputFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// ChatGPT solution

const convertToCelsius = (fahrenheit) => {
  return Math.round(((fahrenheit - 32) * 5/9) * 10) / 10;
};

const convertToFahrenheit = (celsius) => {
  return Math.round((celsius * 9/5 + 32) * 10) / 10;
};

// TOP solution (almost exactly like ChatGPT's, slightly better formatting)

/* const convertToCelsius = function(fahrenheit) {
  return Math.round((fahrenheit - 32) * (5/9) * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  return Math.round(((celsius * 9/5) + 32) * 10) / 10;
}; */

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

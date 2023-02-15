// ChatGPT solution

const leapYears = function(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
  };
  
// My solution (incorrect)

/* const leapYears = function() {
  let year = 0

  for (let i = 0; i <= 99999; i++)
    if (i % 4 !== 0) {
      return 'ERROR';
    } else if (i % 100 !== 0 && i % 400 !== 0) {
      return 'ERROR';
    } else {
      year += i;
    }

    return year;
}; */

// ChatGPT literally writing a better version of my code (that still isn't as good as it's initial answer)

/* const leapYears = function() {
    let count = 0;
    for (let i = 0; i <= 9999; i++) {
      if (isLeapYear(i)) {
        count++;
      }
    }
    return count;
  };
  
  const isLeapYear = function(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
  }; */

// TOP solution (better than ChatGPT solution)

/* const leapYears = function(year) {
  return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
}; */

// Do not edit below this line
module.exports = leapYears;

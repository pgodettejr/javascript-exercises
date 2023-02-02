// ChatGPT solution: why did this work but not Spectric's, which is almost exactly the same?
// Even when return statement is in the same position!

const sumAll = function(a, b) {
    if (isNaN(a) || isNaN(b) || a < 0 || b < 0) {
      return "ERROR";
    }

    if (typeof a === "string" || typeof b === "string") {
      return "ERROR";
    }

    let minInt = Math.min(a, b);
    let maxInt = Math.max(a, b);
    let sum = 0;
  
    for (let i = minInt; i <= maxInt; i++) {
      sum += i;
    }
  
    return sum;
  };

// StackOverflow - sid c solution without loops incorrect (fails at #5 - number rep as string)

/* const sumAll = function(a, b) {
    if (isNaN(a) || isNaN(b)) return 'ERROR';
    if (a < 0 || b < 0) return 'ERROR';
    return (Math.abs(a-b) + 1)*(a + b)/2;
  }; */

// StackOverflow - Spectric solution with loops incorrect. Even if (i <= max) in loop (only counts 1)

/* const sumAll = function(a, b) {
  if (isNaN(a) || isNaN(b)) return 'ERROR';
  if (a < 0 || b < 0) return 'ERROR';
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  let total = 0;
  for (let i = min; i < max; i++) {
    total += i;
  }

  return total;
}; */

// EricaN solution (incorrect)

/* function sumAll(arr) {
    let fullArr = [];
    let sum = 0;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
    arr.sort(function(a, b) {
      return a - b
    });
  
    for (let i = arr[0]; i <= arr[1]; i++) {
      fullArr.push(i);
    }
  
    sum = fullArr.reduce(reducer);
  
    return sum;
  } */

// TOP solution

/* const sumAll = function(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
}; */

// Do not edit below this line
module.exports = sumAll;

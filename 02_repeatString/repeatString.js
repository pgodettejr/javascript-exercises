const repeatString = function(word, times) {
  if (times < 0) return 'ERROR';
  let string = '';
  for (let i = 0; i < times; i++) {
    string += word;
  }
  return string;
};

// My original, incorrect code

/* const repeatString = function() {
  for (let i = 0; i < 10; i++) {
    const navi = 'hey';
    if (i <= 0) {
        return 'ERROR'
    } else {
        return navi * i;
    }
  }
}; */

// Do not edit below this line
module.exports = repeatString;
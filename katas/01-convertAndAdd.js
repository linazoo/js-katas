/* Building on the previous convert function...
  Write a function named convertAndAdd() that that takes multiple values and adds them together, returning a single value
 
  For Example: 
  convertAndAdd("5", 10, "20") => 35
*/
var convert = require('./00-convertToNumbers.js');
const convertAndAdd = (...args) => {
  // first go through everything and make sure it's the same type (num) to be able to add them together 
  var mapped = args.map(arg => {
    if (isNaN(parseInt(arg))) { return 0 }
    return parseInt(arg);
  });
  const sum = mapped.reduce((total, amount) => total + amount );
  return sum;

  // if there are some strings of letters turn them to 0

  //return a single value 
  
};


// return convert(...args).reduce((total, amount) => total + amount );

module.exports = convertAndAdd;

// var elements = args.map((num) => parseInt(num))
// const filtered = elements.filter(element => !isNaN(element));
// return filtered.reduce((a,b) => a + b, 0);

























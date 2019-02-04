/* Write a function that returns a single array without duplicates
  For Example:
  removeDuplicates(1,2,3,2,3,4) => [1,2,3,4]
*/
var concat = require('./02-combine.js');

const removeDuplicates = (...items) => {
  const concatItems = concat(...items)
  return concatItems.filter((v,i) => concatItems.indexOf(v) === i)
};

module.exports = removeDuplicates;

// var newary = [].concat(...items);
// var unique = newary.filter((item,index)=> {
//   return newary.indexOf(item) >= index;
// })
// return unique;





























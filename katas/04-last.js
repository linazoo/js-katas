/* Write a function named last() that returns the last value given. 
    For example:
      last([1,2,3,4])=> 4
      last( 1,2,3,4 )  => 4
*/

const last = (...args) => {
  var newary = [].concat(...args);
  return newary.pop();
};

module.exports = last;

/* Create a function named keysAndValues() that takes an object and returns returns a two-dimensional array containing an array of keys, and a separate array of values

    For Example:
    keysAndValues({firstName: "Foo", lastName: "Bar"}) => [["firstName", "lastName"], ["Foo", "Bar"]]
*/

const keysAndValues = (obj) => {
  var keys = Object.keys(obj);
  var values = Object.values(obj);
  return [ keys, values ];
};

module.exports = keysAndValues;

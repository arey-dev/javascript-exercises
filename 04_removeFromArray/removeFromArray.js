const removeFromArray = function(...args) {
  // get the array, which is the first argument
  // get the rest and set it as array
  // filter the array
  // if element is equal to the element from the other arguments(array)
  // do not return;
  const [arr, ...otherArgs] = args;

  return arr.filter(item => !otherArgs.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;

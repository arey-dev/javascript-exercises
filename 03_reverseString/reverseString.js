const reverseString = function(string) {
  if(string === '') return '';

  let stringChars = [];
  for(let char of string) {
    stringChars.unshift(char);
  }

  return stringChars.join('');
};

// Do not edit below this line
module.exports = reverseString;

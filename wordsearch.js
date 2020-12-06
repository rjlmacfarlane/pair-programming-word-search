// Refactor & DRY in PP with Sam Pavlic

let _ = require('lodash');

const wordSearch = (letters, word) => {
  const horizontal = letters.map(ls => ls.join(''));
  if (looper(horizontal, word) === true) {
    return true;
  }
  const vertical = transpose(letters).map(ls => ls.join(''));
  if (looper(vertical, word) === true) {
    return true;
  }
  return false;
};

const looper = function(array, word) {
  for (let line of array) {
    if (line.includes(word)) return true;
  }
};

const transpose = (matrix) => {
  return _.zip(...matrix);
};

module.exports = wordSearch;
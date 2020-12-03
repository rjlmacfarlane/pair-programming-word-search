const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let line of horizontalJoin) {
    if (line.includes(word)) return true;
  }
  const vertical = transpose(letters);
  const verticalJoin = vertical.map(ls => ls.join(''));
  for (let line of verticalJoin) {
    if (line.includes(word)) return true;
  }
  return false;
};

const transpose = function(matrix) {
  let result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    result.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result[j].push(matrix[i][j]);
    }
  }
  return result;
};

module.exports = wordSearch;
//previously created matrix transpose function
const transpose = function(matrix) {

  let newMatrix = [];
  for (let i =  0; i < matrix[0].length; i++) {
    newMatrix.push([]);
  }
  
  for (let array = 0; array < matrix.length; array++) {
    for (let number = 0; number < matrix[array].length; number++) {
      newMatrix[number][array]  = matrix[array][number];
    }
  }
  return newMatrix;
};
  

const wordSearch = (letters, word) => {
// checks if it the matrix is empty
  if (letters.length === 0) {
    return false;
  }
  //checks if word is in matrix horizontally
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
    // turn string into array to use .reverse() then turn back into a string
    const arrayed = l.split("");
    const reverse = arrayed.reverse();
    const string = reverse.join('');
    //checks if word in reverse is in matrix
    if (string.includes(word)) {
      return true;
    }
  }
  //checks if word is in matrix vertically by transposing the matrix
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }

    const arrayed = l.split("");
    const reverse = arrayed.reverse();
    const string = reverse.join('');
    //checks if word upsidedown is in matrix
    if (string.includes(word)) {
      return true;
    }
  }
  //case where word is not present
  return false;
};


module.exports = wordSearch;
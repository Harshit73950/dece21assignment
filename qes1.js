const matrixOne = [
    [4, 3, 2, 4],
    [9, 1, 5, 6],
    [2, 7, 9, 8],
    [8, 5, 2, 0],
  ];
  
 
  
  function diagonalSum(matrixOne) {
    var sumDiagonals = {sum: 0},
      matrixLength = matrixOne.length;
  
    for (var i = 0; i < matrixLength; i++) {
      sumDiagonals.sum += matrixOne[i][i];
    }
    return sumDiagonals
  }
  
  console.log(diagonalSum(matrixOne));


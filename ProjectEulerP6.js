var totalSquareofSums = 0;
var totalSumofSquares = 0;
var i = 1;

while (i<101) {
    totalSumofSquares = totalSumofSquares + i*i;
    totalSquareofSums = totalSquareofSums + i; i++;
    if (i===101) {console.log(totalSumofSquares-totalSquareofSums*totalSquareofSums)}} 

SOLUTION: -25164150
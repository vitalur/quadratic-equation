module.exports = function solveEquation(equation) {
  let array = equation.split(' ');

  let determinant = 0;
  if (array[7] === '-') {
  	determinant = Math.pow(array[4], 2) + 4 * array[0] * array[8];
  } else {
 	determinant = Math.pow(array[4], 2) - 4 * array[0] * array[8];
  }
  let x1 = 0, x2 = 0;
  if (array[3] === '-') {
  	x1 = (parseInt(array[4]) + parseInt(Math.sqrt(determinant))) / (2 * array[0]); 
  	x2 = (array[4] - Math.sqrt(determinant)) / (2 * array[0]); 
  } else {
  	x1 = (-parseInt(array[4]) + parseInt(Math.sqrt(determinant))) / (2 * array[0]); 
  	x2 = (-array[4] - Math.sqrt(determinant)) / (2 * array[0]); 
  }
  return [x1.toFixed(), x2.toFixed()].sort(function(a, b) {return a - b}) ;
}
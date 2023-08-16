function checkNumber(number) {
  return typeof number === 'number'
  ? number % 2 === 0 
  ? 'this number is even'
  : 'this number is odd'
  : 'this number is not a number'
}

let isNumberValid1 = 8;
let isNumberValid2 = 11;
let isNumberValid3 = true

console.log(checkNumber(isNumberValid1));
console.log(checkNumber(isNumberValid2));
console.log(checkNumber(isNumberValid3));
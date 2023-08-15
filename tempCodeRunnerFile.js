let numbersToSum  = [10, 50, 6, 7, 8, 11, 6, 3, 9];

// ^* ითვლის რიცხვების მასივის ჯამს
let calculateSum  = (...numbers) => numbers.reduce((sum, num) => sum + num, 0)
let totalSum = calculateSum(...numbersToSum);

console.log("numbersToSum მასივის რიცხევის ჯამი არის: ",totalSum)
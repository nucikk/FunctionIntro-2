"use strict"
//! #TASK1: შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
// ! 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;

//& დადებითი და უარყოფითი რიცხვების მასივი
let numbersArray1  = [2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8];

// ^* -- ფუნქცია calculatePositiveSum დაითვლის დადებითი რიცხვების ჯამს მასივიდან
let calculatePositiveSum  = (...values) =>
  values.filter(value => value > 0).reduce((total, value) => total + value, 0);

// ^* -- დადებითი რიცხვების ჯამის გამოთვლა 
  let positiveNumSum = calculatePositiveSum (...numbersArray1);
  console.log("დადებითი რიცხვების ჯამი არის: ", positiveNumSum) //^ 131


//! TASK2: ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: 10, 50, 6, 7, 8, 11, 6, 3, 9

//& შესაჯამებელი რიცხვების მასივი
let numbersToSum  = [10, 50, 6, 7, 8, 11, 6, 3, 9];

// ^* ითვლის რიცხვების მასივის ჯამს
let calculateSum  = (...numbers) => numbers.reduce((sum, num) => sum + num, 0)
let totalSum = calculateSum(...numbersToSum);

console.log("numbersToSum მასივის რიცხევის ჯამი არის: ",totalSum) //^ 110



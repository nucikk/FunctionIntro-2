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
  console.log("დადებითი რიცხვების ჯამი არის: ", positiveNumSum) //^ Output: 131


//! #TASK2: ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: 10, 50, 6, 7, 8, 11, 6, 3, 9

//& შესაჯამებელი რიცხვების მასივი
let numbersToSum  = [10, 50, 6, 7, 8, 11, 6, 3, 9];

// ^* ითვლის რიცხვების მასივის ჯამს
let calculateSum  = (...numbers) => numbers.reduce((sum, num) => sum + num, 0)
let totalSum = calculateSum(...numbersToSum);

console.log("numbersToSum მასივის რიცხევის ჯამი არის: ",totalSum) //^  Output: 110


//! #TASK3:ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze')
//! თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false; let user = {firstname: 'giorgi',lastname: 'saakadze',age: 32,isloggedin: true}

//& ობიექტი user-ის ინფორმაცით
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  };

//^* getUserName ფუნქცია დააბრუნებს მომხარებლის FullName-ს თუ isloggedin იქნება true
function getUserName(user) {
    if(user.isloggedin) {
       return `${user.firstname} ${user.lastname}`
    } 
       return false;
    
}
let isFullname = getUserName(user)
console.log(isFullname) //^  Output: giorgi saakadze

//! #TASK4:შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. 
//! ეს პარამეტრი უნდა იყოს რიცხვების მასივი 
//! და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური
 
//& რიცხვების მასივი (Found maximum value)
let maxNumArray = [20, 8, 54, 11, 2003, 77, 22, 2023, 15];

function findMaxNumber(numbers) {
    return Math.max(...numbers); //TODO: -- Math.max გადაეცემა არგუმენტი და გამოიყენება მაქსიმალური მნიშვნელობის საპოვნელად
}

let maxNumber = findMaxNumber(maxNumArray);
console.log(maxNumber); //^ Output: 2023


//! #TASK5: დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი;
//! თუ ლუწია დააბრუნოს - ‘this number is even; თუ კენტია დააბრუნოს - this number is odd;

// ^* ფუნქცია შეამოწმებს არის თუ არა მნიშვნელობა რიცხვი და განსაზღვრავს ლუწია კენტი თუ სხვა რომელიმე ტიპი
function checkNumberType(number) {
  return typeof number === 'number'
  ? number % 2 === 0 
  ? 'this number is even'
  : 'this number is odd'
  : 'this value is not a number'
}

let isNumberValue1 = 8;
let isNumberValue2 = 11;
let isNumberValue3 = "text"

console.log(checkNumberType(isNumberValue1));
console.log(checkNumberType(isNumberValue2));
console.log(checkNumberType(isNumberValue3));

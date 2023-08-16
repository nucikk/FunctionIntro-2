"use strict"
//! #TASK1: შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
// ! 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;

//& დადებითი და უარყოფითი რიცხვების მასივი
let numbersArray1  = [2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8];

// ^* -- ფუნქცია calculatePositiveSum დაითვლის დადებითი რიცხვების ჯამს მასივიდან
let calculatePositiveSum  = (...values) =>
  values.filter(value => value > 0).reduce((total, value) => total + value, 0);


  let positiveNumSum = calculatePositiveSum (...numbersArray1);  // ^* -- დადებითი რიცხვების ჯამის გამოთვლა 
  console.log("დადებითი რიცხვების ჯამი არის: ", positiveNumSum) //^ output: 131


//! #TASK2: ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: 10, 50, 6, 7, 8, 11, 6, 3, 9

//& შესაჯამებელი რიცხვების მასივი
let numbersToSum  = [10, 50, 6, 7, 8, 11, 6, 3, 9];

let calculateSum  = (...numbers) => numbers.reduce((sum, num) => sum + num, 0) // ^* ითვლის რიცხვების მასივის ჯამს
let totalSum = calculateSum(...numbersToSum);

console.log("numbersToSum მასივის რიცხევის ჯამი არის: ",totalSum) //^  output: 110


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
console.log(isFullname) //^  output: giorgi saakadze

//! #TASK4:შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. 
//! ეს პარამეტრი უნდა იყოს რიცხვების მასივი 
//! და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური
 
let maxNumArray = [20, 8, 54, 11, 2003, 77, 22, 2023, 15]; //& რიცხვების მასივი (Found maximum value)

function findMaxNumber(numbers) {
    return Math.max(...numbers); //TODO: -- Math.max გადაეცემა არგუმენტი და გამოიყენება მაქსიმალური მნიშვნელობის საპოვნელად
}

let maxNumber = findMaxNumber(maxNumArray);
console.log(maxNumber); //^ output: 2023


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

console.log(checkNumberType(isNumberValue1)); //^ output: this number is even
console.log(checkNumberType(isNumberValue2)); //^ output: this number is odd
console.log(checkNumberType(isNumberValue3)); //^ output: this value is not a number


//! #TASK6: მოცემულია მასივი:let array = [1,2,3,4,5]; for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1

let originalArray  = [1,2,3,4,5];
let reverseArrayNum = []; //& array reversed numbers 

//^*  For Loop - reversed array
for(let i = originalArray.length - 1; i >= 0; i--) {
  reverseArrayNum.push(originalArray[i])      //TODO: -- push() მეთოდი გამოიყენება ახალი მასივის შესაქმნელად ორიგინალური მასივის ელემენტებით, საპირისპირო თანმიმდევრობით.
}

console.log(reverseArrayNum); //^ output: [ 5, 4, 3, 2, 1 ]

//! #TASK7: ფუნქციის საშუალებით გამოთვალეთ უსერის ასაკი და დაამატეთ შემდეგი პირობა,
//! თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულწლოვანი, თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი. 
//! ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;

let calculateAge = birthdate => new Date().getFullYear() - birthdate; // ^*  უსერის დაბადების წლის მიხედვით ასაკის გამოთვლა
let checkAgeStatus = age => (age > 18 ? 'სრულწლოვანი' :'არასრულწლოვანი') // ^* შეამოწმებს უსერის სტატის სრულწლოვანია თუ არა

let birthdate = 2003;
let userAgeCalculated = calculateAge(birthdate)
const statusUserAge  = checkAgeStatus(userAgeCalculated);

console.log('მომხმარებლის ასაკის სტატუსი: ', statusUserAge) //^ output: მომხმარებლის ასაკის სტატუსი: სრულწლოვანი

//! #TASK8:მოცემულია მასივი let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//! ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი

let searchedNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //& array searched

for (let i = 0; i < searchedNumArray.length; i++) {
  // * შემოწმდება არის თუ არა ელემენტი 5-ის ტოლი და შემდეგ გაჩერდება
  if(searchedNumArray[i] === 5) {
    console.log('არის')       //^ output: არის
    break;
  }
}


let numbersArray  = [2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8];

// ^* -- ფუნქცია calculatePositiveSum დაითვლის დადებითი რიცხვების ჯამს მასივიდან
let calculatePositiveSum  = (...values) =>
  values.filter(value => value > 0).reduce((total, value) => total + value, 0);

// ^* -- დადებითი რიცხვების ჯამის გამოთვლა 
  let positiveNumSum = calculatePositiveSum (...numbersArray);
  console.log("დადებითი რიცხვების ჯამი არის: ", positiveNumSum)

let searchedNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //& array searched

for (let i = 0; i < searchedNumArray.length; i++) {
  // * შემოწმდება არის თუ არა ელემენტი 5-ის ტოლი და შემდეგ გაჩერდება
  if(searchedNumArray[i] === 5) {
    console.log('არის')
    break;
  }
}
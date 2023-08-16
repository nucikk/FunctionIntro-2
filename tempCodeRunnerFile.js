let leftArray = [1, 2, 3, 7, 6, 9]; //& array left 
let skipValue = 7;

for (let i = 0; i < leftArray.length; i++) {
  if (leftArray[i] === 7) {
      continue;
  }
  console.log(leftArray[i]); 
}
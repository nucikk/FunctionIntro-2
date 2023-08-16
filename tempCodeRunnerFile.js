let calculateAge = birthdate => new Date().getFullYear() - birthdate; // ^*  უსერის დაბადების წლის მიხედვით ასაკის გამოთვლა
let checkAgeStatus = age => (age > 18 ? 'სრულწლოვანი' :'არასრულწლოვანი') // ^* შეამოწმებს უსერის სტატის სრულწლოვანია თუ არა

let birthdate = 2003;
let userAgeCalculated = calculateAge(birthdate)
const statusUserAge  = checkAgeStatus(userAgeCalculated);

console.log('მომხმარებლის ასაკის სტატუსი: ', statusUserAge) //^ output: 
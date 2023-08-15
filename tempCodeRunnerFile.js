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
console.log(isFullname)
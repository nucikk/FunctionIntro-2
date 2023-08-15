let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  };

function getUserName(user) {
    if(user.isloggedin) {
       return `${user.firstname} ${user.lastname}`
    } else {
        return false
    }
}
let isFullname = getUserName(user)
console.log(isFullname)
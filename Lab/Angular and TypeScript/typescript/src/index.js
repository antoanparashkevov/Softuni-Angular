console.log(123);
//question mark says that the argument is not required to pass
function createUser(username, age) {
    return {
        username: username,
        age: age
    };
}
var ivan = createUser('Ivan');
console.log(ivan);

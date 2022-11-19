console.log(123)

//question mark says that the argument is not required to pass
function createUser(username: string, age?: number) {
    return {
        username,
        age
    }
}

const ivan = createUser('Ivan')

console.log(ivan)
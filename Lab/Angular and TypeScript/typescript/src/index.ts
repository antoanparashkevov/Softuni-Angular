console.log(123)

const isBoolean: boolean[] = [false,true]

//question mark says that the argument is not required to pass
function createUser(username: string, age?: number) {
    return {
        username,
        age
    }
}

const ivan = createUser('Ivan')

console.log(ivan)
console.log('boolean array', isBoolean)

//this is called generic
function id<T>(item: T): T {//this function will return something from type T
    return item;
}

const num = id(1);//this num variable is declared with const, so it accept as a type '1', not type number
//now T becomes of type 1

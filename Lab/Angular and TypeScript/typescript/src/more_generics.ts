import { getConstantValue } from "typescript";

function identity(value) {
    return value;
}

console.log(identity(1))

function identity2(value: Number) { //now we have strong typing
    return value;
}

console.log(identity2(2))

//The identity function should work for any value passed in, not just numbers.
//This is where Generics come in


//Generics allows us to write a function that can take in any type and will transform our function based on that type
function identity3<T>(value: T):T {
    return value;
}

console.log(identity3<String>('asd'))
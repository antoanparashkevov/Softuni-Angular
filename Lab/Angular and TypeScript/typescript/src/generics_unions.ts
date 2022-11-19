//Unions
type myBool = true | false

type WindowStates = 'open' | 'closed' | 'minimized'

// const window: WindowStates = 'asd'//we can't
const oneWindow: WindowStates = 'open'//or closed or minimized

//Generics

//two exactly same rows but with different syntax
type StringArray1 = string[]
type StringArray2 = Array<string>

//declare own types that use generics
interface Backpack<T> {
    add: (obj: T) => void,
    get: () => T
}

const backpack: Backpack<string>;
backpack.add('simple_object')
const object = backpack.get()//now object is a string.
console.log('object', object)
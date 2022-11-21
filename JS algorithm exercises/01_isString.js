// 1. Am I a string?
//Create a function that returns true when the argument passed is 
//a string and false otherwise.

function isString(str) {
    if (typeof(str) === 'string') return true;
    else return false;
}

console.log(isString('hello')); // => true
console.log(isString(['hello'])); // => false
console.log(isString('this is a long sentence')); // => true
console.log(isString({ a: 2 })); // => false
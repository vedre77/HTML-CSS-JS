//2. Check for Array
//Create a function that returns true when the parameter 
//passed is an array and false otherwise.

function isArray(arr) {
    if (arr === []) return true;
    if (arr[0] && arr.length && typeof(arr) !== 'string') return true;
    else return false;
}

console.log(isArray('hello')); // => false
console.log(isArray(['hello'])); // => true
console.log(isArray([2, {}, 10])); // => true
console.log(isArray({ a: 2 })); // => false
//3. Check for Types in Array

function areSameType(arr) {
    const checkString = arr.every(elem => typeof(elem) === 'string');
    const checkNumber = arr.every(elem => typeof(elem) === 'number');
    const checkObject = arr.every(elem => typeof(elem) === 'object');
    return checkString || checkNumber || checkObject;
    
}

console.log(areSameType(['hello', 'world', 'long sentence'])) // => true
console.log(areSameType([1, 2, 9, 10])) // => true
console.log(areSameType([['hello'], 'hello', ['bye']])) // => false
console.log(areSameType([['hello'], [1, 2, 3], [{ a: 2 }]])) // => true
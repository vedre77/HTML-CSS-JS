//7. Cat and Mouse

function isCaught(str) {
    const regex = new RegExp(/C\.\.m/gm);
    return str.match(regex) != null;
}

console.log(isCaught('C.....m')) // => false
console.log(isCaught('C..m')) // => true
console.log(isCaught('..C..m')) // => true
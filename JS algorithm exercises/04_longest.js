//4. Sort and Remove Duplicated Characters

function longest(a,b) {
    const mergedStringsArray = (a + b).split('');
    const uniquesArray = [...new Set(mergedStringsArray)];
    const sortedUniques = uniquesArray.sort();
    return sortedUniques.join('');
}

console.log(longest('abcccaa', 'acddddffzzz')) // => 'abcdfz'

 a = 'xyaabbbccccdefww'
 b = 'xxxxyyyyabklmopq'
 console.log(longest(a, b)) // => 'abcdefklmopqwxy'

a = 'abcdefghijklmnopqrstuvwxyz'
console.log(longest(a, a)) // => 'abcdefghijklmnopqrstuvwxyz'
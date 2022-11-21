//5. Convert Number to Reversed Array of Digits

function convert(num) {
    const digitArray = num.toString().split('');
    const reverseSorted = digitArray.sort().reverse();
    return reverseSorted;
}

console.log(convert(429563)) // => [9, 6, 5, 4, 3, 2]
console.log(convert(324)) // => [4, 3, 2]
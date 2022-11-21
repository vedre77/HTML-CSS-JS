//9. Exponentiation 
//while loop:
 function exp(b, n) {
     let result = 1;
     while (n > 0) {
         result *= b;
         n--;
     }
     return result;
 }

//recursive:
function exp(a, b) {
    if (b == 0) return 1;
    return a * exp(a, b - 1);
}

console.log(exp(5, 3)); // => 125
console.log(exp(2, 4)); // => 16
console.log(exp(5, 1)); // => 5
console.log(exp(6, 0)); // => 1
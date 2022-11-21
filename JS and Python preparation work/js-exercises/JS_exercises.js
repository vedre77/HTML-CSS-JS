//1.) Reverse String
function reverse(string) {
    return string.split('').reverse().join('');
}

console.log(reverse("SIT Academy")) // "ymedacA TIS"
console.log(reverse("Hello")) // "olleH"
console.log(reverse("abcd")) // "dcba"

//2.) Factorial
function factorial(n) {
    if (n == 0) {
        return 1;
    } else if (n > 0) {
        return n * factorial(n - 1);
    } else {
        return ('n must be > or = to 0');
    }
}

console.log(factorial(5)) // 120
console.log(factorial(4)) // 24
console.log(factorial(0)) // 1
console.log(factorial(-1)) // "n must be > or = to 0"

//3.) Longest Word
function longest_word(sentence) {
    const wordArray = sentence.split(' ');
    const lengthsArray = wordArray.map(word => word.length);
    let maximumLength = Math.max(...lengthsArray);
    let indexOfMax = lengthsArray.indexOf(maximumLength);
    return wordArray[indexOfMax];
}

console.log(longest_word("This is an amazing test")) // "amazing"
console.log(longest_word("Steve Carell")) // "Carell"
console.log(longest_word("SIT Academy 123")) // "Academy"

//4.) Sum Nums
function sum_nums(num) {
    if (num == 0) return 0;
    if (num == 1) return 1;
    return num + sum_nums(num - 1);
}

console.log(sum_nums(6)) // 21
console.log(sum_nums(1)) // 1
console.log(sum_nums(0)) // 0

//5.) Time Conversion
function time_conversion(minutes) {
    let hours = Math.floor(minutes / 60);
    let remainderMinutes = minutes % 60;
    return `${hours < 9 ? 0 : ''}${hours}:${remainderMinutes < 9 ? 0 : ''}${remainderMinutes}`;
}

console.log(time_conversion(155)) // "02:35"
console.log(time_conversion(61)) // "01:01"
console.log(time_conversion(60)) // "01:00"
console.log(time_conversion(59)) // "00:59"

//6.) Count Vowels
function count_vowels(string) {
    let chars = string.split('');
    const vowelArray = chars.filter(elem => elem.match(/[aAeEiIoOuU]/));   
    return vowelArray.length; 
}

console.log(count_vowels("alphabet")) // 3
console.log(count_vowels("SIT Academy")) // 4
console.log(count_vowels("AaaAa")) // 5
console.log(count_vowels("fly")) // 0

//7.) Palindrome
function palindrome(string) {
    let reverseString = string.split('').reverse().join('');
    return string === reverseString ? true : false;
}

console.log(palindrome("ABBA")) // true
console.log(palindrome("AbbA")) // true
console.log(palindrome("abcd")) // false

//8.) Most Letters
function nearby_az(string) {
    return string.match(/a[a-z][a-z]z|a[a-z]z|az/) ? true : false;
}

console.log(nearby_az("abbbz")) // false
console.log(nearby_az("abz")) // true
console.log(nearby_az("abcz")) // true
console.log(nearby_az("abba")) // false

//9.) Two Sum
function two_sum(nums) {
    let indexes = [];
    nums.forEach(elem => {
        let comparisonArray = nums.filter(other => other != elem);
        comparisonArray.forEach(member => {
            if (member + elem === 0) {
                indexes.push([nums.indexOf(elem), nums.indexOf(member)]);
            }
        })
    })
    for (let i = 0; i <= (indexes.length / 2); i ++) {
        indexes.pop();
    }
    return indexes;
}

console.log(two_sum([1, 3, -1, 5])) // [[0, 2]]
console.log(two_sum([1, 3, -1, 5, -3])) // [[0, 2], [1, 4]]
console.log(two_sum([1, 5, 3, -4])) // null

//10.) Is Power of Two
function is_power_of_two(num) {
    if (num > 2) {
    return is_power_of_two(num / 2);
    } else {
        return Number.isInteger(num);
    }
}

console.log(is_power_of_two(8)) // true
console.log(is_power_of_two(16)) // true
console.log(is_power_of_two(32)) // true
console.log(is_power_of_two(12)) // false
console.log(is_power_of_two(24)) // false

//11.) Repeat a string
function repeat_string_num_times(str, num) {
    if (num <= 0) return '';
    let finalString = str; 
    for (let i = 1; i < num; i ++) {
        finalString += str;
    }
    return finalString;
}

console.log(repeat_string_num_times("abc", 3)) // 'abcabcabc'
console.log(repeat_string_num_times("abc", 1)) // 'abc'
console.log(repeat_string_num_times("abc", 0)) // ''
console.log(repeat_string_num_times("abc", -1)) // 

//12.) Sum All Numbers in a Range
function add_all(arr) {
    let sum = 0;
    if (arr[0] <= arr[1]) {
        for (let i = arr[0]; i <= arr[1]; i++) {
            sum = sum + i;
        }
    } else {
        for (let i = arr[0]; i >= arr[1]; i--) {
            sum = sum + i;
        }
    }
    return sum;
}

console.log(add_all([1, 4])) // 10
console.log(add_all([5, 10])) // 45
console.log(add_all([9, 10])) // 19
console.log(add_all([0, 0])) // 0
console.log(add_all([-1, 1])) // 0

//13.) True or False
function is_it_true(args) {
    if (args === true || args === false) {
        return true;
    } else { 
    return false;
    }
}

console.log(is_it_true(true)) // true
console.log(is_it_true(false)) // true
console.log(is_it_true('true')) // false
console.log(is_it_true(1)) // false
console.log(is_it_true('false')) // false

//14. Return Largest Numbers in Arrays
function largest_of_four(arr) {
    let arrayOfLargest = [];
    for (elem of arr) {
        arrayOfLargest.push(Math.max(...elem));
    }
    return arrayOfLargest;
}

console.log(largest_of_four([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])) // [27,5,39,1001]

//15. Is it an anagram?
function isAnagram(test, original) {
    let testArray = test.toLowerCase().split('');
    let originalArray = original.toLowerCase().split('');
    if (testArray.length = originalArray.length) {  
    let test1 = originalArray.every(elem => testArray.includes(elem));
    let test2 = testArray.every(elem => originalArray.includes(elem));
    return test1 && test2;
    } else {
        return false;
    }
};

console.log(isAnagram("foefet", "toffee")) // true
console.log(isAnagram("Buckethead", "DeathCubeK")) // true
console.log(isAnagram("Twoo", "WooT")) // true
console.log(isAnagram("dumble", "bumble")) // false
console.log(isAnagram("ound", "round")) // false
console.log(isAnagram("apple", "pale")) // false
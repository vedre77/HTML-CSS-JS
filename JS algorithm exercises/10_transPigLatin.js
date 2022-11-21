//10. Pig Latin

function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(str[0])) {
      return str + "way";
    } else {
      while (!vowels.includes(str[0])) {
        let char = str[0];
        let newStr = str.replace(str[0], '');
        str = newStr + char;
      }
      return str + "ay";
    }
}

console.log(translatePigLatin("glove")); // oveglay
console.log(translatePigLatin("pig")); // igpay
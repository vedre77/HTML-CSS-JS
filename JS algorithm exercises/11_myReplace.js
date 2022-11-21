//11. Search and Replace

function myReplace(str, word1, word2) {
    const wordArray = str.split(' ');
    const replaced = wordArray.map(elem => {
        if (elem === word1) {
            return word2;
        } else return elem;
    })
    return replaced;
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // "He is Sitting on the couch"
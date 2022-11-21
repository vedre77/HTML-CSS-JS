//6. Count Repetitions

function countReps(arr) {
    const count = {};
    arr.forEach(elem => {
        count[elem] = (count[elem] || 0) + 1;
    });
    return count;
}


let authors = ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante'];
console.log(countReps(authors));
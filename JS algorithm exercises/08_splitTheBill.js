//8. Split the Bill

function splitTheBill(obj) {
    const list = Object.entries(obj);
    let sum = 0;
    list.forEach(elem => sum += elem[1]);
    let average = sum / list.length;
    const splitBills = {};
    list.forEach(elem => {
        splitBills[elem[0]] = average - elem[1]; 
    });
    return splitBills;
}

const group = {
    Amy: 20,
    Bill: 15,
    Chris: 10
}

console.log(splitTheBill(group)); // => { Amy: -5, Bill: 0, Chris: 5 }
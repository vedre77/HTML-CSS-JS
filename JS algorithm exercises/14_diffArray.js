//14. Diff Two Arrays

function diffArray(arr1, arr2) {
    let uniqueItems = [];
    arr1.forEach(elem => {
      if (!arr2.includes(elem)) {
        uniqueItems.push(elem);
      }
    })
    arr2.forEach(elem => {
      if (!arr1.includes(elem)) {
        uniqueItems.push(elem);
      }
    })
    return uniqueItems;
}

console.log(diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )) // [ 'pink wool', 'diorite' ]
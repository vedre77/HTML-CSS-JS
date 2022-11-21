//13. Confirm the Ending

function confirmEnding(str, target) { 
    const targetLength = target.length;
    const lastPortion = str.substring(str.length - targetLength);
    if (lastPortion == target) return true;
    else return false;
}

console.log(confirmEnding("Open sesame", "same")); // true
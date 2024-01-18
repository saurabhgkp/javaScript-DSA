function stringSearch(long, short) {
    //best case
    if (long === short) return 1
    let count = 0
    // outer loop  inner loop
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (long[i + j] !== short[j]) break;
            if (short.length - 1 === j) count++
        }
    }
    return count
}

console.log(stringSearch("lol dfk lod lol", "lol"))


// string search
function stringSearch(strs, match) {
    if (strs === match) return 1
    let count = 0
    let strArr = strs.split(" ")
    for (str of strArr) {
        if (str === match) count++
    }
    return count
}

console.log(stringSearch("the challenge to take the on algorithms", "the"))
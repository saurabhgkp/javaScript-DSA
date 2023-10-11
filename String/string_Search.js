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
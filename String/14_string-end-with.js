//string-end-with
function endWith(first, second) {
    let secondln = second.length
    let firstln = first.length
    let timString = first.slice(firstln - secondln, firstln)
    if (timString === second) {
        return true
    }
    else {
        return false
    }
}
console.log(endWith("cbbdcdcvb", "cvb"))
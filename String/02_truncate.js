//string to truncate
function truncate(str, n) {
    let strLength = str.length - 1
    if (strLength < n) return str
    else {
        return str.slice(0, n) + " ..."
    }
}
console.log(truncate("hello", 3))
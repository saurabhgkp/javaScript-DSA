//  reverse a string using recursion
function reverse(str) {
    if (str.length === 0) return ""
    return str[str.length - 1] + reverse(str.slice(0, str.length - 1))
}
console.log(reverse("hello"))

// normal way

function reverse1(str) {
    let result = ""
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}
console.log(reverse1("hello"))
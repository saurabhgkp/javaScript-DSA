// Palindrome
function palindrome(str) {
    const reg = /[\W_]/g
    const s = str.toLowerCase().replace(reg, "")
    result = ""
    for (let i = s.length - 1; i >= 0; i--) {
        result += s[i]
    }
    if (s === result)
        return true
    else return false
}

console.log(palindrome("racecar"))
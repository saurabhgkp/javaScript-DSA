function palindrome(str) {
    let regex = /[\W_]/g
    const s = str.toLowerCase().replace(regex, "")
    let left = 0
    let right = s.length - 1
    while (left < right) {
        if (s[left] !== s[right]) return false
        else {
            left++
            right--
        }
    }
    return true
}
console.log(palindrome("race car"))
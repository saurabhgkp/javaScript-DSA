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


// Palindrome Number 
function Palindrome(number) {
    var remainder, temp, reversedNumber = 0;
    temp = number;

    // our reverse logic for numbers
    while (number > 0) {
        remainder = number % 10;
        number = parseInt(number / 10);
        reversedNumber = reversedNumber * 10 + remainder;
    }
    if (temp === reversedNumber) {

        return true
    }
    else {
        return false
    }

}

console.log(Palindrome(121))
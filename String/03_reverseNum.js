// reverse a number 
function reverseNum(n) {
    let result = 0

    while (n > 0) {
        let r = n % 10
        n = parseInt(n / 10)
        result = result * 10 + r
    }
    return result
}

console.log(reverseNum(123))
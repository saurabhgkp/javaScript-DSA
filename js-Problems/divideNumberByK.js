//n  = number of digits
//  k divisor
// find the number witch
function divideNumberByK(n, k) {
    let result = []
    const min = 10 ** (n - 1)
    if (min < k) return false
    const max = (10 ** (n)) - 1
    for (let i = min; i <= max; i++) {
        if (i % k === 0) {
            result.push(i)
        }
    }
    return result
}

console.log(divideNumberByK(2, 10))
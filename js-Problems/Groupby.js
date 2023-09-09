function groupby(arr, t) {
    let len = arr.length
    let result = []
    let left = 0
    let right = t
    if (len < right) {
        return arr
    }
    while (len > 0) {
        result.push(arr.slice(left, right))
        left = right
        len -= t
        right += t
    }
    return result
}

console.log(groupby([1, 2, 3, 4, 5, 6, 7], 3))
// three sum 

function threeSum(arr) {
    let l = 0
    let r = arr.length - 1
    let result = []
    arr = arr.sort((a, b) => (a - b))
    if (arr.length < 3) return result
    while (l < r) {
        let sum
        for (let i = l + 1; i < r - 1; i++) {
            sum = arr[l] + arr[i] + arr[r]
            if (sum === 0) {
                result.push([l, i, r])
            }
        }
        if (sum > 0) {
            r--
        }
        else {
            l++
        }
    }
    return result
}
console.log(threeSum([-2, - 1, 1, 3, 4]))
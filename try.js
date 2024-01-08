
function merge(arr1, arr2) {
    let result = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
        }
        else {
            result.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    console.log(result)
    return result
}
function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = parseInt(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    return merge(left, right)
}

console.log(mergeSort([7, 8, 3, 1, 6, 4, 9]))
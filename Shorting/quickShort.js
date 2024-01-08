function helper(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start]
    let swapInd = start
    function swap(arr, swapindex, i) {
        [arr[swapindex], arr[i]] = [arr[i], arr[swapindex]]
    }
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapInd++
            swap(arr, swapInd, i)
        }
    }
    swap(arr, start, swapInd)
    return swapInd
}
function quickShort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = helper(arr, left, right)
        quickShort(arr, left, pivotIndex - 1)
        quickShort(arr, pivotIndex + 1, right)
    }
    return arr
}



console.log(quickShort([4, 2, 7, 3, 1, 5, 9]))
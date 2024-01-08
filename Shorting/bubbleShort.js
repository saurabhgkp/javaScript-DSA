function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}


function bubbleSort(arr) {
    let isSwap
    for (let i = arr.length; i > 0; i--) {
        isSwap = true
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                isSwap = false
            }

        }
        if (isSwap) break
    }
    return arr

}

console.log(bubbleSort([7, 1, 2, 4, 8, 9]))
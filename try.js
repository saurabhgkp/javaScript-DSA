function swap(i, j, arr) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

function selection(arr) {

    for (let i = 0; i < arr.length; i++) {
        let low = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[low] > arr[j]) {
                low = j
            }
        }
        swap(low, i, arr)
    }

    return arr
}

console.log(selection([9, 5, 3, 1]))
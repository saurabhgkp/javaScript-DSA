function bubbleShort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }

    }
    return arr
}

console.log(bubbleShort([4, 1, 5, 64, 53, 23, 453, 324, 243]))
function selectionShort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let low = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[low] > arr[j]) {
                low = j
            }

        }
        [arr[low], arr[i]] = [arr[i], arr[low]]
    }

    return arr

}

console.log(selectionShort([4, 1, 5, 64, 53, 23, 453, 324, 243]))
//[1,2,3]  [1,4,9]
//

function frePatter(arr, arr2) {
    if (arr.length !== arr2.length) return false
    for (let i = 0; i < arr.length; i++) {
        let currIndex = arr2.indexOf(arr[i] ** 2)
        console.log(arr2)
        if (currIndex === -1) return false
        arr2.splice(currIndex, 1)
    }
    return true
}

frePatter([1, 2, 3], [1, 4, 9])
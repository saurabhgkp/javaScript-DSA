function binarySearch(arr, val) {
    let end = arr.length - 1
    let start = 0
    let mid = Math.floor((start + end) / 2)
    //  console.log(mid)
    while (arr[mid] !== val) {
        if (val < arr[mid]) {
            end = mid - 1
        }
        else start = mid + 1
        mid = Math.floor((start + end) / 2)
    }
    return mid

}
console.log(binarySearch([2, 5, 6, 7, 11, 33, 44, 66], 5))












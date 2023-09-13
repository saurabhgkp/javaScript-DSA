function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i
    }
    return -1

}
console.log(linearSearch([3, 4, 21, 7, 53, 5, 34, 34], 7))












function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        let sum = arr[left] + arr[right]
        if (sum > 0) right--
        if (sum < 0) left++
        if (sum === 0) return [arr[left], arr[right]]
    }

}

console.log(sumZero([-4, -2, -1, 0, 1, 3, 4, 5]))
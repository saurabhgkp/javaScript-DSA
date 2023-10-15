// three sum 

var threeSum = function (nums, target) {
    let l = 0
    let r = nums.length - 1
    while (l < r) {
        for (let i = 1; i < nums.length; i++) {
            console.log(nums[l], nums[i], nums[r], "==", nums[l] + nums[r] + nums[i])
            if (nums[l] + nums[r] + nums[i] === target) {
                return [l, i, r]
            }
        }
        r--
    }
    return false
};
console.log(threeSum([2, 4, 1, 11, 3, 15], 7))
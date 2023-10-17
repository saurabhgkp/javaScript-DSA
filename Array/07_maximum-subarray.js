// https://leetcode.com/problems/maximum-subarray/
var maxSubArray = function (nums) {
    let currMax = nums[0]
    let sumMax = nums[0]
    for (let i = 1; i < nums.length; i++) {
        currMax = Math.max(nums[i], nums[i] + currMax)
        sumMax = Math.max(currMax, sumMax)
    }
    return sumMax
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

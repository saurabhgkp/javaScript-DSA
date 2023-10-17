// https://leetcode.com/problems/maximum-product-subarray
var maxProduct = function (nums) {
    let preMax = nums[0]
    let preMin = nums[0]
    let result = nums[0]
    for (let i = 1; i < nums.length; i++) {
        let curreMax = Math.max(nums[i], nums[i] * preMax, nums[i] * preMin)
        let curreMin = Math.min(nums[i], nums[i] * preMax, nums[i] * preMin)
        preMax = curreMax
        preMin = curreMin
        result = Math.max(preMax, result)
    }
    return result
};





//https://leetcode.com/problems/two-sum/
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
var twoSum = function (nums, target) {
    let arr = []
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        let comp = target - nums[i]
        if (obj[comp] !== undefined) {
            arr.push(i)
            arr.push(obj[comp])
        }
        obj[num] = i
    }
    return arr
};

console.log(twoSum([3, 2, 4], 6))
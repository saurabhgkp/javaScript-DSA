//https://leetcode.com/problems/two-sum/
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
function twoSum(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        let indexget = nums.indexOf(target - nums[i], i + 1)
        console.log(target, nums[i])
        if (indexget > 0) {
            console.log(i)
            return [i, indexget]
        }
    }

};

console.log(twoSum([3, 2, 4], 6))
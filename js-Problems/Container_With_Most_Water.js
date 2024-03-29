// https://leetcode.com/problems/container-with-most-water/submissions/
var maxArea = function (height) {
    let maxArea = 0
    let start = 0
    let end = height.length - 1
    while (start < end) {
        let currentArea = Math.min(height[start], height[end]) * (end - start)
        maxArea = Math.max(maxArea, currentArea)
        if (height[start] < height[end]) {
            start++
        }
        else {
            end--
        }
        return maxArea
    }
}
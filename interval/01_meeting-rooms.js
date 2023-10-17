https://leetcode.com/problems/meeting-rooms/
var canAttenedMeeting = function (nums) {
    nums.sort((a, b) => (a[0] - b[0]))
    let start = 0
    let end = 1
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i][end] > nums[i + 1][start]) return false
    }
    return true
}

console.log(canAttenedMeeting([[1, 3], [8, 10], [5, 6]]))

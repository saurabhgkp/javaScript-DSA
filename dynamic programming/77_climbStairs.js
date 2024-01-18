// https://leetcode.com/problems/climbing-stairs/?envType=daily-question&envId=2024-01-18

var climbStairs = function (n) {
    let dp = []
    dp[0] = 1
    dp[1] = 1
    for (let i = 2; i <= n; ++i) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n]
};
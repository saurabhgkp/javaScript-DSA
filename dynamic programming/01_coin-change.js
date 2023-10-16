// https://leetcode.com/problems/coin-change
var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0

    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            let coin = coins[j]
            if (coin <= i) {
                dp[i] = Math.min(dp[i - coin] + 1, dp[i])
            }
        }
    }
    let answer = dp[dp.length - 1]
    return answer === Infinity ? -1 : answer
}
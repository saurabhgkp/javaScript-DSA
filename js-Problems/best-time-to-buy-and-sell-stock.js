// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/

var maxProfit = function (prices) {
    let maxPro = 0
    let bestPri = prices[0]
    for (let i = 0; i < prices.length; i++) {
        let price = prices[i]
        if (prices[i] < bestPri) bestPri = prices[i]
        let currentPro = price - bestPri
        maxPro = Math.max(maxPro, currentPro)
    }
    return maxPro
};
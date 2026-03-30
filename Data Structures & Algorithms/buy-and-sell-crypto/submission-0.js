class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let result = 0
        let [p1, p2] = [0, 1]
        while (p2 < prices.length) {
            result = Math.max(result, prices[p2] - prices[p1])
            if (prices[p2] < prices[p1]) {
                p1 = p2
            }
            p2++
        }
        return result
    }
}

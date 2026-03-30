class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const dp = new Array(amount + 1).fill(0)
        for (let i = 1; i <= amount; i++) {
            let min = Infinity
            for (const coin of coins) {
                if (dp[i - coin] !== undefined) {
                    min = Math.min(min, dp[i - coin] + 1)
                }
            }
            dp[i] = min
        }
        const result = dp.at(-1)
        return isFinite(result) ? result : -1
    }
}

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const minLeft = prices.reduce((acc, next) => {
            acc.push(Math.min(acc.at(-1), next))
            return acc
        }, [Infinity])
        const maxRight = prices.reverse().reduce((acc, next) => {
            acc.push(Math.max(acc.at(-1), next))
            return acc
        }, [0]).reverse()
        let result = 0
        for(let i = 1; i < minLeft.length - 1; i++){
            result = Math.max(result, maxRight[i] - minLeft[i])
        }
        return result
    }
}

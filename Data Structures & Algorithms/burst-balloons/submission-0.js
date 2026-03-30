class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {
        let result = 0
        const cache = {}
        function dfs(opts) {
            if (opts.length === 0) return 0
            if (cache[opts.toString()] !== undefined) {
                return cache[opts.toString()]
            }
            let maxScore = 0
            for (let i = 0; i < opts.length; i++) {
                const val = opts[i]
                let currentScore = (
                    (opts?.[i - 1] ?? 1) * opts[i] * (opts?.[i + 1] ?? 1)
                )
                opts.splice(i, 1)
                const restScore = dfs(opts)

                opts.splice(i, 0, val)
                maxScore = Math.max(maxScore, currentScore + restScore)
            }
            cache[opts.toString()] = maxScore
            return maxScore
        }
        return dfs(nums)
    }
}

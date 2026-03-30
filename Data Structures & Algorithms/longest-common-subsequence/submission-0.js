class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(t1, t2) {
        const dp = new Array(t1.length + 1).fill(0).map(e => (
            new Array(t2.length + 1).fill(0)
        ))
        for (let i = t1.length - 1; 0 <= i; i--) {
            for (let j = t2.length - 1; 0 <= j; j--) { 
                dp[i][j] = Math.max(
                    dp[i + 1][j],
                    dp[i][j + 1],
                    t1[i] === t2[j] ? 1 + dp[i + 1][j + 1] : 0
                )
            }
        }
        return dp[0][0]
    }
}

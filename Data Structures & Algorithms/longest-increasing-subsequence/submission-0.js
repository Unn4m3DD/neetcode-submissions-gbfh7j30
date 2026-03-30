class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let dp = new Array(nums.length).fill(0)
        dp[nums.length - 1] = 1
        for (let i = nums.length - 2; 0 <= i; i--) {
            let maxLen = 0
            for (let j = i; j < nums.length; j++) {
                if (nums[j] > nums[i])
                    maxLen = Math.max(maxLen, dp[j])
            }
            dp[i] = maxLen + 1
        }
        return Math.max(...dp)
    }
}

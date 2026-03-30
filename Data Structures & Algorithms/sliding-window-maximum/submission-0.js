class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const result = []
        for (let i = 0; i < nums.length - k + 1; i++) {
            let max = Number.MIN_SAFE_INTEGER
            for (let j = 0; j < k; j++) {
                max = Math.max(max, nums[i + j])
            }
            result.push(max)
        }
        return result
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const diffs = nums.map(e => target - e)
        const numToIdx = {}
        for (let i = 0; i < diffs.length; i++) {
            numToIdx[nums[i]] = [...(numToIdx[nums[i]] ?? []), i]
            const idxs = numToIdx[diffs[i]]
            if (idxs) {
                for (let idx of idxs) {
                    if (idx !== i) {
                        return [i, idx].sort((a, b) => a - b)
                    }
                }
            }
        }
    }
}

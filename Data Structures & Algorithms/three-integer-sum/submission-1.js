class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = new Set()
        for (let i = 0; i < nums.length - 2; i++) {
            for (let j = i + 1; j < nums.length - 1; j++) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) res.add([
                        nums[i], nums[j], nums[k]
                    ].sort().join(","))
                }
            }
        }
        return [...res.values()].map(e => e.split(',').map(e => +e))

    }
}

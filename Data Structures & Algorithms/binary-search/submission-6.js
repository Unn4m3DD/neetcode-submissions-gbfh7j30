class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    search(nums, target) {
        function binSearch(nums, l, r, target) {
            if (r < l) return -1;
            const m = l + Math.floor((r - l) / 2)
            if (nums[m] > target) {
                return binSearch(nums, l, m - 1, target)
            }
            if (nums[m] < target) {
                return binSearch(nums, m + 1, r, target)
            }
            return m
        }
        return binSearch(nums, 0, nums.length - 1, target)
    }
}

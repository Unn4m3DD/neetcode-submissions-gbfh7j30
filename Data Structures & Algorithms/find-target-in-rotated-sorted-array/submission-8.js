class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        while (l < r) {
            let m = Math.floor((l + r) / 2)
            if (nums[r] < nums[m]) {
                l = m + 1
            } else {
                r = m
            }
        }

        const offset = r;
        const calcOffset = (idx) => (idx + offset ) % nums.length;
        l = 0
        r = nums.length - 1
        console.log(offset)
        while (l <= r) {
            let m = Math.floor((l + r) / 2)
            console.log([l, r], [calcOffset(l), calcOffset(r)], m)
            if (target < nums[calcOffset(m)]) {
                r = m - 1
            } else if (target > nums[calcOffset(m)]) {
                l = m + 1
            } else {
                return calcOffset(m)
            }
        }
        return -1
    }
}

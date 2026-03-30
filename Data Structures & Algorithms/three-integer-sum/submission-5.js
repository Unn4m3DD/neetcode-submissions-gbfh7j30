class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b)
        let i = 0;
        const res = []
        while (i < nums.length - 2) {
            let l = i + 1
            let r = nums.length - 1
            while (l < r) {
                const current = nums[l] + nums[r]

                if (current === -nums[i]) {
                    res.push([nums[i], nums[l], nums[r]])
                    l++
                    while (l < r && nums[l - 1] === nums[l]) l++
                    r--
                    while (l < r && nums[r + 1] === nums[r]) r--
                } else if (current < -nums[i]) {
                    l++
                    while (l < r && nums[l - 1] === nums[l]) l++
                } else {
                    r--
                    while (l < r && nums[r + 1] === nums[r]) r--
                }
            }

            i++
            while (i < nums.length && nums[i - 1] === nums[i]) i++
        }
        return res
    }
}

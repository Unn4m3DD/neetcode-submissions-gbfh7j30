class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = new Set()
        nums = nums.sort((a, b) => a - b)
        for (let i = 0; i < nums.length; i++) {
            const target = -nums[i]
            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                const currentPairSum = nums[left] + nums[right];
                if (currentPairSum === target) {
                    result[`${nums[i]},${nums[left]},${nums[right]}`] = [
                        nums[i], nums[left], nums[right]
                    ]
                    left++
                    while (nums[left] === nums[left - 1]) left++
                } else if (currentPairSum < target) {
                    left++
                    while (nums[left] === nums[left - 1]) left++
                } else {
                    right--
                    while (nums[right] === nums[right + 1]) right--
                    left = i + 1
                }
            }
        }
        return Object.values(result)
    }
}

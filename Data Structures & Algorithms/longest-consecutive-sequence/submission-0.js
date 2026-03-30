class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums)
        console.log(numSet)
        let result = 1;
        for (let i = 0; i < nums.length; i++) {
            if (numSet.has(nums[i] - 1)) {
                let currentNum = nums[i];
                let currentCount = 0;
                while(numSet.has(currentNum)){
                    currentCount++
                    currentNum = currentNum - 1
                }
                result = Math.max(result, currentCount)
            }
        }
        return nums.length === 0 ? 0 : result
    }
}

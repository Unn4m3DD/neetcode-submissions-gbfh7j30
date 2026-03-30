class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i = 0, j = 1;
        while(nums[i] + nums[j] !== target) {
           if(j < nums.length - 1) {
            j++ 
           } else {
             i++
             j = i + 1
           }
        }
        return [i, j]
    }
}

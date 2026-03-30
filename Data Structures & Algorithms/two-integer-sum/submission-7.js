class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numToIndex = {}
        for(let i = 0; i < nums.length; i++){
            numToIndex[nums[i]] = i
        }
        const diffs = nums.map(e => target - e)
        for(let i = 0; i < nums.length; i++){
            const idx = numToIndex[diffs[i]]
            if(idx !== undefined && idx !== i){
                return [idx, i]
            }
        }
    }
}

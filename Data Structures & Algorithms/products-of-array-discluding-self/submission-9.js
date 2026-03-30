class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = nums.map(e => 1)
        let currentMult = 1
        for(let i = 0; i < nums.length - 1; i++){
            currentMult *= nums[i]
            result[i + 1] = currentMult 
        }
        currentMult = 1
        for(let i = nums.length - 1; 1 <= i; i--){
            currentMult *= nums[i]
            result[i - 1] *= currentMult 
        }
        return result
    }
}

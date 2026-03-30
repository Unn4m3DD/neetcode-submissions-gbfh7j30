class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = new Array(nums.length).fill(1)
        for(let i = 0; i < result.length; i++){
            for(let j = 0; j < result.length; j++){
                if(i !== j){
                    result[i] *= nums[j]
                }
            }
        }
        return result
    }
}

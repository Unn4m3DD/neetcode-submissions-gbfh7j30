class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = new Array(nums.length).fill(0)
        let prefix = 1;
        for (let i = 0; i < nums.length; i++){
            result[i] = prefix
            prefix *= nums[i]
        }
        let postfix = 1;
        for (let i = nums.length - 2; 0 <= i; i--){
            postfix *= nums[i + 1]
            result[i] *= postfix
        }
        return result

    }
}

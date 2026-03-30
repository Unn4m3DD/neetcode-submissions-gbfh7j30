class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const total = nums.reduce((acc, next) => acc * (next || 1), 1)
        const countZeros = nums.filter(e => e === 0).length
        if(countZeros > 1) return nums.map(_ => 0)
        if(countZeros === 1) return nums.map(e => e === 0 ? total : 0)
        return nums.map(e => total / e)
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let [s, f] = [0, 0]
        do {
            s = nums[s]
            f = nums[nums[f]]

        } while (nums[s] !== nums[f])
        let s2 = 0
        while(nums[s] !== nums[s2]){
            s = nums[s]
            s2 = nums[s2]
        }
        return nums[s]
    }
}

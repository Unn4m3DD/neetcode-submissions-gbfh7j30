class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = nums.reduce((a, n) => {
            a.add(n)
            return a
        }, new Set())
        let res = 0
        while (numSet.size > 0) {
            let chain = 1
            let originalValue = [...numSet.values()][0]
            numSet.delete(originalValue)
            let value = originalValue
            while(numSet.delete(--value)){
                chain++
            }
            value = originalValue
            while(numSet.delete(++value)){
                chain++
            }
            res = Math.max(res, chain)
        }
        return res
    }
}

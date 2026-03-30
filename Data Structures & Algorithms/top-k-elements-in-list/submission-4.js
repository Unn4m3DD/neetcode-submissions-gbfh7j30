class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = nums.reduce((acc, next) => {
            acc[next] |= 0;
            acc[next]++
            return acc
        }, {})
        return Object.entries(freq)
            .sort(([_, a], [__, b]) => b - a)
            .slice(0, k)
            .map(e => e[0])
    }
}

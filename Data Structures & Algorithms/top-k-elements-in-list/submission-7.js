class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {}
        for (const num of nums) {
            freq[num] ??= 0
            freq[num]++
        }
        console.log(freq)
        return Object.entries(freq)
            .sort(([_, a], [__, b]) => b - a)
            .slice(0, k)
            .map(([k]) => k)
    }
}

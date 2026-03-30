class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqs = {}
        nums.forEach((n, i) => {
            if (!freqs[n]) freqs[n] = 0
            freqs[n]++
        })
        return Object.keys(freqs).map(key => ({
            count: freqs[key],
            num: key
        }))
        .sort((a, b) => (b.count - a.count))
        .slice(0, k)
        .map(e => e.num)
    }
}

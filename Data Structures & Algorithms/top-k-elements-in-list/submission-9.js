class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const rFreq = new Array(nums.length + 1).fill(0).map(_ => [])
        const freq = {}
        for (const num of nums) {
            freq[num] ??= 0
            freq[num]++
        }

        Object.entries(freq).forEach(([k, v]) => {
            rFreq[v].push(k)
        })
        const result = []
        let ptr = rFreq.length - 1
        for(let i = 0; i < k; i++){
            while(rFreq[ptr].length === 0) ptr--
            result.push(rFreq[ptr].pop())
        }
        return result
    }
}

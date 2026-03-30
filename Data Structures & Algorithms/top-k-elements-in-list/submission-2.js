class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqs = {}
        nums.forEach((n) => {
            if (!freqs[n]) freqs[n] = 0
            freqs[n]++
        })
        const bucket = new Array(nums.length + 1).fill(0).map(
            _ => []
        );
        Object.keys(freqs).forEach(key => {
            bucket[freqs[key]].push(Number(key))
        })
        console.log(bucket)
        const result = []
        for (let i = bucket.length - 1; 0 <= i; i--){
            for (let num of bucket[i]) {
                result.push(num);
                k--
                if (k == 0){
                    return result
                }
            }
        }

        return [0, 0]
    }
}

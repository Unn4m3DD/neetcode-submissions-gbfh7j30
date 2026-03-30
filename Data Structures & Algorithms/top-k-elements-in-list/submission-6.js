class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = nums.reduce((acc, next) => {
            acc[next] |= 0
            acc[next]++
            return acc
        }, {})
        const freqToNum = new Array(nums.length+1).fill(0).map(_ => [])
        console.log(Object.entries(freq))
        for(const [n, f] of Object.entries(freq)){
           freqToNum[f].push(Number(n))
        }
        const res = []
        for(let i = freqToNum.length; i >= 0 && res.length < k; i--){
            if(freqToNum[i]){
                res.push(...freqToNum[i])
            }
        }
        console.log(freqToNum, res)
        return res
    }
}

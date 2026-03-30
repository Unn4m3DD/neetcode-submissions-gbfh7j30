class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {}
        for(const s of strs){
            const totals = Array.from(s).reduce((acc, next) => {
                acc[next] |= 0;
                acc[next]++
                return acc
            }, {})
            const key = Object.entries(totals).sort(([a], [b]) => a.localeCompare(b)).flatMap(e => e)
            if(!res[key])
              res[key] = []
            res[key].push(s)
        }
        return Object.values(res)
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const getSet = (s) => Array.from(s).reduce(
            (acc, next) => {
                acc[next] |= 0
                acc[next]++
                return acc
            }, 
            {}
        )
        const compSet = (a, b) => {
            const keys = new Set([...Object.keys(a), ...Object.keys(b)])
            for(const k of keys){
                if(a[k] !== b[k]) return false
            }
            return true
        }
        const toVisit = new Array(strs.length).fill(0).map((_, i) => i)
        const sets = strs.map(getSet)
        const result = []
        while(toVisit.length > 0){
            const currentIndex = toVisit.shift()
            result.push([strs[currentIndex]])
            const toSplice = []
            for (const [i, j] of toVisit.entries()){
                if(compSet(sets[currentIndex], sets[j])){
                    result.at(-1).push(strs[j])
                    toSplice.push(i)
                }
            }
            toSplice.reverse().forEach((e) => toVisit.splice(e, 1))
        }
        return result
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(a, b) {
        const aSet = Array.from(a).reduce((acc, next) => {
            acc[next] |= 0
            acc[next]++
            return acc
        }, {}) 
        const bSet = Array.from(b).reduce((acc, next) => {
            acc[next] |= 0
            acc[next]++
            return acc
        }, {}) 
        const compareSets = (a, b) => {
            const keys = new Set([...Object.keys(a), ...Object.keys(b)])
            console.log(keys)
            for(const k of keys.keys()){
                if(b[k] !== a[k])return false
            }
            return true
        }
        return compareSets(aSet, bSet)

    }
}

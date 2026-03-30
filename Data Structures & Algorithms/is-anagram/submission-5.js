class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(a, b) {
        const set = {}
        for(const s of a){
            set[s] |= 0
            set[s]++
        }
        for(const s of b){
            set[s] |= 0
            set[s]--
        }
        return Object.values(set).reduce((acc, next) => acc && next === 0, true)

    }
}

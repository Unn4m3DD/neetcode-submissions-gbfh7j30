class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false
        const bag = {}
        for(const e of s) {
            bag[e] = (bag[e] ?? 0) + 1
        }
        for (const c of t){
            bag[c] = (bag[c] ?? 0) - 1
            if(bag[c] < 0) return false
        }
        return true
    }
}

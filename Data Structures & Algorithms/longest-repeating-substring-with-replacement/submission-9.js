class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxFreq = 0
        let result = 0
        const freq = {}
        let l = 0
        let r = 0
        while (r <= s.length) {
            if (((r - l) - maxFreq) <= k) {
                result = Math.max(result, r - l)
                freq[s[r]] ??= 0
                freq[s[r]]++
                maxFreq = Math.max(maxFreq, freq[s[r]])
                r++
            } else {
                freq[s[l]]--
                l++
            }
        }
        return result
    }
}

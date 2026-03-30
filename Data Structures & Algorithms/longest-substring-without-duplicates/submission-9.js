class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0; let r = 0;
        let result = 0
        let bag = new Set()
        while (r < s.length) {
            if (!bag.has(s[r])) {
                bag.add(s[r])
                result = Math.max(result, r - l + 1)
                r++
            } else {
                bag.delete(s[l])
                l++
            }
        }
        return result
    }
}
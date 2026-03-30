class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 1) return 1
        let result = 0;
        let [p1, p2] = [0, 1]
        outer: while (p2 < s.length) {
            for (let i = p1; i < p2; i++) {
                if (s[i] === s[p2]) {
                    p1++
                    continue outer
                }
            }
            result = Math.max(result, p2 - p1 + 1)

            p2++
        }
        return result
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 1) return 1
        let result = 0;
        let [p1, p2] = [0, 1]
        while (p2 < s.length) {
            const visited = new Map();
            for (let i = p1; i <= p2; i++) {
                if (visited.has(s[i])) {
                    p1 = visited.get(s[i]) + 1
                    break
                }
                visited.set(s[i], i)
            }
            result = Math.max(result, visited.size)

            p2++
        }
        return result
    }
}

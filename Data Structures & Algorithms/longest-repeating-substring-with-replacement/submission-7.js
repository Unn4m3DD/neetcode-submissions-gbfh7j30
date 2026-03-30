class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        if (s.length === 1) return 1
        let result = 0;
        let p1 = 0, p2 = 1;
        const counts = new Map();
        counts.set(s[0], 1);
        counts.set(s[1], (counts.get(s[1]) ?? 0) + 1);
        let maxFreq = s[0] === s[1] ? 2 : 1
        while (p2 < s.length) {
            if (
                (p2 - p1) + 1 - maxFreq <= k
            ) {
                result = Math.max(result, (p2 - p1) + 1);
                p2++
                counts.set(s[p2], (counts.get(s[p2]) ?? 0) + 1);
                maxFreq = Math.max(maxFreq, counts.get(s[p2]))
            } else {
                counts.set(s[p1], (counts.get(s[p1]) ?? 0) - 1);
                p1++
            }
        }

        return result;
    }
}

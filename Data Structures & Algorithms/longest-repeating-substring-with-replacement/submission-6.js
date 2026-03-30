class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let result = 0;
        let p1 = 0, p2 = 1;
        const counts = {};
        counts[s[0]] = 1;
        counts[s[1]] = (counts[s[1]] ?? 0) + 1;
        while (p2 < s.length) {
            const maxFreq = Object.values(counts).reduce((acc, next) => Math.max(acc, next), 0)
            if (
                (p2 - p1) + 1 - maxFreq <= k
            ) {
                if (result < (p2 - p1) + 1) {
                    console.log(p2 - p1 + 1)
                }
                result = Math.max(result, (p2 - p1) + 1);
                p2++
                counts[s[p2]] = (counts[s[p2]] ?? 0) + 1;
            } else {
                counts[s[p1]]--
                p1++
            }
        }

        return result;
    }
}

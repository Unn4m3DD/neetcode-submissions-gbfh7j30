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
        while (p2 < s.length) {
            counts[s[p2]] = (counts[s[p2]] ?? 0) + 1;
            const maxFreq = Object.values(counts).reduce((acc, next) => Math.max(acc, next), 0)
            console.log(s.slice(p1, p2 + 1), maxFreq, counts)
            if (
                (p2 - p1) + 1 - maxFreq <= k
            ) {
                if (result < (p2 - p1) + 1) {
                    console.log(p2 - p1 + 1)
                }
                result = Math.max(result, (p2 - p1) + 1);
                p2++
            } else {
                counts[s[p2]]--
                counts[s[p1]]--
                p1++
            }
        }

        return result;
    }
}

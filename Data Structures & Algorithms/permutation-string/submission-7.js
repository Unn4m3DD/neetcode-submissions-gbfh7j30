class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        function compareCounts(a, b) {
            for (const key of a.keys()) {
                if (a.get(key) !== b.get(key)) {
                    return false
                }
            }
            return true
        }
        const s1Counts = new Map();
        const counts = new Map();
        s1.split("").forEach((e, i) => {
            s1Counts.set(e, ((s1Counts.get(e) ?? 0) + 1))
            counts.set(s2[i], ((counts.get(s2[i]) ?? 0) + 1))
        })
        for (let i = 0; i < s2.length - s1.length + 1; i++) {
            console.log(s2.slice(i, i + s1.length), counts)
            if (compareCounts(s1Counts, counts))
                return true
            counts.set(s2[i], counts.get(s2[i]) - 1)
            counts.set(s2[i + s1.length], (counts.get(s2[i + s1.length]) ?? 0) + 1)
        }
        if (compareCounts(s1Counts, counts))
            return true
        return false;
    }
}

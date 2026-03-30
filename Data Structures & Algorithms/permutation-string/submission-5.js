class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1Counts = new Map();
        s1.split("").forEach((e) => { s1Counts.set(e, ((s1Counts.get(e) ?? 0) + 1)) })
        console.log(s1Counts)
        for (let i = 0; i < s2.length - s1.length + 1; i++) {
            const counts = new Map(s1Counts);
            for (let j = i; j < i + s1.length; j++) {
                if (counts.has(s2[j])) {
                    counts.set(s2[j], counts.get(s2[j]) - 1)
                }
            }
            console.log(s2.slice(i, i + s1.length), counts)
            if (![...counts.values()].filter(e => e > 0).length)
                return true
        }
        return false;
    }
}

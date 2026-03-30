class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {}
        strs.forEach(str => {
            let counts = {}
            Array.from(str).forEach((c) => {
                counts[c] = (counts[c] ?? 0) + 1
            })
            const orderedCounts = Object.keys(counts).sort().map(
                e => `${e}:${counts[e]}`
            ).join("")
            result[orderedCounts] = [
                ...(result[orderedCounts] ?? []),
                str
            ]
        })
        return Object.values(result)
    }
}

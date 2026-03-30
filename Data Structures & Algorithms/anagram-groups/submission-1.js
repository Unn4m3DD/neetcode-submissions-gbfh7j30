class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const asciiA = "a".charCodeAt(0)
        const result = {}
        strs.forEach(str => {
            let counts = new Array(26).fill(0)
            for (let i = 0; i < str.length; i++) {
                counts[str.charCodeAt(i) - asciiA]++
            }
            const orderedCounts = counts.join(",")
            if(!result[orderedCounts]) result[orderedCounts] = []
            result[orderedCounts].push(str)
        })
        return Object.values(result)
    }
}

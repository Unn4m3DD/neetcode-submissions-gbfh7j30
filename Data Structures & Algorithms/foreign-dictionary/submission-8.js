

class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        const adj = {}
        let valid = true
        for (let i = 0; i < words.length - 1; i++) {
            const minLen = Math.min(words[i].length, words[i + 1].length)
            if (
                words[i].slice(0, minLen) === words[i + 1].slice(0, minLen) &&
                words[i].length > words[i + 1].length

            ) {
                valid = false
            }
            for (let j = 0; j < minLen; j++) {
                if (words[i][j] !== words[i + 1][j]) {
                    adj[words[i][j]] ??= new Set()
                    adj[words[i][j]].add(words[i + 1][j])
                    break
                }
            }
        }
        if (!valid) return ""
        let result = []
        function dfs(k, path) {
            if (path.includes(k)) {
                valid = false;
                return
            }
            if (result.includes(k)) return
            path.push(k)
            adj[k]?.values()?.forEach(e => dfs(e, path))
            path.pop()
            result.push(k)
        }
        Object.keys(adj).forEach(k => {
            dfs(k, [])
        })
        if (!valid) return ""
        const allChars = new Set(words.join("").split(""))
        allChars.values().forEach(e => {
            if (!result.includes(e)) result.push(e)
        })
        return result.reverse().join("")
    }
}










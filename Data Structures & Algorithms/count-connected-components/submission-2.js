class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const visited = new Set()
        let result = 0
        function dfs(i) {
            if (visited.has(i)) return 0
            visited.add(i)
            for (const e of edges) {
                if (e[0] === i)
                    dfs(e[1])
                else if(e[1] === i)
                    dfs(e[0])
            }
            return 1
        }
        for (let i = 0; i < n; i++) {
            result += dfs(i)
        }
        return result
    }
}

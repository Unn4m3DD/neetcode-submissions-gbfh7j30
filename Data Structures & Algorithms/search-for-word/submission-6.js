class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const visited = new Set()
        function dfs(i, j, pathLen) {
            if (visited.has([i, j].join(","))) return false
            if (board?.[i]?.[j] !== word[pathLen]) return false
            if (pathLen + 1 === word.length) return true

            visited.add([i, j].join(","))
            const result = (
                dfs(i + 1, j, pathLen + 1) ||
                dfs(i, j + 1, pathLen + 1) ||
                dfs(i - 1, j, pathLen + 1) ||
                dfs(i, j - 1,  pathLen + 1)
            )
            visited.delete([i, j].join(","))
            return result
        }
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (dfs(i, j,  0)) return true
            }
        }
        return false
    }
}

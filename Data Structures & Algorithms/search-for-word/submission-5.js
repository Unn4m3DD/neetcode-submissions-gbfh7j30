class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        /**
         * @param {number} i
         * @param {number} j
         * @param {Set<string>} visited
         * @return {number} pathLen
         */
        function dfs(i, j, visited, pathLen) {
            if (visited.has([i, j].join(","))) return false
            if (board?.[i]?.[j] !== word[pathLen]) return false
            if (pathLen + 1 === word.length) return true

            visited.add([i, j].join(","))
            return (
                dfs(i + 1, j, new Set(visited), pathLen + 1) ||
                dfs(i, j + 1, new Set(visited), pathLen + 1) ||
                dfs(i - 1, j, new Set(visited), pathLen + 1) ||
                dfs(i, j - 1, new Set(visited), pathLen + 1)
            )
        }
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (dfs(i, j, new Set(), 0)) return true
            }
        }
        return false
    }
}

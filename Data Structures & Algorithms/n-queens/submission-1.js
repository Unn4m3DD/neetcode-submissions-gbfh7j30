class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const board = new Array(n).fill(0).map(_ => new Array(n).fill(0))
        let result = {};
        const explored = new Set()
        function render(board) {
            return board.map(row => row.map(e => e === 2 ? "Q" : ".").join(""))
        }
        function markQueen(board, a, b) {
            for (let i = 0; i < n; i++) {
                board[i][b] = 1
            }
            for (let j = 0; j < n; j++) {
                board[a][j] = 1
            }
            for (let j = -n; j < n; j++) {
                if (board?.[a + j]?.[b + j] === 0) {
                    board[a + j][b + j] = 1
                }
                if (board?.[a + j]?.[b - j] === 0) {
                    board[a + j][b - j] = 1
                }
            }
            board[a][b] = 2
        }
        function dfs(queens, board, placed) {
            let finished = true
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    if (board[i][j] === 0) {
                        finished = false
                        const newQueens = [...queens]
                        newQueens.push(`${i},${j}`)
                        newQueens.sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)))
                        const newQueensKey = JSON.stringify(newQueens)
                        if (explored.has(newQueensKey)) continue
                        explored.add(newQueensKey)

                        const newBoard = [...board.map(e => [...e])]
                        markQueen(newBoard, i, j)
                        dfs(newQueens, newBoard, placed + 1)
                    }
                }
            }
            if (finished && placed === n) {
                const s = render(board)
                result[s.join("\n")] = s
            }
        }
        dfs([], board, 0)
        return Object.values(result)
    }
}

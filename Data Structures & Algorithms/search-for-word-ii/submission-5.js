class Trie {
    constructor() {
    }
    add(word) {
        let c = this
        word.split("").forEach((e, i) => {
            c[e] ??= {}
            c = c[e]
        })
        c.word = word
    }
}


class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const trie = new Trie()
        words.forEach(e => trie.add(e))
        const result = new Set()
        const visited = new Set()
        function dfs(i, j, nodes) {
            nodes.filter(e => e.word !== undefined).forEach(e => {
                result.add(e.word)
                e.word = undefined
            })
            if (board?.[i]?.[j] === undefined) return
            if (visited.has(`${i},${j}`)) return
            const newNodes = nodes
                .map(e => e[board[i][j]])
                .filter(e => e !== undefined);
            if (newNodes.length === 0) return

            visited.add(`${i},${j}`)
            dfs(i + 1, j, newNodes)
            dfs(i - 1, j, newNodes)
            dfs(i, j + 1, newNodes)
            dfs(i, j - 1, newNodes);
            visited.delete(`${i},${j}`)
        }
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (result.size >= words.length) break
                dfs(i, j, [trie])
            }
        }
        return [...result.values()]
    }
}













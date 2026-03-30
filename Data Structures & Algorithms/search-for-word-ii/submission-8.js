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
        const result = []
        const visited = new Set()
        function dfs(i, j, node) {
            const nodeKey = `${i},${j}`
            const char = board?.[i]?.[j]
            if(node.word){
                result.push(node.word)
                node.word = undefined
            }
            if (char === undefined) return
            if (visited.has(nodeKey)) return
            const newNode = node[char]
            if (newNode === undefined) return
            visited.add(nodeKey)
            dfs(i + 1, j, newNode)
            dfs(i - 1, j, newNode)
            dfs(i, j + 1, newNode)
            dfs(i, j - 1, newNode);
            visited.delete(nodeKey)
        }
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (result.size >= words.length) break
                dfs(i, j, trie)
            }
        }
        return result
    }
}













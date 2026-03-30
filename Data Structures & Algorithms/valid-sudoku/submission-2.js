class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowCounts = new Array(9).fill(0).map(e => new Set())
        const colCounts = new Array(9).fill(0).map(e => new Set())
        const squareCounts =  new Array(9).fill(0).map(e => new Set())
        for (let i = 0; i < 9; i++){
            for (let j = 0; j < 9; j++){
                let value = board[i][j]
                if(value === '.') continue
                value = parseInt(value)

                if (
                    rowCounts[i].has(value) ||
                    colCounts[j].has(value) ||
                    squareCounts[
                        Math.floor(i / 3) + 
                        3 * Math.floor(j / 3)
                    ].has(value)
                ) return false
                rowCounts[i].add(value)
                colCounts[j].add(value)
                squareCounts[
                    Math.floor(i / 3) + 
                    3 * Math.floor(j / 3)
                ].add(value)
            }
        }
        return true
    }
}

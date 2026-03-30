class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowCounts = new Array(9).fill(0).map(e => new Array(9).fill(0))
        const colCounts = new Array(9).fill(0).map(e => new Array(9).fill(0))
        const squareCounts =  new Array(9).fill(0).map(e => new Array(9).fill(0))
        for (let i = 0; i < 9; i++){
            for (let j = 0; j < 9; j++){
                let value = board[i][j]
                if(value === '.') continue
                value = parseInt(value)
                if(++rowCounts[i][value - 1] > 1) return false
                if(++colCounts[j][value - 1] > 1) return false
                if(++squareCounts[
                    Math.floor(i / 3) + 
                    3 * Math.floor(j / 3)
                ][value - 1] > 1) return false
            }
        }
        console.log({
            rowCounts,
            colCounts,
            squareCounts
        })
        return true
    }
}

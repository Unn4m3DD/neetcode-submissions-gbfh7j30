class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    offsets = [
        [0, 0],
        [0, 3],
        [0, 6],
        [3, 0],
        [3, 3],
        [3, 6],
        [6, 0],
        [6, 3],
        [6, 6]
    ]
    isValidSudoku(board) {
        const getFullBag = () => new Set(new Array(9).fill(0).map((_, i) => `${i + 1}`))
        for (let x = 0; x < 9; x++) {
            const bag = getFullBag()
            for (let y = 0; y < 9; y++) {
                const current = board[x][y]
                if (current !== "." && !bag.has(current)) {
                    return false
                }
                bag.delete(current)
            }
        }
        for (let y = 0; y < 9; y++) {
            const bag = getFullBag()
            for (let x = 0; x < 9; x++) {
                const current = board[x][y]
                if (current !== "." && !bag.has(current)) {
                    console.log("b", x, y)
                    return false
                }
                bag.delete(current)
            }
        }
        for (const [xOff, yOff] of this.offsets) {
            const bag = getFullBag()
            for (let y = 0; y < 3; y++) {
                for (let x = 0; x < 3; x++) {
                    const current = board[x + xOff][y + yOff]
                    if (current !== "." && !bag.has(current)) {
                        console.log("c", x, y)
                        return false
                    }
                    bag.delete(current)
                }
            }
        }
        return true
    }
}

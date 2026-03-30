class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const serialize = ({ x, y }) => `${x},${y}`
        const hs = heights;
        let result = 0
        for (let x = 0; x < hs.length; x++) {
            let width = 1;
            for (let i = x - 1; hs[i] >= hs[x]; i--){
                width++
            }
            for (let i = x + 1; hs[i] >= hs[x]; i++){
                width++
            }
            result = Math.max(result, width * hs[x])
        }
        return result
    }
}

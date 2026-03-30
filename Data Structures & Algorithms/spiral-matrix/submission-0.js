class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        let l = 0; let r = matrix[0].length
        let t = 0; let b = matrix.length
        const result = []
        while (
            l < r && t < b
        ) {
            for (let i = l; i < r; i++){
                result.push(matrix[t][i])
            }
            t++
            if(!(l < r && t < b)) break
            for (let i = t; i < b; i++){
                result.push(matrix[i][r - 1])
            }
            r--
            if(!(l < r && t < b)) break

            for (let i = r - 1; l <= i; i--){
                result.push(matrix[b - 1][i])
            }
            b--
            if(!(l < r && t < b)) break

            for (let i = b - 1; t <= i; i--){
                result.push(matrix[i][l])
            }
            l++
            if(!(l < r && t < b)) break
        }
        return result
    }
}








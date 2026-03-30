class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        function binSearch(nums, l, r, target) {
            if (r < l) return -1;
            const m = Math.floor((r + l) / 2)
            console.log(m,[
                Math.floor(m / matrix.length)
            ,
                Math.floor(m % matrix[0].length)
            ])
            const currentNum = nums[
                Math.floor(m / matrix[0].length)
            ][
                Math.floor(m % matrix[0].length)
            ]
            if (currentNum > target) {
                return binSearch(nums, l, m - 1, target)
            }
            if (currentNum < target) {
                return binSearch(nums, m + 1, r, target)
            }
            return m
        }
        return -1 !== binSearch(matrix, 0, matrix.length * matrix[0].length - 1, target)
    }
}

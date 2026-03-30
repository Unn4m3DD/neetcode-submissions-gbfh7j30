/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        function recDiameter(root) {
            if (!root) return { max: 0, maxBranch: 0 }
            const left = recDiameter(root.left)
            const right = recDiameter(root.right)
            return {
                max: Math.max(
                    left.max,
                    right.max,
                    left.maxBranch + right.maxBranch + 1
                ),
                maxBranch: Math.max(left.maxBranch, right.maxBranch) + 1
            }
        }
        return recDiameter(root).max - 1

    }
}




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
    maxPathSum(root) {
        function rec(root) {
            if (!root) return {
                max: Number.MIN_SAFE_INTEGER,
                maxBranch: 0
            }
            const left = rec(root.left)
            const right = rec(root.right)
            return {
                max: Math.max(
                    left.max,
                    right.max,
                    left.maxBranch + right.maxBranch + root.val,
                    left.maxBranch + root.val,
                    right.maxBranch + root.val,
                    root.val,
                ),
                maxBranch:
                    Math.max(
                        Math.max(left.maxBranch, right.maxBranch) + root.val,
                        root.val
                    )
            }
        }
        return rec(root).max
    }
}

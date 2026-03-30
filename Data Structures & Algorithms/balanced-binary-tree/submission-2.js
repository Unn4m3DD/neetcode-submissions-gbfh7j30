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
     * @return {boolean}
     */
    isBalanced(root) {
        function isBalancedRec(root) {
            if (!root) { return { height: 0, isBalanced: true } }
            const left = isBalancedRec(root.left)
            if (!left.isBalanced) return left
            const right = isBalancedRec(root.right)
            if (!right.isBalanced) return right
            const result = {
                height: Math.max(left.height, right.height) + 1,
                isBalanced:
                    Math.abs(left.height - right.height) < 2 &&
                    left.isBalanced &&
                    right.isBalanced
            }
            return result
        }
        return isBalancedRec(root).isBalanced

    }
}

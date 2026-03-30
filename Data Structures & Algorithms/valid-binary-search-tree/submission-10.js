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
    isValidBST(root) {
        function dfs(root) {
            if (!root) return {
                isValid: true,
                min: undefined,
                max: undefined
            }
            const left = dfs(root.left)
            if (!left.isValid) return left
            const right = dfs(root.right)
            if (!right.isValid) return right
            if (right.min <= root.val || root.val <= left.max)
                return { isValid: false }
            return {
                isValid: true,
                max: Math.max(
                    right.max ?? Number.MIN_SAFE_INTEGER,
                    left.max ?? Number.MIN_SAFE_INTEGER,
                    root.val
                ),
                min: Math.min(
                    right.min ?? Number.MAX_SAFE_INTEGER,
                    left.min ?? Number.MAX_SAFE_INTEGER,
                    root.val
                ),
            }
        }
        return dfs(root).isValid
    }
}

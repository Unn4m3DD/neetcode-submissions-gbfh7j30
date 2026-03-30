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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(outer_root, p, q) {
        function dfs(root) {
            if (!root) {
                return {
                    hasP: false, hasQ: false
                }
            }
            const left = dfs(root.left)
            if (left.lowestHasBoth) return left
            const right = dfs(root.right)
            if (right.lowestHasBoth) return right
            let result = {
                hasP: root.val === p.val || left.hasP || right.hasP,
                hasQ: root.val === q.val || left.hasQ || right.hasQ,
            }
            result.lowestHasBoth = (result.hasP && result.hasQ) ? root : null
            return result
        }
        return dfs(outer_root).lowestHasBoth
    }
}

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
    lowestCommonAncestor(root, { val: p }, { val: q }) {
        function dfs(root) {
            if (root.val === p || root.val === q) return root
            if (root.val < p && root.val < q) {
                return dfs(root.right)
            } if (root.val > p && root.val > q) {
                return dfs(root.left)
            } else {
                return root
            }
        }
        return dfs(root)
    }
}

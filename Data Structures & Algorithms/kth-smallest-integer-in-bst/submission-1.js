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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        function dfs(root, container) {
            if (!root) return
            const left = dfs(root.left, container)
            if (left !== undefined) return left
            container.current++
            if (container.current === k) return root.val
            const right = dfs(root.right, container)
            if (right !== undefined) return right
        }
        return dfs(root, { current: 0 })
    }
}

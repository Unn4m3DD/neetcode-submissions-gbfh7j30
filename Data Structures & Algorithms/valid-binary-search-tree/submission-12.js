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
            if (root === null) return [Infinity, -Infinity, true]
            let [minL, maxL, isValidL] = dfs(root.left)
            let [minR, maxR, isValidR] = dfs(root.right)
            return [
                Math.min(minL, root.val),
                Math.max(maxR, root.val),
                maxL < root.val &&
                root.val < minR &&
                isValidL && isValidR
            ]
        }
        return dfs(root)[2]
    }
}

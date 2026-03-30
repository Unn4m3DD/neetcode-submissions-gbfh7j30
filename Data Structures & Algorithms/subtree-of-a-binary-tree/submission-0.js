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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function areEqual(a, b) {
            if (a === null && b === null) return true
            return a?.val === b?.val
                && areEqual(a.left, b.left)
                && areEqual(a.right, b.right)
        }
        let stack = [root]
        while (stack.length > 0) {
            const current = stack.pop();
            if (areEqual(current, subRoot)) {
                return true
            }
            if (!current) continue
            stack.push(current.left)
            stack.push(current.right)
        }
        return false
    }
}

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
     * @return {TreeNode}
     */
    invertTree(root) {
        const result = root
        let toSwap = [root]
        while (toSwap.length > 0) {
            const current = toSwap.pop();
            if (!current) continue
            const tmp = current.left
            current.left = current.right
            current.right = tmp
            toSwap.push(current.left)
            toSwap.push(current.right)
        }
        return result
    }
}

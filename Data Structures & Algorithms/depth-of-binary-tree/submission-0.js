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
    maxDepth(root) {
        let result = 0
        const stack = [{ node: root, depth: 0 }]
        while (stack.length > 0) {
            let current = stack.pop()
            result = Math.max(result, current.depth)
            if(!current.node) continue;
            stack.push({ node: current.node.left, depth: current.depth + 1 })
            stack.push({ node: current.node.right, depth: current.depth + 1 })
        }
        return result
    }
}

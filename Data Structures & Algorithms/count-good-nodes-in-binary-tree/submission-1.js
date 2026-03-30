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
    goodNodes(root) {
        let result = 0
        const stack = []
        if (root) stack.push({ node: root, max: root.val })
        while (stack.length > 0) {
            const current = stack.pop();
            for (const node of [current.node.left, current.node.right]) {
                if (!node) continue;
                if (node.val >= current.max) {
                    result++
                }
                stack.push({
                    node: node,
                    max: Math.max(current.max, node.val)
                })

            }
        }
        return result + 1
    }
}



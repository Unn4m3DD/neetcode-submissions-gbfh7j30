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
        const result = []
        const stack = []
        if (root) stack.push({ node: root, max: root.val })
        while (stack.length > 0) {
            const current = stack.pop();
            for (const node of [current.node.left, current.node.right]) {
                if (!node) continue;
                if (node.val >= current.max) {
                    result.push(node.val)
                }
                stack.push({
                    node: node,
                    max: Math.max(current.max, node.val)
                })

            }
        }
        console.log(result)
        return result.length + 1
    }
}



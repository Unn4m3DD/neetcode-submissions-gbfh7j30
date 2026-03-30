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
     * @return {number[]}
     */
    rightSideView(root) {
        const result = []
        let queue = []
        if (root) queue.push(root)
        while (queue.length > 0) {
            result.push(queue.at(-1).val)
            const newQueue = []
            while (queue.length > 0) {
                const current = queue.shift()
                if (current.left)
                    newQueue.push(current.left)
                if (current.right)
                    newQueue.push(current.right)

            }
            queue = newQueue
        }
        return result
    }
}

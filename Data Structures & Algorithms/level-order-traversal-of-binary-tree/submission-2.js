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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return []
        let result = []
        let queue = [root]
        while (queue.length > 0) {
            let newQueue = []
            result.push([])
            while (queue.length > 0) {
                const current = queue.shift()
                result.at(-1).push(current.val)
                if (!current) continue;
                if (current.left)
                    newQueue.push(current.left)
                if (current.right)
                    newQueue.push(current.right)
            }
            if (newQueue.length > 0) {
                queue = newQueue
            }
        }
        return result
    }
}

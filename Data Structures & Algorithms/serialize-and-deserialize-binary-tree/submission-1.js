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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let result = ""
        const queue = [];
        if (root) queue.push(root)
        while (queue.length > 0) {
            const current = queue.shift()
            result += (current?.val ?? "") + ","
            if (current) {
                queue.push(current.left)
                queue.push(current.right)
            }
        }
        console.log(result)
        return result.slice(0, result.length - 1)
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if(!data.includes(",")) return null
        const toInsert = data.split(",")
        const result = new TreeNode(Number(toInsert.shift()));
        const queue = [result]
        while (toInsert.length > 0) {
            const currentNode = queue.shift()
            const leftVal = toInsert.shift()
            if (leftVal !== "") {
                const left = new TreeNode(Number(leftVal))
                currentNode.left = left
                queue.push(left)
            }
            const rightVal = toInsert.shift()
            if (rightVal !== "") {
                const right = new TreeNode(Number(rightVal))
                currentNode.right = right
                queue.push(right)
            }
        }
        return result
    }
}

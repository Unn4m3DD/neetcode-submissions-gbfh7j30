/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const clones = {}
        /** @param {Node} node */
        function clone(node) {
            if(!node) return null
            const currentClone = new Node(node.val)
            clones[node.val] = currentClone
            for (const n of node.neighbors) {
                const nClone = clones[n.val] ?? clone(n)
                currentClone.neighbors.push(nClone)
            }
            return currentClone
        }
        const result = clone(node)
        console.log(clones)
        return result
    }
}

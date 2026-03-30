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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const s1 = [p]
        const s2 = [q]
        while (s1.length > 0 || s2.length > 0) {
            const c1 = s1.pop();
            const c2 = s2.pop();
            if (c1?.val !== c2?.val) { return false }
            if (!c1) continue;
            s1.push(c1.left)
            s1.push(c1.right)
            s2.push(c2.left)
            s2.push(c2.right)
        }
        return true
    }
}

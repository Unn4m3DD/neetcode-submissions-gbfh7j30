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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        function rec(preorder, inorder) {
            if (!inorder.includes(preorder[0])) return null;
            let root = new TreeNode(preorder[0])

            root.left = rec(
                preorder.slice(1),
                inorder.slice(0, inorder.indexOf(root.val))
            )

            root.right = rec(
                preorder.slice(inorder.indexOf(root.val) + 1),
                inorder.slice(inorder.indexOf(root.val) + 1)
            )
            return root
        }
        return rec(preorder, inorder)
    }
}

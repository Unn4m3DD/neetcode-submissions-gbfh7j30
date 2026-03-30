/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (!head) return head
        function reverse(head) {
            if (head.next === null)
                return [head, head]
            const [last, root] = reverse(head.next)
            last.next = head
            head.next = null
            return [head, root]
        }
        return reverse(head)[1]
    }
}

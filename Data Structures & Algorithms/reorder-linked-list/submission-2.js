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
     * @return {void}
     */
    reorderList(head) {
        function reverse(head) {
            if (head.next === null)
                return [head, head]
            const [last, root] = reverse(head.next)
            last.next = head
            head.next = null
            return [head, root]
        }
        while (head.next) {
            head.next = reverse(head.next, null)[1]
            head = head.next
        }


    }


}

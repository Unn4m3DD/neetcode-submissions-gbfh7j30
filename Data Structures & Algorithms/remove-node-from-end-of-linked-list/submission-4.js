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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let r = head
        let l = head
        for (let i = 0; i < n; i++) {
            r = r?.next
        }
        while (r?.next) {
            r = r?.next
            l = l?.next
        }
        if (r)
            l.next = l?.next?.next
        else
            head = head.next
        return head
    }
}

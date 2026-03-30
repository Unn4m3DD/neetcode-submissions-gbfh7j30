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
        let prev = null;
        while (head?.next) {
            let next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        if(head)
            head.next = prev;
        return head;
    }
}

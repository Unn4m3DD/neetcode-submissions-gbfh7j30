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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let result = { next: null }
        let rp = result
        let [p1, p2] = [l1, l2]
        let carry = 0
        while (
            p1 || p2 || carry
        ) {
            const sum = (p1?.val ?? 0) + (p2?.val ?? 0) + carry
            rp.next = new ListNode(sum % 10)
            carry = Math.floor(sum / 10)
            p1 = p1?.next
            p2 = p2?.next
            rp = rp.next
        }
        return result.next
    }
}

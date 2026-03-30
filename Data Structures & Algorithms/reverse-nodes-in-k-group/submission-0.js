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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let result = { next: null }
        let resultTail = result
        let originalTail = { next: head }
        while (originalTail.next) {
            let stack = []
            for (let i = 0; i < k && originalTail.next; i++) {
                stack.push(originalTail.next)
                originalTail = originalTail.next
            }
            originalTail = { next: originalTail.next }
            stack.forEach(e => e.next = null)
            if (stack.length === k) {
                while (stack.length > 0) {
                    resultTail.next = stack.pop()
                    resultTail = resultTail.next
                }
            } else {
                while (stack.length > 0) {
                    resultTail.next = stack.shift()
                    resultTail = resultTail.next
                }
            }
        }
        return result?.next
    }
}





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
        let buffer = new Array(n + 1).fill(null)
        buffer[buffer.length - 1] = head
        while (buffer.at(-1)?.next) {
            buffer.shift()
            buffer.push(buffer.at(-1)?.next)
        }
        console.log(buffer)
        if (!buffer[0]) {
            head = head.next
        } else {
            buffer[0].next = buffer?.[2] ?? null
        }
        console.log(head)
        return head
    }
}

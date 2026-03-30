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
    reorderList(list) {
        function reorderRecursive(head) {
            if (!head.next) return
            let [l, c, r] = [
                head?.next,
                head?.next?.next,
                head?.next?.next?.next
            ]
            l.next = null
            while (c) {
                c.next = l
                l = c
                c = r
                r = c?.next
            }
            head.next = l
            reorderRecursive(head?.next)
        }
        reorderRecursive(list)
        return list
    }
}

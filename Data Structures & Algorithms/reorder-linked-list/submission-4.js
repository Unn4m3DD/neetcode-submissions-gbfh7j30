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
        if(!head || !head.next) return head
        function reverse(head) {
            if (head.next === null)
                return [head, head]
            const [last, root] = reverse(head.next)
            last.next = head
            head.next = null
            return [head, root]
        }
        let s = new ListNode()
        s.next = head
        let f = head
        while (f !== null && f.next !== null) {
            s = s.next
            f = f.next.next
        }
        const result = new ListNode()
        let p = result
        let l1 = head
        let l2 = reverse(s.next)[1]
        s.next = null
        console.log({l1, l2})
        while (l1 || l2) {
            console.log(result)
            if (!l1) {
                p.next = l2
                l2 = null
            } else if (!l2) {
                p.next = l1
                l1 = null
            } else {
                p.next = l1
                l1 = l1.next
                p = p.next
                p.next = l2
                l2 = l2.next
                p = p.next
            }
        }
        return result.next
    }

}

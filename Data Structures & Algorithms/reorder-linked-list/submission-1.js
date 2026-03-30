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
        function printList(...lists) {
            for (list of lists) {
                let p = list
                let result = "[";
                while (p) {
                    result += p.val + ","
                    p = p.next
                }
                console.log(result + "]")
            }
        }
        function reverse(head) {
            let [l, c, r] = [null, head, head?.next]
            while (c) {
                c.next = l
                l = c
                c = r
                r = c?.next
            }
            return l
        }
        let count = 0
        let countPointer = list
        while (countPointer) {
            count++
            countPointer = countPointer.next
        }
        let middle = list
        count = Math.floor((count - 1) / 2)
        while (count--) {
            middle = middle.next
        }
        let tmp = middle.next
        middle.next = null
        middle = tmp


        const reversed = reverse(middle)
        let p1 = list
        let p2 = reversed

        while (p1) {
            const tmp1 = p1?.next
            const tmp2 = p2?.next
            p1.next = p2
            if (p2)
                p2.next = tmp1
            p1 = tmp1
            p2 = tmp2
        }
        return list
    }
}

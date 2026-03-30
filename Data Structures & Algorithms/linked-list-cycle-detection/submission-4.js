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
     * @return {boolean}
     */
    hasCycle(head) {
        let [s, f] = [head, head.next]
        while(s !== f && f != null){
            s = s?.next
            f = f?.next?.next
        }

        if(f == null) return false
        return true
    }
}

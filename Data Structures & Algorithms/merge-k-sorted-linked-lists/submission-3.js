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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (!lists || lists.length === 0) {
            return null;
        }
        let currentList = 0
        while (lists.length > 1) {
            console.log(lists)
            if (lists[currentList + 1]) {
                let [p1, p2] = [lists[currentList], lists[currentList + 1]]
                let start = { next: null }
                let p = start
                while (p1 && p2) {
                    if (p1.val < p2.val) {
                        p.next = p1
                        p1 = p1.next
                    } else {
                        p.next = p2
                        p2 = p2.next
                    }
                    p = p.next
                    p.next = null
                }
                if (p1) p.next = p1
                if (p2) p.next = p2
                lists[currentList] = start.next
                lists.splice(currentList + 1, 1)
            }
            currentList = (currentList + 1) % lists.length
        }
        return lists[0]
    }
}

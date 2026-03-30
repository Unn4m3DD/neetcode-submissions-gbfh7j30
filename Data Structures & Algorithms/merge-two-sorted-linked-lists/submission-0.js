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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */

    printList = (list) => {
        let p = list
        let result = "["
        while (p) {
            result += p.val + ","
            p = p.next
        }
        console.log(result + "]")
    }
    mergeTwoLists(list1, list2) {
        let newList = { next: null }
        let tail = newList;
        let [p1, p2] = [list1, list2]
        while (
            p1 || p2
        ) {
            if (!p2) {
                tail.next = p1;
                p1 = null
            } else if (!p1) {
                tail.next = p2;
                p2 = null
            } else {
                let tmp
                if (p1.val > p2.val) {
                    tmp = p2
                    p2 = p2.next
                } else {
                    tmp = p1
                    p1 = p1.next
                }
                tail.next = tmp
                tail = tail.next
                tail.next = null
            }
        }
        return newList.next
    }
}

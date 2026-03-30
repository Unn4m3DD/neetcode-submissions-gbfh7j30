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
        const result = { next: null }
        let p = result;
        while (lists.some(e => !!e)) {
            console.log(lists)
            const toPullList = lists.reduce((acc, _, i) => {
                if (lists[acc] === null) return i
                if (lists[i] === null) return acc
                return lists[acc].val > lists[i].val ? i : acc
            }, 0)
            console.log(lists[toPullList])
            p.next = lists[toPullList]
            lists[toPullList] = lists[toPullList]?.next
            p = p.next
            p.next = null
        }
        return result.next
    }
}

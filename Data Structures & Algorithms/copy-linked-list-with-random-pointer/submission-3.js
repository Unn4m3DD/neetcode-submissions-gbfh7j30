// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const copies = new Map()
        copies.set(null, null)
        let p = head
        while (p) {
            copies.set(p, new Node(p.val))
            p = p.next;
        }
        p = head
        const newList = copies.get(p)
        let np = newList
        while (p) {
            np.next = copies.get(p?.next)
            np.random = copies.get(p?.random)
            np = np?.next
            p = p?.next
        }
        return newList
    }
}

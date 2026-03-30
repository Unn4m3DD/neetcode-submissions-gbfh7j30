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
        if(!head) return null
        let p = head
        const copyHead = { ...head }
        let copy = copyHead
        while (p?.next) {
            copy.next = { ...p.next }
            p = p.next
            copy = copy.next
        }
        p = head
        copy = copyHead
        while (copy) {
            let ip = head
            let cp = copyHead
            while(ip != p.random){
                ip = ip.next
                cp = cp.next
            }
            copy.random = cp
            copy = copy.next
            p = p.next
        }
        return copyHead

    }
}


class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k
        this.buf = new MinPriorityQueue()
        for (const n of nums) {
            this.buf.enqueue(n)
        }
        while (this.buf.size() > k) {
            this.buf.dequeue()
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.buf.enqueue(val)
        if (this.buf.size() > this.k)
            this.buf.dequeue()
        return this.buf.front()
    }
}

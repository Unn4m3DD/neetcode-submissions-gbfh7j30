class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k
        this.buf = new Array(k).fill(Number.MIN_SAFE_INTEGER)
        for (const n of nums) {
            this.buf.push(n)
            this.buf = this.buf.sort((a, b) => a - b).slice(1, k + 1)
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.buf.push(val)
        this.buf = this.buf.sort((a, b) => a - b).slice(1, this.k + 1)
        return this.buf[0]
    }
}

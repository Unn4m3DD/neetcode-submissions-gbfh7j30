class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const heap = new MaxPriorityQueue()
        for(const n of nums)
            heap.enqueue(n)

        for (const _ of new Array(k - 1).fill(0))
            heap.dequeue()
            
        return heap.front()
    }
}

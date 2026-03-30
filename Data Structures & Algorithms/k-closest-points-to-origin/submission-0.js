class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const heap = new MinPriorityQueue(e => e.dist)
        for (const p of points) {
            heap.enqueue({
                p,
                dist: p[0] * p[0] + p[1] * p[1]
            })
        }
        const result = []
        for (let i = 0; i < k; i++)
            result.push(heap.dequeue().p)
        return result
    }
}

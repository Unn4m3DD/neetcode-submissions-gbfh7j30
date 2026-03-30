class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const heap = new MaxPriorityQueue()
        for(const s of stones) heap.enqueue(s)
        while(heap.size() > 1){
            const x = heap.dequeue()
            const y = heap.dequeue()
            const newRock = Math.abs(x - y)
            if(newRock) heap.enqueue(newRock)
        }
        return heap.front() ?? 0
    }
}

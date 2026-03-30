class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const result = []
        const myTasks = tasks.reduce((acc, next) =>{
            acc[next] = (acc?.[next] ?? 0) + 1
            return acc
        }, {})
        const pq = new MaxPriorityQueue(e => {
            return e.count
        })
        for(const key in myTasks){
            pq.enqueue({
               key,  count: myTasks[key], t: -n-1
            })
        }
        let idx = 0
        while(pq.size() > 0){
            const toRequeue = []
            while(pq.size() > 0 && idx <= pq.front().t + n) {
                toRequeue.push(pq.dequeue())
            }
            if(pq.size() === 0){
                toRequeue.forEach(e => pq.enqueue(e))
                idx++
                continue
            }
            const task = pq.dequeue()
            result[idx++] = task.key
            toRequeue.forEach(e => pq.enqueue(e))
            if(task.count > 1)
                pq.enqueue({
                    key:task.key,
                    count: task.count - 1,
                    t: idx - 1
                })
        }
        console.log(result.join(","))
        return result.length
    }
}

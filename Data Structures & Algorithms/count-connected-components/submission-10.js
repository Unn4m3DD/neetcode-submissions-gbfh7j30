class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let count = n
        const parents = new Array(n).fill(0).map((_, i) => i)
        const rank = new Array(n).fill(1)
        for (const e of edges) {
            let p1 = e[0]
            while (parents[p1] !== p1) {
                parents[p1] = parents[parents[p1]]
                p1 = parents[p1]
            }
            let p2 = e[1]
            while (parents[p2] !== p2) {
                parents[p2] = parents[parents[p2]]
                p2 = parents[p2]
            }
            if (p1 !== p2) {
                if (rank[p1] > rank[p2]) {
                    rank[p1] += rank[p2]
                    parents[p1] = parents[p2]
                } else {
                    rank[p2] += rank[p1]
                    parents[p2] = parents[p1]
                }
                count--
            }
        }
        return count
    }
}

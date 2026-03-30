class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, ni) {
        const overlapping = intervals.filter(
            e => (
                e[0] <= ni[0] && ni[0] <= e[1] ||
                e[0] <= ni[1] && ni[1] <= e[1] ||
                ni[0] <= e[0] && e[1] <= ni[1]
            )
        )
        const newInterval = [
            Math.min(ni[0], ...overlapping.map(e => e[0])),
            Math.max(ni[1], ...overlapping.map(e => e[1])),
        ]
        const overlappingSet = new Set(
            overlapping.map(e => JSON.stringify(e))
        )
        const result = intervals.filter(
            e => !overlappingSet.has(JSON.stringify(e))
        )

        for (let i = 0; i < result.length + 1; i++) {
            if (result[i] === undefined || newInterval[1] < result[i][0]) {
                result.splice(i, 0, newInterval)
                break
            }
        }
        return result
    }
}






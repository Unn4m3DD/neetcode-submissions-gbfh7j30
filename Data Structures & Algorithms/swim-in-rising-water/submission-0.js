class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const nodeAt = (i, j) => (
            grid?.[i]?.[j] !== undefined ?
                { i, j, v: grid[i][j] } :
                undefined
        )
        const k = ({ i, j }) => `${i},${j}`
        let result = 0
        const visited = new Set()
        const toExplore = new PriorityQueue(({ v: a }, { v: b }) => a - b)
        toExplore.push(nodeAt(0, 0))
        while (toExplore.size() > 0) {
            const next = toExplore.pop()
            if (visited.has(k(next))) continue
            visited.add(k(next))
            result = Math.max(result, next.v)
            if (
                next.i === grid.length - 1 &&
                next.j === grid[0].length - 1
            ) return result
            const toPush = [
                nodeAt(next.i + 1, next.j),
                nodeAt(next.i, next.j + 1),
                nodeAt(next.i - 1, next.j),
                nodeAt(next.i, next.j - 1)
            ].filter(Boolean);

            toPush.forEach(e => {
                toExplore.push(e)
            })
        }
        return -1
    }
}

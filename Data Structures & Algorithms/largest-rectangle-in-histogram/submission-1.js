class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const hs = heights;
        let result = 0
        const tracking = [{ x: 0, h: 0 }]
        tracking.pop()
        for (let x = 0; x < hs.length; x++) {
            let lastIndex = x
            console.log(tracking)
            while (tracking.at(-1)?.h > hs[x]) {
                const first = tracking.pop()
                result = Math.max(result, (x - first.x) * first.h)
                lastIndex = first.x
            }
            tracking.push({ x: lastIndex, h: hs[x] })
        }
        while (tracking.at(-1)) {
            console.log(tracking)
            const first = tracking.pop()
            result = Math.max(result, (hs.length - first.x) * first.h)
        }
        return result
    }
}

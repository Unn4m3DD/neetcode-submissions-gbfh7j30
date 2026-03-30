class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const ts = temperatures
        const result = new Array(ts.length).fill(0)
        let toCheck = []
        for (let i = 0; i < ts.length; i++) {
            while (toCheck.at(-1)?.temp < ts[i]) {
                const t = toCheck.pop()
                result[t.index] = i - t.index
            }
            toCheck.push(
                {
                    temp: ts[i],
                    index: i
                }
            )
        }
        return result
    }
}

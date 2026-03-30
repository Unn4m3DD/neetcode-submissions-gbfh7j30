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
            for (let j = 0; j < toCheck.length; j++) {
                const checking = toCheck[j]
                if (ts[i] > checking.temp) {
                    result[checking.index] = i - checking.index
                    toCheck.splice(j, 1)
                    j--
                }
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

class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        return this.getParen(n, 0)
    }

    getParen(open, close) {
        if (open === 0 && close === 0) return [""]
        const result = []
        if (open > 0) {
            this.getParen(open - 1, close + 1).map(
                e => `(${e}`
            ).forEach(e => result.push(e))
        }
        if (close > 0) {
            this.getParen(open, close - 1).map(
                e => `)${e}`
            ).forEach(e => result.push(e))
        }
        return result
    }
}


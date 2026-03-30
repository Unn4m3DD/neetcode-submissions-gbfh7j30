class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const operations = ['*', '+', '/', '-']
        const stack = []
        for (const t of tokens) {
            if (operations.includes(t)) {
                const [a, b] = [stack.pop(), stack.pop()]
                const toPush =
                    t === '/' ? Math.trunc(b / a) :
                    t === '*' ? b * a :
                    t === '-' ? b - a :
                    t === '+' ? b + a :
                    0
                stack.push(toPush)
            }
            else {
                stack.push(parseInt(t))
            }
        }
        return stack.pop()
    }
}

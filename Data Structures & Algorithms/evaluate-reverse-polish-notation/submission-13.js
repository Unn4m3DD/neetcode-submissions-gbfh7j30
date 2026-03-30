class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const operations = ['*', '+', '/', '-']
        const stack = []
        for (const t of tokens) {
            console.log(t, stack)
            if (operations.includes(t)) {
                const [a, b] = [stack.pop(), stack.pop()]
                stack.push(eval(`Math.trunc(${b} ${t} ${a})`))
            }
            else {
                stack.push(t)
            }
        }
        return stack.pop()
    }
}

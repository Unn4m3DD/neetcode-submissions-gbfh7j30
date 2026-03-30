class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN2(tokens){
        const operations = ["+", "-", "/", "*"]
        if (!operations.includes(tokens.at(-1))) {
            const result = tokens.at(-1);
            tokens.pop()
            return result
        }
        else {
            const operation = tokens.at(-1)
            tokens.pop()
            const operand2 = this.evalRPN2(tokens)
            const operand1 = this.evalRPN2(tokens)
            const result =  `Math.trunc(${operand1} ${operation} ${operand2})`
            if (operation === '/'){
                return `${result}`
            }
            return result
        }
    }
    evalRPN(tokens) {
        const result = this.evalRPN2(tokens)
        console.log(result)
        return (eval(result))
    }
}

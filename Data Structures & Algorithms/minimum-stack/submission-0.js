class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        this.minStack.push(Math.min(this.minStack.at(-1) ?? Number.MAX_VALUE, val))
    }

    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop()
        const result = this.stack.at(-1)
        this.stack.pop()
        return result
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1)
     }

    /**
     * @return {number}
     */
    getMin() { 
        return this.minStack.at(-1)
    }
}

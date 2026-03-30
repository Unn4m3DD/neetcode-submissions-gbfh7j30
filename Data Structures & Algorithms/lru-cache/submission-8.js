

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.memory = new Map()
        this.head = { next: null }
        this.tail = { prev: null }
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const currentNode = this.memory.get(key)
        if (!this.memory.get(key)) {
            return -1
        }
        currentNode.prev.next = currentNode.next
        currentNode.next.prev = currentNode.prev
        currentNode.prev = this.tail.prev
        currentNode.next = this.tail
        this.tail.prev.next = currentNode
        this.tail.prev = currentNode
        return currentNode.value
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let currentNode = this.memory.get(key);
        if (this.memory.size === this.capacity && !currentNode) {
            const oldHead = this.head.next
            this.head.next = this.head.next.next
            this.head.next.prev = this.head
            this.memory.delete(oldHead.key)
        }
        if (currentNode) {
            currentNode.prev.next = currentNode.next
            currentNode.next.prev = currentNode.prev
        }
        this.memory.set(key, {
            key,
            value,
            prev: this.tail.prev,
            next: this.tail
        })
        currentNode = this.memory.get(key)
        currentNode.prev.next = currentNode
        currentNode.next.prev = currentNode
    }
}

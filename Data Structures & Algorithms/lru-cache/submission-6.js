

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.memory = {}
        this.head = { next: null }
        this.tail = { prev: null }
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    printList() {
        let p = this.head.next;
        let result = "["
        while (p.next) {
            result += `(${p.key}, ${p.value}), `
            p = p.next
        }
        console.log(result + ']')
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        console.log(`GET ${key}`)
        this.printList()
        if (!this.memory[key]) {
            return -1
        }
        this.memory[key].prev.next = this.memory[key].next
        this.memory[key].next.prev = this.memory[key].prev
        this.memory[key].prev = this.tail.prev
        this.memory[key].next = this.tail
        this.tail.prev.next = this.memory[key]
        this.tail.prev = this.memory[key]
        console.log(`END GET ${key} `)
        this.printList()
        return this.memory[key].value
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        console.log(`PUT ${key} - ${value}`)
        this.printList()
        if (Object.keys(this.memory).length === this.capacity && !this.memory[key]) {
            const oldHead = this.head.next
            this.head.next = this.head.next.next
            this.head.next.prev = this.head
            console.log("Deleting", oldHead.key, oldHead.value)
            delete this.memory[oldHead.key]
        }
        if(this.memory[key]){
            this.memory[key].prev.next = this.memory[key].next
            this.memory[key].next.prev = this.memory[key].prev
        }
        this.memory[key] = {
            key,
            value,
            prev: this.tail.prev,
            next: this.tail
        }
        this.memory[key].prev.next = this.memory[key]
        this.memory[key].next.prev = this.memory[key]
        console.log(`END PUT ${key} - ${value}`)
        this.printList()
    }
}



class MedianFinder {
    constructor() {
        this.qRight = new MinPriorityQueue()
        this.qLeft = new MaxPriorityQueue()
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        let shouldGoLeft = num < this.qRight.front()
        if (shouldGoLeft) {
            if (this.qLeft.size() <= this.qRight.size()) {
                this.qLeft.push(num)
            } else {
                let l = this.qLeft.pop()
                if(l !== null) this.qRight.push(l)
                this.qLeft.push(num)
            }
        } else {
            if (this.qRight.size() < this.qLeft.size()) {
                this.qRight.push(num)
            } else {
                let r = this.qRight.pop()
                if(r !== null) this.qLeft.push(r)
                this.qRight.push(num)
            }
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        const total = this.qLeft.size() + this.qRight.size()
        if (total % 2 === 1) {
            return this.qLeft.size() > this.qRight.size() ?
                this.qLeft.front() :
                this.qRight.front()
        }
        return (this.qLeft.front() + this.qRight.front()) / 2
    }
}

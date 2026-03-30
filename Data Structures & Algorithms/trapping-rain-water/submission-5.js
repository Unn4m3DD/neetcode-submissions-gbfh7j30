class Solution {
    /**
     * @param {number[]} hs
     * @return {number}
     */
    trap(hs) {
        let total = 0;
        let p1 = 0;
        let p2 = 0;
        while (p2 < hs.length) {
            while (p1 < hs.length && hs[p1] < hs[p1 + 1]) {
                p1++;
            }
            if (p1 === hs.length && !(hs[p1] < hs[p1 + 1])) break;
            p2 = p1 + 1
            let currentCapacity = 0
            while (p2 < hs.length && hs[p1] > hs[p2]) {
                currentCapacity += (hs[p1] - hs[p2])
                p2++
            }
            if (p2 === hs.length && !(hs[p1] > hs[p2])) {
                console.log('reached', p1, p2)
                const newStart = p1;
                p2 = hs.length - 1
                while (newStart < p2) {
                    while (newStart < p2 && hs[p2 - 1] > hs[p2]) {
                        p2--;
                    }
                    if (p2 === newStart && !(hs[p2 - 1] > hs[p2])) break;
                    p1 = p2 - 1
                    let lastLoopCurrentCapacity = 0
                    while (newStart < p1 && hs[p1] < hs[p2]) {
                        lastLoopCurrentCapacity += (hs[p2] - hs[p1])
                        p1--
                    }
                    console.log(p1, p2, lastLoopCurrentCapacity, hs[p1], hs[p2])
                    if (p1 === newStart && (hs[p1] < hs[p2])) break;
                    total += lastLoopCurrentCapacity
                    p2 = p1
                }
                break
            } else {
                total += currentCapacity
                p1 = p2
            }
        }

        return total
    }
}

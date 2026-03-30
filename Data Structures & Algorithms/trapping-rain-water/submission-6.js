class Solution {
    /**
     * @param {number[]} hs
     * @return {number}
     */
    trap(hs) {
        let maxRight = new Array(hs.length).fill(0);
        let maxLeft = new Array(hs.length).fill(0);
        for (let i = 1; i < hs.length; i++) {
            maxLeft[i] = Math.max(
                maxLeft[i - 1],
                hs[i - 1]
            )
        }
        for (let i = hs.length - 2; 0 <= i; i--) {
            maxRight[i] = Math.max(
                maxRight[i + 1],
                hs[i + 1]
            )
        }
        console.log(
            " " + maxLeft.join(",") + '\n',
            hs.join(",") + '\n',
            maxRight.join(",") + '\n',
        )
        let total = 0
        for (let i = 1; i < hs.length - 1; i++) {
            const h = Math.min(maxLeft[i], maxRight[i]);
            if (hs[i] <= h) {
                console.log(hs[i] ,h)
                total += (h - hs[i])
            }
        }
        return total


        //let total = 0;
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

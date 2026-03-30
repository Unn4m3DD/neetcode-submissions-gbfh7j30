class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = piles.reduce((a, b) => Math.max(a, b))
        while (l < r) {
            const m = Math.floor((r + l) / 2)
            const timeToEat = piles
                .map(e => Math.ceil(e / m))
                .reduce((acc, next) => acc + next, 0)
            console.log(m, timeToEat)
            if (timeToEat > h) {
                l = m + 1
            } else {
                r = m
            }
        }
        return l
    }
}

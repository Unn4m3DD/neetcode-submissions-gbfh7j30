class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let result = 0;
        const cars = position.map((e, i) => ({
            position: e,
            timeToFinish: (target - e) / speed[i]
        })).sort((a, b) => a.position - b.position)
        console.log(cars)
        for (let i = cars.length - 1; i >= 0;) {
            let currentTimeToFinish = cars[i].timeToFinish
            while (i >= 0 && cars[i].timeToFinish <= currentTimeToFinish) {
                i--
            }
            result++
        }
        return result
    }
}

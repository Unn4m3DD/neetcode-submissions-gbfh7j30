class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length - 1
        while(true){
            const current = numbers[i] + numbers[j]
            if(current === target) return [i, j].map(e => 1 + e)
            if(current > target) j--
            else if(current < target) i++
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const result = []
        let maxQueue = [nums[0]]
        for (let i = 1; i < k; i++) {
            if (nums[i] > maxQueue[0]) {
                maxQueue = [nums[i]]
            } else {
                while (maxQueue.at(-1) < nums[i]) maxQueue.pop()
                maxQueue.push(nums[i])
            }
        }
        for (let i = 0; i < nums.length - k + 1; i++) {
            console.log(
                nums.slice(i, i + k),
                maxQueue
            )
            result.push(maxQueue[0])
            if (maxQueue[0] === nums[i]) {
                maxQueue.shift()
            }
            if (nums[i + k] > maxQueue[0]) {
                maxQueue = [nums[i + k]]
            } else {
                while (maxQueue.at(-1) < nums[i + k]) maxQueue.pop()
                maxQueue.push(nums[i + k])
            }
        }
        return result
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        function swap(i,j){
            const tmp = nums[i]
            nums[i] = nums[j]
            nums[j] = tmp
        }
        let l= 0, r = nums.length -1
        while (true){
            let t = nums[r]
            let p = l
            for(let i = l; i < r; i++){
                if (nums[i] > t){
                    swap(i, p++)
                }
            }
            swap(p, r)
            if(p === k-1) return t
            if (p > k-1){
                r = p-1
            }else{
                l = p+1
            }
        }
    }
}

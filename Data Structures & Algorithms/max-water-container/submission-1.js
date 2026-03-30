class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(hs) {
        let l = 0;
        let r = hs.length - 1
        let max = 0
        while (l < r){
            const current = Math.min(hs[l], hs[r]) * (r - l)
            max = Math.max(max, current)
            if(hs[l] > hs[r]) r--
            else l++
        }
        return max
    }
}

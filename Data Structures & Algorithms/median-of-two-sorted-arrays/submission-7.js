class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if(nums1.length < nums2.length){
            const tmp = nums1;
            nums1 = nums2;
            nums2 = tmp;
        }
        let l = 0;
        let r = nums1.length - 1;
        let m = Math.floor((l + r) / 2)
        let partitionSize = Math.floor((nums1.length + nums2.length) / 2)
        let r2 = partitionSize - (m + 2)

        while (
            r2 > 0 &&
            (nums1[m] > nums2[r2] ||
                nums2[r2 + 1] > nums1[m + 1])
        ) {
            if (nums1[m] > nums2[r2]) {
                r = m - 1
            } else {
                l = m + 1
            }
            m = Math.floor((l + r) / 2)
            r2 = partitionSize - (m + 2)
            renderParition()
        }
        if (nums1.length === 0) {
            const idx = Math.floor((nums2.length - 1) / 2)
            console.log(nums2, idx)
            let result = nums2[idx]
            if (!(nums2.length & 1)) {
                result = (result + nums2[idx + 1]) / 2
            }
            return result
        }
        if (nums2.length === 0) {
            const idx = Math.floor((nums1.length - 1) / 2)
            let result = nums1[idx]
            if (!(nums1.length & 1)) {
                result = (result + nums1[idx + 1]) / 2
            }
            return result
        }
        if (partitionSize & 1) {
            return Math.min(
                nums1[m + 1] ?? Number.MAX_SAFE_INTEGER,
                nums2[r2 + 1] ?? Number.MAX_SAFE_INTEGER
            )
        }
        return (
            Math.min(
                nums1[m + 1] ?? Number.MAX_SAFE_INTEGER,
                nums2[r2 + 1] ?? Number.MAX_SAFE_INTEGER
            ) + Math.max(
                nums1[m] ?? Number.MIN_SAFE_INTEGER,
                nums2[r2] ?? Number.MIN_SAFE_INTEGER
            )
        ) / 2
    }
}

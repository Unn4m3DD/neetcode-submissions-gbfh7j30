class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if (nums1.length + nums2.length < 10) {
            const newArray = [...nums1, ...nums2]
            newArray.sort((a, b) => a - b)
            if (newArray.length & 1) {
                return newArray[Math.floor((newArray.length - 1) / 2)]
            } else {

                return (
                    newArray[Math.floor((newArray.length - 1) / 2)] +
                    newArray[Math.floor((newArray.length - 1) / 2) + 1]
                ) / 2
            }
        }
        if (nums1.length < nums2.length) {
            const tmp = nums1;
            nums1 = nums2;
            nums2 = tmp;
        }
        const partitionSize = Math.floor((nums1.length + nums2.length) / 2);
        let l = 0;
        let r = nums1.length - 1;
        let m;
        let other;
        while (l <= r) {
            m = Math.floor((l + r) / 2);
            other = partitionSize - m - 2
            if (
                nums1[m] > nums2[other + 1]
            ) {
                r = m - 1
            } else if (nums2[other] > nums1[m + 1]) {
                l = m + 1
            } else {
                break
            }
        }

        if ((nums1.length + nums2.length) & 1) {
            return Math.min(
                nums1[m + 1] ?? Number.MAX_SAFE_INTEGER,
                nums2[other + 1] ?? Number.MAX_SAFE_INTEGER
            )
        }
        return ((
            Math.max(
                nums1[m] ?? Number.MIN_SAFE_INTEGER,
                nums2[other] ?? Number.MIN_SAFE_INTEGER
            ) +
            Math.min(
                nums1[m + 1] ?? Number.MAX_SAFE_INTEGER,
                nums2[other + 1] ?? Number.MAX_SAFE_INTEGER
            )
        ) / 2)
    }
}

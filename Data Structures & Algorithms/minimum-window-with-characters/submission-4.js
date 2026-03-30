class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let totalNeed = 0
        const need = t.split("").reduce((acc, next) => {
            if (!acc[next]) totalNeed++
            acc[next] ??= 0
            acc[next]++
            return acc
        }, {})
        const have = t.split("").reduce((acc, next) => {
            acc[next] ??= 0
            return acc
        }, {})
        let result = ""
        let totalHave = 0
        let l = 0;
        let r = 0;
        while (r <= s.length) {
            if (totalHave < totalNeed) {
                if (have[s[r]] !== undefined) {
                    have[s[r]]++
                    if (have[s[r]] === need[s[r]])
                        totalHave++
                }
                r++
            } else {
                if (result === "" || result.length > (r - l)) {
                    result = s.slice(l, r)
                }

                if (have[s[l]] !== undefined) {
                    if (have[s[l]] === need[s[l]])
                        totalHave--
                    have[s[l]]--
                }
                l++
            }
        }
        return result

    }
}

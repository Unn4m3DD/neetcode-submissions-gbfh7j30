class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let ls = height.reduce((acc, next) => {
            acc.push(Math.max(acc.at(-1) ?? 0, next))
            return acc
        }, [])
        let rs = height.reverse().reduce((acc, next) => {
            acc.push(Math.max(acc.at(-1) ?? 0, next))
            return acc
        }, []).reverse()
        console.log(rs, ls)
        let res = 0
        for (const i in height) {
            res += (Math.min(ls[i], rs[i])) - height[i]
        }
        return res
    }
}

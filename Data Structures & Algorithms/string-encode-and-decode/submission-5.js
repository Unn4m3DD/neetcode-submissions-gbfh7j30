class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(e => `${e.length},${e}`).join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = []
        let currentStr = Array.from(str)
        while (currentStr.length > 0) {
            const count = Number(currentStr.splice(
                0,
                currentStr.indexOf(",")
            ).join(""))
            currentStr.splice(0, 1)
            result.push(currentStr.splice(0, count).join(""))
        }
        return result
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(e => `${e.length}#${e}`).join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
        var count = ""
        console.log(str)
        for (let i = 0; i < str.length; i++){
            console.log(i, str[i])
            if(str[i] !== "#"){
                count += str[i]
            } else {
                i++
                const countNumber = parseInt(count)
                result.push(
                    str.slice(i, i + countNumber)
                )
                i += countNumber - 1
                count = ""
            }
        }
        return result
    }
}

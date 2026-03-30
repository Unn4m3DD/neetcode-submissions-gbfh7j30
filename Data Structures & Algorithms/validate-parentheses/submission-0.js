class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const parenMap = {
            "[": "]",
            "(": ")",
            "{": "}"
        }
        const stack = []
        for (let i = 0; i < s.length; i++) {
            if (["[", "{", "("].includes(s[i])) {
                stack.push(s[i])
            } else {
                const match = stack.pop()
                if (parenMap[match] !== s[i]) {
                    return false
                }
            }
        }
        return stack.length === 0
    }
}

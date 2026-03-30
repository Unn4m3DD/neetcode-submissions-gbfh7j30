class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const aAscii = "a".charCodeAt(0);
        const zAscii = "z".charCodeAt(0);
        const zeroAscii = "0".charCodeAt(0);
        const nineAscii = "9".charCodeAt(0);
        function isAlphaNum(c) {
            const asciiChar = c.toLowerCase().charCodeAt(0)
            return (
                (asciiChar < aAscii || zAscii < asciiChar) &&
                (asciiChar < zeroAscii || nineAscii < asciiChar)
            )
        }
        let start = 0;
        let end = s.length - 1
        console.log(start, end)
        outer: while (start < end) {
            console.log(start, end)
            while (isAlphaNum(s[start].toLowerCase())) {
                start++
                if (start >= end) break outer;
            }
            while (isAlphaNum(s[end].toLowerCase())) {
                end--
                if (start >= end) break outer;
            }
            console.log(start, end)
            if (s[start++].toLowerCase() !== s[end--].toLowerCase()) return false
        }
        return true
    }
}

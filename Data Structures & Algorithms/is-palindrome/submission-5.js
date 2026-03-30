class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(oldS) {
        const s = oldS.toLowerCase().replace(/[^a-z0-9]/g, "")
        let i = 0;
        let j = s.length - 1
        while(i < Math.ceil(s.length)){
            if(s[i++] !== s[j--]) return false
        }
        return true
    }
}

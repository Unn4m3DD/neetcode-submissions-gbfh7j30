class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length === 1 && s.length === 1) return t === s ? t : ""
        function printMap(m) {
            let result = ""
            for (const i in m) {
                if (m[i] > 0) {
                    result += `${String.fromCharCode((i % 26) + asciia)}:${m[i]}, `
                }
            }
            console.log(result)
        }
        let result;
        const asciiA = "A".charCodeAt(0)
        const asciia = "a".charCodeAt(0)
        const asciiz = "z".charCodeAt(0)
        const idx = (char) => {
            const code = char.charCodeAt(0);
            if (asciia <= code && code <= asciiz) {
                return code - asciia
            }
            return code - asciiA + 26
        }
        const tCounts = new Array(26 * 2).fill(0)
        t.split("").forEach(e => {
            tCounts[idx(e)] = (tCounts[idx(e)] ?? 0) + 1
        })
        let p0 = 0
        while (p0 < s.length && tCounts[idx(s[p0])] === 0) {
            p0++
        }
        if (p0 === s.length) return ""
        let p1 = p0
        const counts = new Array(26 * 2).fill(0)
        counts[idx(s[p0])]++
        outer: while (p1 < s.length) {
            console.log(
                s.slice(p0, p1 + 1),
            )
            printMap(counts); printMap(tCounts)
            for (let i = 0; i < counts.length; i++) {
                if (tCounts[i] > counts[i]) {
                    p1++
                    if (p1 < s.length)
                        counts[idx(s[p1])]++
                    continue outer
                }
            }

            if (result === undefined || p1 - p0 + 1 < result.length) {
                result = s.slice(p0, p1 + 1)
                console.log({ result })
            }
            counts[idx(s[p0])]--
            p0++
        }
        return result ?? ""
    }
}

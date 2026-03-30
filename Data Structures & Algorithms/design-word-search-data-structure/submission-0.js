class WordDictionary {
    constructor() {
        this.children = {}
        this.end = false
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let c = this.children
        word.split("").forEach((e, i) => {
            c[e] ??= {
                end: false,
                children: {}
            }
            if (i === word.length - 1) {
                c[e].end = true
            }
            c = c[e].children
        })
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let c = [this]
        word.split("").forEach((e) => {
            const newC = []
            c.forEach(a => {
                if (e === "." && a?.children) {
                    newC.push(...Object.values(a?.children))
                }
                else if (a?.children?.[e]) {
                    newC.push(a?.children?.[e])
                }
            })
            c = newC
        })
        console.log(c)
        return !!c.some(e => e?.end)
    }
}







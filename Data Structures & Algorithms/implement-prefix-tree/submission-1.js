class PrefixTree {
    constructor() {
        this.children = {}
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let c = this.children
        word.split("").forEach((e) => {
            c[e] ??= {
                end: false,
                children: {}
            }
            c = c[e].children
        })
        c.end = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let c = this.children
        word.split("").forEach((e) => {
            c = c?.[e]?.children
        })
        return !!c?.end
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let c = this.children
        prefix.split("").forEach((e) => {
            c = c?.[e]?.children
        })
        return !!c
    }
}

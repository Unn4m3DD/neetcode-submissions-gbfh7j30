class TimeMap {
    constructor() {
        this.keyStore = {};
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        this.keyStore[key] ??= []
        this.keyStore[key].push({
            value, timestamp
        })
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let result = ""
        const toSearch = this.keyStore[key] ?? [];
        let l = 0;
        let r = toSearch.length - 1;
        while (l <= r) {
            const m = Math.floor((r + l) / 2)
            if (timestamp < toSearch[m].timestamp) {
                r = m - 1
            } else if (timestamp > toSearch[m].timestamp) {
                result = toSearch[m].value
                l = m + 1
            } else {
                return toSearch[m].value
            }
        }
        return result
    }
}

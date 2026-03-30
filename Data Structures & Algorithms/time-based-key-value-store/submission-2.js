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
        this.keyStore[key] ??= {}
        this.keyStore[key][timestamp] = value
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        while (timestamp >= 0 && !this.keyStore?.[key]?.[timestamp])
            timestamp--
        return this.keyStore?.[key]?.[timestamp] ?? ""
    }
}

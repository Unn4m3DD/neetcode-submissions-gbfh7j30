class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        let map = {}
        for(const t of tickets){
            map[t[0]] ??= []
            map[t[0]].push(t[1])
            map[t[0]].sort((a, b) => a.localeCompare(b))
        }
        function dfs(path, count){
            if(count === tickets.length) return path
            const current = path.at(-1)
            for(const pi in map[current]){
                const p = map[current][pi]
                map[current].splice(pi, 1)
                const result = dfs([...path, p], count + 1)
                if(result) return result
                map[current].splice(pi, 0, p)
            }
        }
        return dfs(["JFK"], 0)
    }
}

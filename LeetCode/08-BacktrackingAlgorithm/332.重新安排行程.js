/*
 * @lc app=leetcode.cn id=332 lang=javascript
 *
 * [332] 重新安排行程
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
    let map = {}
    for (const tickt of tickets) {
        const [from, to] = tickt
        if (!map[from]) {
            map[from] = []
        }
        map[from].push(to)
    }
    for (const city in map) {
        // 对到达城市列表排序
        map[city].sort()
    }
    let res = ['JFK']
    function backtracking() {
        if (res.length == tickets.length + 1) return true
        if (!map[res[res.length - 1]] || !map[res[res.length - 1]].length) return false
        for (let i = 0; i < map[res[res.length - 1]].length; i++) {
            let city = map[res[res.length - 1]][i]
            map[res[res.length - 1]].splice(i, 1)
            res.push(city)
            if (backtracking()) return true
            res.pop()
            map[res[res.length - 1]].splice(i, 0, city)
        }
    }
    backtracking()
    return res
};


var findItinerary = function (tickets) {
    let map = {}
    for (const tickt of tickets) {
        const [from, to] = tickt
        if (!map[from]) {
            map[from] = new Map()
        }
        if (!map[from].has(to)) {
            map[from].set(to, 1)
        }
        else {
            map[from].set(to, map[from].get(to) + 1)
        }
    }
    for (const city in map) {
        // 对到达城市列表排序
        let arr = Array.from(map[city])
        arr.sort((a, b) => a[0].localeCompare(b[0]))
        map[city] = new Map(arr.map(i => [i[0], i[1]]))
    }
    let res = ['JFK']
    function backtracking() {
        if (res.length == tickets.length + 1) return true
        if (map[res[res.length - 1]]) {
            for (const item of map[res[res.length - 1]]) {
                if (!item[1] || item[1] == 0) continue
                item[1]--
                map[res[res.length - 1]].set(item[0], item[1])
                res.push(item[0])
                if (backtracking()) return true
                res.pop()
                item[1]++
                map[res[res.length - 1]].set(item[0], item[1])
            }
        }
        return false
    }
    backtracking()
    return res
};
console.log(findItinerary([["JFK", "KUL"], ["JFK", "NRT"], ["NRT", "JFK"]]))
// @lc code=end


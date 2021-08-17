/*
 * @lc app=leetcode.cn id=973 lang=javascript
 *
 * [973] 最接近原点的 K 个点
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

//1.自带排序函数
var kClosest = function (points, k) {
    points.sort((a, b) => a[0] * a[0] + a[1] * a[1] - b[0] * b[0] - b[1] * b[1])
    return points.filter((item, index) => index < k)
};

//2.改进版快排
var kClosest = function (points, k) {
    let _k = k
    function partition(points, low, high) {
        let pivot = [...points[low]]
        while (low < high) {
            while (low < high && points[high][0] * points[high][0] + points[high][1] * points[high][1] >= pivot[0] * pivot[0] + pivot[1] * pivot[1]) high--
            points[low] = [...points[high]]
            while (low < high && points[low][0] * points[low][0] + points[low][1] * points[low][1] <= pivot[0] * pivot[0] + pivot[1] * pivot[1]) low++
            points[high] = [...points[low]]
        }
        points[low] = [...pivot]
        return low
    }
    function quickSort(points, k, low, high) {
        let pivotpos = partition(points, low, high)
        if (k == pivotpos - low + 1) return points.slice(0, _k)
        else if (k < pivotpos - low + 1) return quickSort(points, k, low, pivotpos - 1)
        else if (k > pivotpos - low + 1) return quickSort(points, k - (pivotpos - low + 1), pivotpos + 1, high)
    }
    return quickSort(points, _k, 0, points.length - 1)
}
kClosest([[7, 3], [2, 0], [-2, 2], [1, 0], [9, 2]], 2) //[[1,0],[2,0]]
// @lc code=end


/*
 * @Author: nongqi
 */
/*
 * @Author: nongqi
 */
// 快速排序算法

// 思路
// 分区：从数组中任意选中一个“基准”，所有比基准小的元素放在基准前面，比基准大的元素放在基准的后面。
// 递归：递归地对基准前后的子数组进行分区（直到只剩一个）

Array.prototype.quickSort = function() {
    const rec = (arr) => {

        if(arr.length === 1) return arr

        const left = [];
        const right = [];
        // 基准
        const mid = arr[0]

        for(let i = 1; i < arr.length; i++){
            if(arr[i] < mid) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }
        // 放在基准的两侧
        return [...rec(left), mid, ...rec(right)]
    }

    const res = rec(this)
    res.forEach((n, i) => {
        this[i] = n
    })
}

const arr = [2, 4, 3, 5, 1];
arr.quickSort();
console.log('====================================');
console.log(arr);
console.log('====================================');

快速排序的时间复杂度
// 递归的时间复杂度 O(logN)
// 分区操作的时间复杂度是O(n)
// 总时间复杂度： O(n*logN)
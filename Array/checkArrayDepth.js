var lists = [1, [2, [3, 4], [[[6]], 5]]];
function checkDepth(aList) {
    if (!Array.isArray(aList)) {
        return 0;
    }
    var maxDepth = 1;
    var depths = new Array(aList.length);
    for (var idx in aList) {
        depths[idx] = 1;
        if (Array.isArray(aList[idx])) {
            depths[idx] += checkDepth(aList[idx]);   // 用递归方式处理
        } else {
            depths[idx] += 0;
        }
    }
    return Math.max(...depths);   // 取最大深度
}
console.log("max depth is: ", checkDepth(lists));
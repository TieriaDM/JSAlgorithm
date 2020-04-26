function flattenDeep(arr){
    const reducer = (acc, val) => Array.isArray(val) ? 
    acc.concat(flattenDeep(val)) : acc.concat(val);
    return arr.reduce(reducer, []);
}
console.log(flattenDeep([1, [2, [3, [4]], 5]]));
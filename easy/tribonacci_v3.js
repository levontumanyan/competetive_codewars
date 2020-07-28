console.time('test');
//some code

function tribonacci(signature, n) {
    const result = signature.slice(0, n);
    while (result.length < n) {
        result[result.length] = result.slice(-3).reduce((p, c) => p + c, 0);
    }
    return result;
}


console.log(tribonacci(tribonacci([1, 1, 1], 10)));
console.timeEnd('test');
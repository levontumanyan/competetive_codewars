console.time('test');
//some code

function tribonacci(signature, n) {
    //your code here

    let tribonacci_array = new Array(n).fill(0);

    tribonacci_array = [...signature, ...tribonacci_array.slice(3, n)];

    if (n <= 3) {
        return tribonacci_array.slice(0, n);
    }
    else {
        for (let i = 3; i < n; i++) {
            tribonacci_array[i] = tribonacci_array[i - 1] + tribonacci_array[i - 2] + tribonacci_array[i - 3];
        }
    }

    return tribonacci_array;


}


console.log(tribonacci(tribonacci([1, 1, 1], 10)));

console.timeEnd('test');

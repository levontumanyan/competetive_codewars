function fibonacci(n, memo) {
    memo = memo || { 0: 1, 1: 1 };

    if (memo[n]) {
        return memo[n];
    }
    else {
        return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    }
}

console.log(fibonacci(100));
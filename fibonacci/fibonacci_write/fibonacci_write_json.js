fs = require('fs');

let cache = JSON.parse(fs.readFileSync('fibonacci_cache.txt'));

function fibonacci(n) {


    if (!cache.hasOwnProperty(n)) {
        cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return cache[n];
    }
    else {
        return cache[n];
    }

}

console.log(fibonacci(1511));

fs.writeFile('fibonacci_cache.txt', JSON.stringify(cache), function (err) {
    if (err) return console.log(err);
});

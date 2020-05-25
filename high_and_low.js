// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
    // ...
    var result = [];
    var sorted_numbers = numbers.split(" ").sort(function (a, b) { return a - b });
    result.push(sorted_numbers[sorted_numbers.length - 1]);
    result.push(sorted_numbers[0]);
    result = result.join(" ");
    return result;
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));

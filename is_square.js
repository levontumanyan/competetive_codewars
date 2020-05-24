// tests whether a given input is a perfect square

var isSquare = function (n) {
    return Math.sqrt(n) % 1 === 0;
}

console.log(isSquare(144));
console.log(isSquare(-144));
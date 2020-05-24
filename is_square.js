// tests whether a given input is a perfect square
// the function checks whether after taking the square root of the 
// input, if it is an integer or not.

var isSquare = function (n) {
    return Math.sqrt(n) % 1 === 0;
}

console.log(isSquare(144));
console.log(isSquare(-144));
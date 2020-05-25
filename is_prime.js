// a function that returns whether the input is a prime or not
// uses the idea that all of the divisors of a number are between two and the 
// square root of the number. no need to check in the for loop up to num itself

function isPrime(num) {

    if (num === 0 || num === 1 || Math.sign(num) === -1) {
        return false;
    }

    if (num === 2) {
        return true;
    }

    for (var i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;

}

console.log(isPrime(4));

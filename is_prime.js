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

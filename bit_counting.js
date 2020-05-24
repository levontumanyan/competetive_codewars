var countBits = function (n) {
    return Array.from(n.toString(2)).filter(element => element === '1').length;
};

console.log(countBits(12243));
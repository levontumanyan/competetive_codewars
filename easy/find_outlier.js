// Javascript has a bug where mod returns negative values. For example. -6%2 is equal to -0; The below makes a polyfill of mod. 

Number.prototype.mod = function (n) {

    if (n === 0) {
        return 0;
    }

    return ((this % n) + n) % n;
}

function findOutlier(integers) {

    let array_length = integers.length;
    let i = 0;
    let outlier_even = true;

    if (integers[i].mod(2) === 0 && integers[i + 1].mod(2) === 0) {
        outlier_even = false;
    }
    else if (integers[i].mod(2) === 1 && integers[i + 1].mod(2) === 1) {
        outlier_even = true;
    }
    else if (integers[i].mod(2) === 0 && integers[i + 1].mod(2) === 1 && integers[i + 2].mod(2) === 0) {
        outlier_even = false;
    }
    else if (integers[i].mod(2) === 0 && integers[i + 1].mod(2) === 1 && integers[i + 2].mod(2) === 1) {
        outlier_even = true;
    }
    else if (integers[i].mod(2) === 1 && integers[i + 1].mod(2) === 0 && integers[i + 2].mod(2) === 0) {
        outlier_even = false;
    }
    else if (integers[i].mod(2) === 1 && integers[i + 1].mod(2) === 0 && integers[i + 2].mod(2) === 1) {
        outlier_even = true;
    }

    if (outlier_even) {
        return integers.filter(number => number.mod(2) === 0)[0];
    }
    else {
        return integers.filter(number => number.mod(2) === 1)[0];
    }

    return outlier_even;
}

// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
// console.log(findOutlier([2, 6, 8, 10, 3]));
// console.log(findOutlier([138687694, -175789875, -90859838, -95789794, -57340880, 155661118, -44644170, -124106588, -168858284, 103887934, 43998530, 133199740, -121865702, -163617576, -146458638, 199199918, -199904546, -190762712, 197356272, 78964914, -195900904, 136767458, -136629746, -158622276, 199702172, -1054840, 55355638, -167321788, 77183186, 38333606, 99748384, -193372792, -76165060, -50583362, 168833822, -141628332, 176494872, 102952960, -169283332, -133193508, -163334990, -36036278, 72538490]));
// console.log(findOutlier([12, -5, 14, 24, 54, 66]));
console.log(findOutlier([0, 1, 2]));


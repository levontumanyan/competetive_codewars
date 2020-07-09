function findOutlier(integers) {

    var array_even = integers.filter(number => number % 2 === 0);
    var array_odd = integers.filter(number => number % 2 === 1);

    if (array_even.length === 1) {
        return array_even[0];
    }
    else {
        return array_odd[0];
    }
}


// function queueTime(customers, n) {
//     const array_sum = array => array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     customers.sort(function (a, b) { return b - a });
//     console.log(customers);
//     return Math.max(customers[0], array_sum(customers.slice(n - 1)));
// }

// console.log(queueTime([2, 2, 3, 3, 4, 4], 2));

function queueTime(customers, n) {

    customers.sort(function (a, b) { return b - a });
    var till = [];
    for (var i = 0; i < n; i++) {
        till.push([customers[i]]);
    }

    var slice_customers = customers.slice(n);

    for (var i = 0; i < slice_customers.length; i++) {
        till[i].push([slice_customers[i]]);
    }


    return till;
}

console.log(queueTime([2, 2, 3, 3, 4, 4], 2));
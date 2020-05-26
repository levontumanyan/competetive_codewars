// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) 
// that checks whether the two arrays have the "same" elements, 
// with the same multiplicities. "Same" means, here, 
// that the elements in b are the elements in a squared, regardless of the order.

function comp(array1, array2) {

    if (array1 === null || array2 === null || array1.length !== array2.length) {
        return false;
    }
    else {

        array1_squared = array1.map(x => x * x).slice().sort(function (a, b) { return a - b });
        array2_sorted = array2.slice().sort(function (a, b) { return a - b });

        for (var i = 0; i < array1.length; i++) {
            if (array1_squared[i] !== array2_sorted[i]) {
                return false;
            }
        }

        return true;

    }

}

console.log(comp([33, 3, 88], [10893, 9, 7744]));
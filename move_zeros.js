// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

var moveZeros = function (arr) {

    // TODO: Program me
    function moveZerosFilter(element) {
        if (element === 0) {
            return false;
        }
        else return true;
    }

    var arr_filtered = arr.filter(moveZerosFilter);
    var length_diff = arr.length - arr_filtered.length;


    return arr_filtered.concat(new Array(length_diff).fill(0));

}


console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
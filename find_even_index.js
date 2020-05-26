// You are going to be given an array of integers.
// Your job is to take that array and find an index N 
// where the sum of the integers to the left of N
// is equal to the sum of the integers to the right of N. 
// If there is no index that would make this happen, return -1.

function findEvenIndex(arr) {
    const array_sum = array => array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    for (let i = 0; i <= arr.length; i++) {
        if (array_sum(arr.slice(0, i)) === array_sum(arr.slice(i + 1))) {
            return i;
        }
    }

    return -1;

}

console.log(findEvenIndex([12, 23, 12, 3, 23, 212, 2]));
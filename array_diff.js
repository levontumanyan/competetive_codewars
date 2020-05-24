var test_array = [];

function arrayDiff(a, b) {
    result = [];
    for (i = 0; i < a.length; i++) {

        const equal_to_b = (element) => element === a[i];
        if (b.some(equal_to_b)) {
            result[i] = null;
        }
        else {
            result[i] = a[i];
        }

    }

    const final_result = result.filter(element => element !== null); // filtering the results array to exclude the elements whose value isn't null

    return final_result;
}


array_of_same = arrayDiff([0, 3, 2, 123, 232, 3, 2], [2, 3, 123, 322]);


console.log(array_of_same);
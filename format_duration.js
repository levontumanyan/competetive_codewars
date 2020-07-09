function formatDuration(seconds) {

    const DURATION = ['year', 'day', 'hour', 'minute', 'second'];
    const DURATIONS = ['years', 'days', 'hours', 'minutes', 'seconds'];

    const DURATION_INT = [60 * 60 * 24 * 365, 60 * 60 * 24, 60 * 60, 60, 1];


    var result = [];
    var counter = 0;

    while (counter <= 4) {
        result.push(Math.floor(seconds / DURATION_INT[counter]));

        seconds = seconds % DURATION_INT[counter];

        counter++;

    }
    console.log(result);
    var non_zeros = result.filter(elem => elem !== 0).length;
    console.log(non_zeros);

    var result_string = "";
    var last_one = false;

    for (var i = 0; i < 5; i++) {
        if (result[i] > 1 && i < non_zeros) {
            result_string += result[i] + " " + DURATIONS[i] + ", ";
            non_zeros--;
        }
        else if (result[i] > 1 && i === non_zeros) {
            result_string += result[i] + " " + DURATION[i] + "and ";
            non_zeros--;
        }
        else if (result[i] === 1) {
            result_string += result[i] + " " + DURATION[i] + ", ";
            non_zeros--;
        }
    }

    return result_string;

}

console.log(formatDuration(213));

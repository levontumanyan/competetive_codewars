function sumIntervals(intervals) {
    //TODO Works for non overlapping arrays
    return intervals.map(x => x[1] - x[0]).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

}


console.log(sumIntervals([[1, 3], [5, 8]]));
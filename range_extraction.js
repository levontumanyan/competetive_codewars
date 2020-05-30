function solution(list) {

    var result = [];

    for (var i = 0; i < list.length; i++) {
        if (list[i] === list[i + 1] - 1) {
            result.push(`${list[i]} - ${list[i + 1]}`);
            i++;
        }
        else {
            result.push(`${list[i]}`);
        }
    }

    return result;
}


console.log(solution([1, 2, 3, 4, 8, 67]));
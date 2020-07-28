// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules.
// You will always be given an array with five six-sided dice values.

function score(dice) {

    let array_repeated = new Array(6).fill(0);

    let final_points = 0;

    for (let i = 0; i < 6; i++) {
        if (dice[i]) {
            array_repeated[dice[i] - 1]++;
        }

    }

    if (array_repeated[0] === 1) {
        final_points += 100;
    }

    if (array_repeated[4] === 1) {
        final_points += 50;
    }

    if (!array_repeated.includes(3)) {
        console.log(array_repeated);
        return final_points;
    }
    else {
        for (let j = 1; j < 6; j++) {
            if (array_repeated[j] === 3) {
                final_points += (j + 1) * 100;
            }
        }

        if (array_repeated[0] === 3) {
            final_points += 1000;
        }
    }
    console.log(array_repeated);
    return final_points;
}


console.log(score([[4, 4, 4, 3, 3]]));
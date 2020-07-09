// The goal of this exercise is to convert a string to a new string where each character in
// the new string is "(" if that character appears 
// only once in the original string, or ")"
// if that character appears more than once in the
// original string. Ignore capitalization when determining if a character is a duplicate.


function duplicateEncode(word) {

    let array_repeated = new Array(256).fill(0);
    let word_array = word.toLowerCase().split("");

    let word_length = word_array.length;

    let final_answer = "";

    for (let i = 0; i < word_length; i++) {
        array_repeated[word_array[i].charCodeAt(0)]++;
    }

    for (let i = 0; i < word_length; i++) {
        if (array_repeated[word_array[i].charCodeAt(0)] > 1) {
            final_answer += ")";
        }
        else {
            final_answer += "(";
        }
    }


    // return array_repeated;
    return final_answer;

}

console.log(duplicateEncode("abrakadabra"));

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples: :) :D ;-D :~)
// nvalid smiley faces: ;( :> :} :]

function countSmileys(arr) {
    // regex = /^[:;][-~][)D]/;
    regex = /^([:;])([-~])?([\)D])$/;

    // two solutions
    // const mapped = arr.filter((elem) => elem.match(regex));

    const mapped = arr.filter((elem) => regex.test(elem));


    return mapped.length;
}

console.log(countSmileys([':D', ':~)', ';~D', ':)']));

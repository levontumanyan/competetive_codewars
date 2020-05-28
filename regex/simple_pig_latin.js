//Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
// Leave punctuation marks untouched.

function pigIt(str) {

    // const regex = /([!'";:])/;

    // const mapped = str.split(" ").filter((elem) => regex.test(elem));

    // return mapped;
    //return str.split(" ").map(elem => (elem.slice(1) + elem[0] + 'ay')).join(" ");
    //return str.substring(1);
    return str.replace(/\w+/g, (w) => w.slice(1) + w[0] + 'ay');

}

console.log(pigIt('asdas asdsadd sadsad sdasd! !!asjkd!!'));
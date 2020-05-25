function validParentheses(parens) {

    var arr = parens.split("");
    arr_length = arr.length;

    if (arr.length % 2 !== 0) {
        return false;
    }

    var stack = [];

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] === "(") {
            stack.push(arr[i]);
        }
        else {
            if (stack.slice(-1)[0] === "(") {
                stack.pop();
            }
            else {
                return false;
            }
        }
    }

    if (stack.length !== 0) {
        return false
    }
    else {
        return true;
    }


}

console.log(validParentheses("()()(("));
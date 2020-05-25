// given a string input of braces, return whether the braces are balanced or not

function validBraces(braces) {

    var arr = braces.split("");
    arr_length = arr.length;

    if (arr.length % 2 !== 0) {
        return false;
    }

    var stack = [];

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] === "(") {
            stack.push(arr[i]);
        }
        else if (arr[i] === ")") {
            if (stack.slice(-1)[0] === "(") {
                stack.pop();
            }
            else {
                return false;
            }
        }

        else if (arr[i] === "{") {
            stack.push(arr[i]);
        }
        else if (arr[i] === "}") {
            if (stack.slice(-1)[0] === "{") {
                stack.pop();
            }
            else {
                return false;
            }
        }

        else if (arr[i] === "[") {
            stack.push(arr[i]);
        }
        else if (arr[i] === "]") {
            if (stack.slice(-1)[0] === "[") {
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

console.log(validBraces("()"));
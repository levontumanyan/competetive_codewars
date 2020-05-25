function validateUsr(username) {
    res = /^[0-9a-z_]{4,16}$/.test(username);
    return res;
}

console.log(validateUsr('Hellofsd'));
console.log(validateUsr('21323'));

console.log(validateUsr('1234231sdfsdfA'));

console.log(validateUsr('Hellofsd'));

console.log(validateUsr('sad1121'));

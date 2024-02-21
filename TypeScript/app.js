"use strict";
const user = {
    login: 'a@a.ru',
    password: '1'
};
function multiply(first, second) {
    if (!second) {
        return first * first;
    }
    return first * second;
}
console.log(multiply(5));

"use strict";

let min = Math.ceil(1);
let max = Math.floor(32);
let day = Math.floor(Math.random() * (max - min + 1) + min);
console.log(day);
if (day >= 1 && day < 10) document.write("1 декада");
else if (day > 10 && day < 20) document.write("2 декада");
else if (day > 20 && day <= 31) document.write("3 декада");
else document.write("ошибка");

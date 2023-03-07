"use strict";

let min = Math.ceil(1);
let max = Math.floor(110);
let num = Math.floor(Math.random() * (max - min + 1) + min);
document.write(`num = ${num}\n`);
var sum = 0;
var numString = String(num);
for (var i = 0; i < numString.length; i++) {
  sum = sum + parseInt(numString[i]);
}
if (num < 10) document.write("сумма цифр однозначна");
else if (num > 10 && num < 100) document.write(`сумма цифр = ${sum}`);
else document.write("сумма цифр двухзначна");

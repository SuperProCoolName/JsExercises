"use strict";

let num1 = Math.floor(Math.random() * 2);
let num2 = Math.floor(Math.random() * 2);
let test1, test2;
if (num1 === 0) {
  test1 = "abc";
} else {
  test1 = "abcd";
}
if (num2 === 0) {
  test2 = "abc";
} else {
  test2 = "abcd";
}
if (test1 === test2) {
  console.log(`test1 === test2`);
} else {
  console.log(`test1 !== test2`);
}

"use strict";

let test1 = Math.floor(Math.random() * 15);
console.log(test1);
let test2 = Math.floor(Math.random() * 15);
console.log(test2);
if (test1 < test2) {
  console.log(`test1 < test2`);
} else if (test1 > test2) {
  console.log(`test1 > test2`);
} else {
  console.log(`test1 === test2`);
}

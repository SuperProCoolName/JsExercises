"use strict";

let obj = { x: 1, y: 2, z: 3 };
console.log(obj.x);
let key = "x";
console.log(obj[key]);
let sum = obj.x + obj.y + obj.x;
console.log(sum);
console.log(Object.keys(obj).length);

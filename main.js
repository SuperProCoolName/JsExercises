"use strict";

let key = "x";

let obj = {
  [key]: 1,
  y: 2,
  z: 3,
};

console.log(obj.x);

let key1 = "x";
let key2 = "y";
let key3 = "z";

let obj2 = {
  x: [key1],
  y: [key2],
  z: [key3],
};

console.log(obj.y);

"use strict";

let test1 = true;
let test2 = true;

if (test1 && test2) {
  console.log("+++");
} else {
  console.log("---");
}

if (test1 && !test2) {
  console.log("+++");
} else {
  console.log("---");
}

if (!test1 && !test2) {
  console.log("+++");
} else {
  console.log("---");
}

if (test1 && test2) {
  console.log("+++");
} else {
  console.log("---");
}

let test3 = true;

if (test1 && test2 && test3) {
  console.log("+++");
} else {
  console.log("---");
}

if (test1 || (test2 && test3)) {
  console.log("+++");
} else {
  console.log("---");
}

if (test1 || (!test2 && !test3)) {
  console.log("+++");
} else {
  console.log("---");
}

"use strict";

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

let string = 'abcde';
alert(`${string[0]}\n${string[2]}\n${string[4]}`);
let gnirts = string[4] + string[3] + string[2] + string[1] + string[0];
alert(gnirts);
let num = randomIntFromInterval(0, 4);
alert(`string[${num}] = ${string[num]}`);
/*
А это тоже комментарий
но на несколько строк
короче
*/
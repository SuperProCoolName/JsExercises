"use strict";

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  

let a = -100;
let b = getRandomIntInclusive(-100, 100)
alert(`a = ${a}`); // Тут комментарий короче
alert(`negative b = ${b * -1}`);
/*
А это тоже комментарий
но на несколько строк
короче
*/
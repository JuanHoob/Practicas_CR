"use strict";

const num1 = 1;
const num2 = 10;
const numeroAleatorio = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
console.log(
  "y el numero ganador entre el" +
    " " +
    num1 +
    " " +
    "y el" +
    " " +
    num2 +
    " " +
    "es:" +
    " " +
    numeroAleatorio
);

"use strict";

const numeroDivisorio = 2;
let num = prompt("dame un número");

if (num % numeroDivisorio === 0) {
  console.log(`el número ${num} es par`);
} else {
  console.log(`el número ${num} es impar`);
}

"use strict";

const edadMinima = 18;
const edadMáxima = 65;
const pesoMinimo = 50;
const enfermedadCronica = false;

const edad = 39;
const peso = 70;
const enfermedad = false;

if (
  !enfermedad &&
  edadMinima < edad &&
  edad < edadMáxima &&
  peso > pesoMinimo
) {
  console.log("Esta persona es apta para donar sangre");
} else {
  console.log("Esta persona no es apta para donar sangre");
}

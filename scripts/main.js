const num = document.getElementsByName("num");
const res = document.getElementById("resultado");
const limpiar = document.getElementById("limpiar");
const borrar = document.getElementById("borrar");
const form = document.getElementById("calc");
const input = document.getElementById("inputTexto");
let numeros = [];

num.forEach(function (button) {
   button.addEventListener("click", function (e) {
      e.preventDefault();
      input.value += button.innerHTML;
      numeros.push(button.innerHTML);
   });
});

res.addEventListener("click", function (e) {
   e.preventDefault();
   input.value = eval(input.value);
});

limpiar.addEventListener("click", function (e) {
   e.preventDefault();
   input.value = "";
   numeros = [];
});

borrar.addEventListener("click", function (e) {
   e.preventDefault();
   input.value = "";
   numeros.pop();

   numeros.forEach(function (element) {
      input.value += element;
   });
});

import { theme_one } from "./theme-one.js";
import { theme_three } from "./theme-three.js";
import { theme_two } from "./theme-two.js";

const option_one = document.getElementById("option1");
const option_two = document.getElementById("option2");
const option_three = document.getElementById("option3");

option_one.addEventListener("focusin", theme_one);
option_two.addEventListener("focusin", theme_two);
option_three.addEventListener("focusin", theme_three);

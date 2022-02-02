import { imports } from "./imports.js";

let elements = imports();

export function theme_two() {
   elements.body.style.backgroundColor = "hsl(0, 0%, 90%)";
   elements.html.style.backgroundColor = "hsl(0, 0%, 90%)";
   elements.contenedor.style.backgroundColor = "hsl(0, 0%, 90%)";
   elements.input.style.backgroundColor = "hsl(0, 0%, 93%)";
   elements.contenido.style.backgroundColor = "hsl(0, 5%, 81%)";
   elements.texto.forEach((e) => {
      e.style.color = "hsl(60, 10%, 19%)";
   });
   elements.botones.forEach((e) => {
      e.style.backgroundColor = "hsl(45, 7%, 89%)";
      e.style.color = "black";
      e.style.borderBottom = "3px solid hsl(35, 11%, 61%)";
   });
   elements.botonesDel.forEach((e) => {
      e.style.backgroundColor = "hsl(185, 42%, 37%)";
      e.style.borderBottom = "3px solid hsl(185, 58%, 25%)";
      e.style.color = "white";
   });
   elements.resultado.style.backgroundColor = "hsl(25, 98%, 40%)";
   elements.resultado.style.color = "white";
   elements.resultado.style.borderBottom = "3px solid hsl(25, 99%, 27%)";
}

import { imports } from "./imports.js";

let elements = imports();

export function theme_one() {
   elements.body.style.backgroundColor = "hsl(222, 26%, 31%)";
   elements.html.style.backgroundColor = "hsl(222, 26%, 31%)";
   elements.contenedor.style.backgroundColor = "hsl(222, 26%, 31%)";
   elements.input.style.backgroundColor = "hsl(224, 36%, 15%)";
   elements.contenido.style.backgroundColor = "hsl(223, 31%, 20%)";
   elements.texto.forEach((e) => {
      e.style.color = "white";
   });
   elements.botones.forEach((e) => {
      e.style.backgroundColor = "hsl(30, 25%, 89%)";
      e.style.color = "black";
      e.style.borderBottom = "3px solid hsl(28, 16%, 65%)";
   });
   elements.botonesDel.forEach((e) => {
      e.style.backgroundColor = "hsl(225, 21%, 49%)";
      e.style.borderBottom = "3px solid hsl(224, 28%, 35%)";
      e.style.color = "white";
   });
   elements.resultado.style.backgroundColor = "hsl(6, 63%, 50%)";
   elements.resultado.style.color = "white";
   elements.resultado.style.borderBottom = "3px solid hsl(6, 70%, 34%)";
}

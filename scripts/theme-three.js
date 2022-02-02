import { imports } from "./imports.js";

let elements = imports();

export function theme_three() {
   elements.body.style.backgroundColor = "hsl(268, 75%, 9%)";
   elements.html.style.backgroundColor = "hsl(268, 75%, 9%)";
   elements.contenedor.style.backgroundColor = "hsl(268, 75%, 9%)";
   elements.input.style.backgroundColor = "hsl(268, 71%, 12%)";
   elements.contenido.style.backgroundColor = "hsl(268, 71%, 12%)";
   elements.texto.forEach((e) => {
      e.style.color = "hsl(52, 100%, 62%)";
   });
   elements.botones.forEach((e) => {
      e.style.backgroundColor = "hsl(268, 47%, 21%)";
      e.style.color = "hsl(52, 100%, 62%)";
      e.style.borderBottom = "3px solid hsl(290, 70%, 36%)";
   });
   elements.botonesDel.forEach((e) => {
      e.style.backgroundColor = "hsl(281, 89%, 26%)";
      e.style.borderBottom = "3px solid hsl(285, 91%, 52%)";
      e.style.color = "white";
   });
   elements.resultado.style.backgroundColor = "hsl(176, 100%, 44%)";
   elements.resultado.style.color = "hsl(198, 20%, 13%)";
   elements.resultado.style.borderBottom = "3px solid hsl(177, 92%, 70%)";
}

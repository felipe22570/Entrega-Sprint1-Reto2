export function imports() {
   const html = document.querySelector("html");
   const body = document.querySelector("body");
   const contenedor = document.getElementById("contenedor");
   const input = document.getElementById("inputTexto");
   const contenido = document.getElementById("contenido");
   const botones = document.querySelectorAll(".boton");
   const botonesDel = document.querySelectorAll(".botonDel");
   const resultado = document.getElementById("resultado");
   const texto = document.querySelectorAll(".texto");

   const importaciones = {
      html,
      body,
      contenedor,
      input,
      contenido,
      botones,
      botonesDel,
      resultado,
      texto,
   };

   return importaciones;
}

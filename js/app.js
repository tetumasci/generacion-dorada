// app.js: interacciones básicas del sitio.
// Se carga con defer en todas las páginas, así que el HTML ya existe cuando corre.

// 1) Botones "Ver detalle" (Historia y Jugadores): muestran u ocultan un texto (evento click).
// Cada botón apunta a su texto con aria-controls, que tiene el id del elemento a mostrar.
const botones = document.querySelectorAll(".boton-detalle");

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        const detalle = document.querySelector(`#${boton.getAttribute("aria-controls")}`);

        detalle.hidden = !detalle.hidden;
        boton.setAttribute("aria-expanded", !detalle.hidden);
        boton.textContent = detalle.hidden ? "Ver detalle" : "Ocultar detalle";
    });
});

// 2) Jugadores: buscador por nombre o apodo (evento input).
// Solo existe en jugadores.html, por eso se revisa que el buscador esté en la página.
const buscador = document.querySelector("#buscador");

if (buscador) {
    const tarjetas = document.querySelectorAll(".tarjeta-jugador");
    const resultado = document.querySelector("#resultado-busqueda");

    buscador.addEventListener("input", () => {
        const busqueda = buscador.value.trim().toLowerCase();
        let visibles = 0;

        tarjetas.forEach((tarjeta) => {
            const nombre = tarjeta.querySelector("h3").textContent.toLowerCase();

            if (nombre.includes(busqueda)) {
                tarjeta.hidden = false;
                visibles++;
            } else {
                tarjeta.hidden = true;
            }
        });

        resultado.textContent = `Mostrando ${visibles} de ${tarjetas.length} jugadores.`;
    });
}

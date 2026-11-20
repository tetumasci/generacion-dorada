const botones = document.querySelectorAll(".boton-detalle");

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        const detalle = document.querySelector(`#${boton.getAttribute("aria-controls")}`);

        detalle.hidden = !detalle.hidden;
        boton.setAttribute("aria-expanded", !detalle.hidden);
        boton.textContent = detalle.hidden ? "Ver detalle" : "Ocultar detalle";
    });
});

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

"use strict";

function mostrarRespaldoImagen(imagen) {
  imagen.hidden = true;

  const respaldo = imagen.nextElementSibling;
  if (respaldo?.classList.contains("imagen-pendiente")) {
    respaldo.hidden = false;
  }
}

document.querySelectorAll(".recuadro-detalle img").forEach((imagen) => {
  imagen.addEventListener("error", () => mostrarRespaldoImagen(imagen), { once: true });

  if (imagen.complete && imagen.naturalWidth === 0) {
    mostrarRespaldoImagen(imagen);
  }
});

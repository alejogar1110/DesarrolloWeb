const boton = document.getElementById("boton_1");
const botonOcultar = document.getElementById("boton_2");
const tablaContainer = document.getElementById("contenedor");

boton.addEventListener("click", () => {
    if (tablaContainer.style.display === "none") {
        tablaContainer.style.display = "block";
        boton.disabled = true;
    } else {
        tablaContainer.style.display = "none";
    }
});
botonOcultar.addEventListener("click",() => {
    if (tablaContainer.style.display === "block"){
        tablaContainer.style.display = "none";
        boton.disabled = false;
    } else {
        tablaContainer.style.display = "block";
    }
})
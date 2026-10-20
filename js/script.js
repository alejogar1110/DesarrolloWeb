const boton = document.getElementById("boton_1");
const botonOcultar = document.getElementById("boton_2");
const tablaContainer = document.getElementById("contenedor");

boton.addEventListener("click", () => {
    if (tablaContainer.style.display === "none") {
        tablaContainer.style.display = "block";
    } else {
        tablaContainer.style.display = "none";
    }
});
botonOcultar.addEventListener("click",() => {
    if (tablaContainer.style.display === "block"){
        tablaContainer.style.display = "none";
    } else {
        tablaContainer.style.display = "block";
    }
})
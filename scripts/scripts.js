// Cambiar palabra y link al hacer scroll

window.onscroll = function () {
    scrollCotizar();
};

function scrollCotizar() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("p_botonIngresar").innerHTML = "Cotiza aquí";
        document.getElementById("botonIngresar").href="#contacto";
    }
}


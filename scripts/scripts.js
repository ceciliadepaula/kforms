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


// Ventana de confirmación al hacer click en enviar en formulario Habilitación

/* document.getElementById("enviarHabilitac").addEventListener("click", clickEnviar);

let inputEmail = document.getElementById("inputEmail").value
let cantUsuarios = document.getElementById("cantUsuarios").value
let archivo = document.getElementById("inputGroupFile02").value


function clickEnviar(){
    if (inputEmail != "" && cantUsuarios != "Cantidad de usuarios" && archivo != ""){
        console.log("salta ventana");

        document.getElementById("contToast").innerHTML = `
       
        `;

    } else {
        console.log("no salta ventana");        
    }
}
 */

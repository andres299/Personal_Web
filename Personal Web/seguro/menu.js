//Menu mobil
document.addEventListener("DOMContentLoaded", function () {
    var mobileMenuButton = document.getElementById("mobile-menu-button");
    var mobileMenu = document.getElementById("mobile-menu");

    mobileMenuButton.addEventListener("click", function () {
        if (mobileMenu.style.display === "block") {
            mobileMenu.style.display = "none";
        } else {
            mobileMenu.style.display = "block";
        }
    });
});

//Validar si los campos hay informacion.
document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("miContacto");

    formulario.addEventListener("submit", function(event) {
        if (!validarFormulario()) {
            event.preventDefault();
        }else {
            mostrarMensajeExito();
        }
    });

    function validarFormulario() {
        const emailTelefono = document.getElementById("emailTelefono");
        const mensaje = document.getElementById("mensaje");
        const terminos = document.querySelector('input[name="opcio"]');

        if (!emailTelefono.value || !mensaje.value || !terminos.checked) {
            alert("Por favor, complete todos los campos obligatorios.");
            return false;
        }

        return true; 
    }

    function mostrarMensajeExito() {
        const mensajeExito = document.getElementById("mensajeExito");
        mensajeExito.textContent = "¡La información se ha enviado con éxito!";
    }
});

//Desplegar los botones(curriculum).
function toggleInfo(infoId) {
    var infoElement = document.getElementById(infoId);
    if (infoElement.style.display === 'none' || infoElement.style.display === '') {
        infoElement.style.display = 'block';
    } else {
        infoElement.style.display = 'none';
    }
}








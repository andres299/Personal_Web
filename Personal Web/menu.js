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

//Validar si los campos hay informacion.document.getElementById("miContacto").addEventListener("submit", function (event) {
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("miContacto");
    const emailTelefonoInput = document.getElementById("email");

    form.addEventListener("submit", function (event) {
        if (!validarEmailTelefono(emailTelefonoInput.value)) {
            event.preventDefault(); // Evita el envío del formulario si no es válido
            alert("Por favor, ingresa un correo electrónico válido.");
        }
    });

    function validarEmailTelefono(valor) {
        // Utilizamos una expresión regular para validar un correo electrónico o número de teléfono
        const regexEmailTelefono = /^[\w\.-]+@[\w\.-]+\.\w+|^\d{10}$/;

        return regexEmailTelefono.test(valor);
    }
});  
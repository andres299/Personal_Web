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


//Validar si en los campos hay informacion , formulario de contacto.
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("miContacto");
    const emailTelefonoInput = document.getElementById("email");
    const errorElement = document.querySelector(".error");

    form.addEventListener("submit", function (event) {
        if (!validarEmailTelefono(emailTelefonoInput.value)) {
            event.preventDefault();
            errorElement.textContent = "Por favor, ingresa un correo electrónico válido (por ejemplo: ejemplo@dominio.com)";
        } else {
            errorElement.textContent = "";
        }
    });

    function validarEmailTelefono(valor) {
        const regexEmailTelefono = /^[\w\.-]+@[\w\.-]+\.\w+|^\d{10}$/;
        return regexEmailTelefono.test(valor);
    }
});

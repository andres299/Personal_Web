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
document.getElementById("miContacto").addEventListener("submit", function (event) {
    var emailTelefono = document.getElementById("#emailTelefono").value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(emailTelefono)) {
        alert("Por favor, ingrese una dirección de correo electrónico válida.");
        event.preventDefault(); // Evita el envío del formulario si la validación falla.
    }
});    
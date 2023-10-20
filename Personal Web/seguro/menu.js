document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("mobile-menu-button").addEventListener("click", function() {
        var mobileMenu = document.getElementById("mobile-menu");
        if (mobileMenu.style.display === "block") {
            mobileMenu.style.display = "none";
        } else {
            mobileMenu.style.display = "block";
        }
    });
});

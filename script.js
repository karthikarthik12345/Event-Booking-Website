document.addEventListener("DOMContentLoaded", function () {
    const navToggler = document.querySelector(".navbar-toggler");
    const navMenu = document.querySelector("#navbarNav");

    navToggler.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const menuItems = document.querySelector(".menu-items");

    hamburgerMenu.addEventListener("click", function () {
        menuItems.classList.toggle("show-menu");
    });
});

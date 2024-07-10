/* JavaScript for responsive navbar */
let openMenu = document.querySelector('#openMenu');
let closeMenu = document.querySelector('#closeMenu');
let navbarItem = document.querySelector('#navbar');

const hamburgerEvent = (navigation, close, open) => {
    navbarItem.style.display = navigation;
    closeMenu.style.display = close;
    openMenu.style.display = open;
};

openMenu.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeMenu.addEventListener('click', () => hamburgerEvent("none", "none", "flex"));

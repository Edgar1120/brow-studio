const header = document.getElementById("header");
const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");


// HEADER AL HACER SCROLL

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// MENÚ MÓVIL

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

    const icon = menuButton.querySelector("i");

    if (nav.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// CERRAR MENÚ AL SELECCIONAR OPCIÓN

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// FAQ

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(otherItem => {

            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});


// AÑO AUTOMÁTICO

document.getElementById("year").textContent =
    new Date().getFullYear();
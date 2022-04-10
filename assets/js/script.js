//Menu responsive
const navToggle = document.querySelector(".navToggleMenu");
const navMenu = document.querySelector(".navMenu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("navMenu_visible");

    if (navMenu.classList.contains("navMenu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("imgSlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // ajuste del tiempo de cambio (actual: 2s)
}
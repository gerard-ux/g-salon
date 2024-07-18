// Menu Icon // 

let menu = document.querySelector(".menu-icon")
let navbar = document.querySelector(".navbar")

menu.onclick = () => {
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
}

// Auto Play // 

var swiper = new Swiper(".services-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

let header = document.querySelector("header")

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);

});

// Loader // 

onload = () => {
    const load = document.getElementById("loader");

    setTimeout (() => {
      load.style.display = "none";
    }, 2500);
};
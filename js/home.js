const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Scroll to the top of the document when button is clicked
    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 1,
            behavior: "smooth" // Optional smooth scrolling animation
        });
    });
});

import { Tablist } from "https://cdn.jsdelivr.net/npm/jolty@0.6.2/dist/jolty.esm.min.js";
Tablist.initAll();


if(document.getElementById("initiative")) {
    document.getElementById("initiative").addEventListener("click", function() {
        window.location = "initiatives.html"
    });
};

if(document.getElementById("2022-blog")) {
    document.getElementById("2022-blog").addEventListener("click", function() {
        window.location = "2022blog.html"
    });
};

if(document.getElementById("2023-blog")) {
    document.getElementById("2023-blog").addEventListener("click", function() {
        window.location = "2023blog.html"
    });
};
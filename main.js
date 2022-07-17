"use strict";

const menu = document.querySelector(".nav_menu");
const link = document.querySelector(".nav_link");
const btn = document.querySelector(".menuBtn")

btn.addEventListener("click", () => {
    menu.classList.toggle("active");
    link.classList.toggle("active");
})
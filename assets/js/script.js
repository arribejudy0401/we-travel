"use strict";

const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");

// functions
const hideShow = function () {
  hamburgerMenu.classList.toggle("hidden");
};

hamburgerIcon.addEventListener("click", hideShow);

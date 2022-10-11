const navToggle = document.querySelector(".nav_toggle");
const navLinks = document.getElementById("nav_links");

navToggle.addEventListener("click", function () {
  navLinks.classList.toggle("show-nav_links");
});
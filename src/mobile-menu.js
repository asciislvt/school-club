const menuElement = document.getElementById("mobile-menu");
const menuToggle = menuElement.querySelector("button");
const menuNav = menuElement.querySelector("nav");

menuToggle.addEventListener("click", () => {
  menuNav.classList.toggle("hidden");
});

// main.js - Handles footer dates and responsive navigation

document.addEventListener("DOMContentLoaded", () => {
  // Set the current year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Set the last modified date
  const lastModifiedSpan = document.getElementById("lastModified");
  if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
  }

  // Toggle mobile menu
  const menuButton = document.getElementById("menu-button");
  const nav = document.querySelector("nav ul");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
});

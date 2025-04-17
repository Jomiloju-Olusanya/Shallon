const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("show");
});

// Dropdown toggles
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      const dropdownMenu = toggle.nextElementSibling;

      if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
        toggle.querySelector(".dropdown-icon").textContent = "+";
      } else {
        dropdownMenu.style.display = "block";
        toggle.querySelector(".dropdown-icon").textContent = "–";
    }
  });
});


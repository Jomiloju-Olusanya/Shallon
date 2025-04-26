document.getElementById('sidebarToggle').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open');
  });

const toggleBtn = document.getElementById('toggleBalance');
const balance = document.getElementById('walletBalance');

let isHidden = false;
const actualBalance = '₦10,500'; // You can dynamically fetch this in future

toggleBtn.addEventListener('click', () => {
  isHidden = !isHidden;
  balance.textContent = isHidden ? '•••••••' : actualBalance;
  toggleBtn.innerHTML = isHidden 
    ? '<i class="fas fa-eye-slash"></i>' 
    : '<i class="fas fa-eye"></i>';
});

// Tabs switching
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(content => content.style.display = "none");

    button.classList.add("active");
    document.getElementById(button.dataset.tab).style.display = "block";
  });
});

// Edit Profile Info
const editBtn = document.querySelector(".edit-btn");
const saveBtn = document.querySelector(".save-btn");
const inputs = document.querySelectorAll("#profile input");

editBtn.addEventListener("click", () => {
  inputs.forEach(input => input.disabled = false);
  editBtn.style.display = "none";
  saveBtn.style.display = "inline-block";
});
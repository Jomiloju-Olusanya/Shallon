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

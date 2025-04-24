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

const toggleBtn = document.getElementById('toggleBalance');
const walletBalance = document.getElementById('walletBalance');
  let isVisible = false;
  const actualBalance = '&#8358;10,500';

  toggleBtn.addEventListener('click', () => {
    isVisible = !isVisible;
    
    if (isVisible) {
      walletBalance.innerHTML = actualBalance;
      walletBalance.classList.remove('hidden-balance');
      walletBalance.classList.add('visible-balance');
      toggleBtn.textContent = '👁️'; // eye open
    } else {
      walletBalance.innerHTML = '&#8358;****';
      walletBalance.classList.remove('visible-balance');
      walletBalance.classList.add('hidden-balance');
      toggleBtn.textContent = '🙈'; // eye off
    }
  });
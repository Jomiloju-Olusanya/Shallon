// Dummy PIN for now
const correctPIN = "1234";

// Modal elements
const pinModal = document.getElementById('pinModal');
const confirmPinBtn = document.getElementById('confirmPin');
const cancelPinBtn = document.getElementById('cancelPin');
const serviceBtn = document.getElementById('payTvBtn'); // Change this per page

// Open modal on button click
serviceBtn.addEventListener('click', function(event) {
  event.preventDefault();
  openPinModal();
});

// Functions
function openPinModal() {
  pinModal.style.display = 'block';
}

function closePinModal() {
  pinModal.style.display = 'none';
}

// Confirm PIN
confirmPinBtn.addEventListener('click', function() {
  const enteredPin = document.getElementById('transactionPin').value;
  if (enteredPin === correctPIN) {
    alert('Transaction Successful! 🎉');
    closePinModal();
    // Optionally redirect
    // window.location.href = "success.html";
  } else {
    alert('Incorrect PIN! ❌ Please try again.');
  }
});

// Cancel PIN
cancelPinBtn.addEventListener('click', function() {
  closePinModal();
});

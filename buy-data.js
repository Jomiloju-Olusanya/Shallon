// Dummy PIN for testing
const correctPIN = "1234";

// Get modal elements
const pinModal = document.getElementById('pinModal');
const confirmPinBtn = document.getElementById('confirmPin');
const cancelPinBtn = document.getElementById('cancelPin');
const buyDataBtn = document.getElementById('buyDataBtn');

// Open modal on Buy Data click
buyDataBtn.addEventListener('click', function() {
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
    alert('Data Purchase Successful! 🎉');
    closePinModal();
    // Here, you can redirect or show a proper success page
    // window.location.href = "success.html";
  } else {
    alert('Incorrect PIN! ❌ Please try again.');
  }
});

// Cancel PIN
cancelPinBtn.addEventListener('click', function() {
  closePinModal();
});


confirmPinBtn.addEventListener('click', function() {
    const enteredPin = document.getElementById('transactionPin').value;
    if (enteredPin === correctPIN) {
      closePinModal();
      setTimeout(() => {
        window.location.href = "success.html";
      }, 500); // Smooth little delay
    } else {
      alert('Incorrect PIN! ❌ Please try again.');
    }
  });  
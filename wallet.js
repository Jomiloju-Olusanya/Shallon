document.getElementById('fundWalletForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const amount = document.getElementById('amount').value;
    const method = document.getElementById('paymentMethod').value;
    
    if (amount && method) {
      alert(`Proceeding to fund ₦${amount} via ${method}`);
      // Redirect or trigger payment here
    }
  });
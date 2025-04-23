document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Optional: validate input
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;

    if (email && password) {
      // Simulate successful login
      window.location.href = "dashboard.html";
    } else {
      alert("Please fill in all fields.");
    }
  });
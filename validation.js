function validateForm() {
  let isValid = true;

  // Clear previous error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("confirmPasswordError").textContent = "";

  // Name Validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Email Validation
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    isValid = false;
  }

  // Password Validation
  const password = document.getElementById("password").value.trim();
  if (password === "") {
    document.getElementById("passwordError").textContent =
      "Password is required.";
    isValid = false;
  }

  // Confirm Password Validation
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();
  if (confirmPassword === "") {
    document.getElementById("confirmPasswordError").textContent =
      "Please confirm your password.";
    isValid = false;
  } else if (confirmPassword !== password) {
    document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match.";
    isValid = false;
  }

  return isValid;
}

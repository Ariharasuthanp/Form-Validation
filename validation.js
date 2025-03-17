document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    let name = document.getElementById("name");
    let nameError = name.nextElementSibling;
    if (name.value.trim() === "") {
      nameError.textContent = "Name is required";
      isValid = false;
    } else {
      nameError.textContent = "";
    }

    let email = document.getElementById("email");
    let emailError = email.nextElementSibling;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      emailError.textContent = "Enter a valid email";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    let password = document.getElementById("password");
    let passwordError = password.nextElementSibling;
    if (password.value.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters";
      isValid = false;
    } else {
      passwordError.textContent = "";
    }

    let confirmPassword = document.getElementById("confirmPassword");
    let confirmPasswordError = confirmPassword.nextElementSibling;
    if (confirmPassword.value !== password.value) {
      confirmPasswordError.textContent = "Passwords do not match";
      isValid = false;
    } else {
      confirmPasswordError.textContent = "";
    }

    if (isValid) {
      alert("Form submitted successfully!");
      this.reset();
    }
  });

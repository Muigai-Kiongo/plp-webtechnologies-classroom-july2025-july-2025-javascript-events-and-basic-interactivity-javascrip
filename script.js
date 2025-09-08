// ------------------------------
// Part 1: Event Handling Example
// ------------------------------
const messageBtn = document.getElementById("messageBtn");
const message = document.getElementById("message");

messageBtn.addEventListener("click", () => {
  message.textContent = "🎉 You clicked the button!";
});

// ------------------------------
// Part 2: Interactive Elements
// ------------------------------

// Light/Dark mode toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter game
let count = 0;
const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");

incrementBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});

// ------------------------------
// Part 3: Form Validation
// ------------------------------
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

// Regex for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop form from refreshing the page
  let isValid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Enter a valid email.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // Final feedback
  if (isValid) {
    formSuccess.textContent = "✅ Form submitted successfully!";
    form.reset();
  } else {
    formSuccess.textContent = "";
  }
});

// ===== Event Handling: Say Hello Button =====
const btn = document.getElementById("helloBtn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
  message.textContent = "👋 Hello, you clicked the button!";
});

// ===== Dark Mode Toggle =====
const toggleBtn = document.getElementById("modeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ===== Counter =====
let count = 0;
const countSpan = document.getElementById("count");
const incBtn = document.getElementById("increase");
const decBtn = document.getElementById("decrease");

incBtn.addEventListener("click", () => {
  count++;
  countSpan.textContent = count;
});

decBtn.addEventListener("click", () => {
  count--;
  countSpan.textContent = count;
});

// ===== Form Validation =====
const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passError = document.getElementById("passError");
  const formMessage = document.getElementById("formMessage");

  let isValid = true;

  // Name validation
  if (name.length < 3) {
    nameError.textContent = "❌ Name must be at least 3 characters";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "❌ Enter a valid email";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  if (password.length < 6) {
    passError.textContent = "❌ Password must be at least 6 characters";
    isValid = false;
  } else {
    passError.textContent = "";
  }

  if (isValid) {
    formMessage.textContent = "✅ Form submitted successfully!";
    formMessage.style.color = "green";
  } else {
    formMessage.textContent = "⚠️ Please fix the errors above";
    formMessage.style.color = "red";
  }
});

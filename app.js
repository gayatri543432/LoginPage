// Tab switch
function switchTab(tab) {
  document.getElementById('loginForm').classList.remove('active');
  document.getElementById('signupForm').classList.remove('active');
  document.getElementById('loginTab').classList.remove('active');
  document.getElementById('signupTab').classList.remove('active');

  if (tab === 'login') {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('loginTab').classList.add('active');
  } else {
    document.getElementById('signupForm').classList.add('active');
    document.getElementById('signupTab').classList.add('active');
  }
}


// // Regex Definitions
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobnoRegex = /^\d{10}$/;

// Live Validation on Input


function validateLogin(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const error = document.getElementById('loginError');
  error.textContent = '';

  

  if (!emailRegex.test(email)) {
    error.textContent = 'Enter a valid email address.';
    return false;
  }
 
  if (!passwordRegex.test(password)) {
    error.textContent = "Invalid password.";
    return false;
  }
  
  
  window.open("newPage.html","_blank")
  // alert('Login Successful!');
  
}

function validateSignup(event) {
  event.preventDefault();
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const mobile = document.getElementById('signupMobile').value;
  const password = document.getElementById('signupPassword').value;
  const confirmPasswdord = document.getElementById('signupConfirmPassword').value;
  const error = document.getElementById('signupError');
  error.textContent = '';


  if (name.length < 2) {
    error.textContent = 'Enter your full name.';
    return false;
  }
  if (!emailRegex.test(email)) {
    error.textContent = 'Enter a valid email address.';
    return false;
  }
  if (!mobnoRegex.test(mobile)) {
    error.textContent = 'Mobile number must be exactly 10 digits.';
    return false;
  }
  if (!passwordRegex.test(password)) {
    error.textContent =
      'Password must be at least 8 characters, include uppercase, lowercase, number, and special character.';
    return false;
  }
  if (password !== confirmPasswdord) {
    error.textContent = 'Passwords do not match.';
    return false;
  }
  window.open("newPage.html","_blank")

  // alert('Signup Successful!');

}

// Password toggle visibility
function togglePassword(id) {
  const passwordField = document.getElementById(id);
  const icon = passwordField.nextElementSibling;
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  } else {
    passwordField.type = 'password';
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  }

}

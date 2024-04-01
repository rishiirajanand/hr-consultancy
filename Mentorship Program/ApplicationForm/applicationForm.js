let name = document.getElementById("name");
let surname = document.getElementById("surname");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let button = document.getElementById("btn");
let nameError = document.getElementById("nameError");
let surnameError = document.getElementById("surnameError");
let emailError = document.getElementById("emailError");
let phoneError = document.getElementById("phoneError");
let successMsg = document.getElementById("successMsg");

function validation(e) {
  e.preventDefault();

  let regex = /^[0-9]{10}$/;
  let nameValue = name.value.trim();
  let surnameValue = surname.value.trim();
  let emailValue = email.value.trim();
  let phoneValue = phone.value.trim();

  let isValid = true;

  if (nameValue.length < 3) {
    nameError.innerHTML = "Name should be at least 3 characters";
    setTimeout(() => {
      nameError.innerHTML = " ";
    }, 4000);
    isValid = false;
  } else {
    nameError.innerHTML = "";
  }

  if (surnameValue.length < 3) {
    surnameError.innerHTML = "Surname should be at least 3 characters";
    setTimeout(() => {
      surnameError.innerHTML = " ";
    }, 4000);
    isValid = false;
  } else {
    surnameError.innerHTML = "";
  }

  if (!emailValue.includes("@")) {
    emailError.innerHTML = "Invalid E-mail";
    setTimeout(() => {
      emailError.innerHTML = " ";
    }, 4000);
    isValid = false;
  } else {
    emailError.innerHTML = "";
  }

  if (!regex.test(phoneValue)) {
    phoneError.innerHTML = "Invalid phone number";
    setTimeout(() => {
      phoneError.innerHTML = " ";
    }, 4000);
    isValid = false;
  } else {
    phoneError.innerHTML = "";
  }

  if (isValid) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "disabled");
  }
}

name.addEventListener("input", validation);
surname.addEventListener("input", validation);
email.addEventListener("input", validation);
phone.addEventListener("input", validation);

function redirectToHomePage() {
  setTimeout(() => {
    window.location.href = "/index.html";
  }, 5000);
}

function success() {
  successMsg.innerHTML =
    "Your application has been submitted successfully!!. After 5 sec you will redirected to the Home Page.";
}

button.addEventListener("click", validation);
button.addEventListener("click", success);

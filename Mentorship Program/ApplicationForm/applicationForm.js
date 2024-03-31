let name = document.getElementById("name");
let surname = document.getElementById("surname");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let button = document.getElementById("btn");
let error = document.getElementById("errorMsg");

function validation(e) {
  e.preventDefault();

  let nameValue = name.value;
  let surnameValue = surname.value;
  let emailValue = email.value;
  let phoneValue = phone.value;

  let isValid = true;

  if (nameValue.length < 3) {
    error.innerHTML = "Invalid name or name should be at least 3 characters";
    setTimeout(() => {
      error.innerHTML = " ";
    }, 4000);
    isValid = false;
  }
  if (surnameValue.length < 3) {
    error.innerHTML =
      "Invalid surname or surname should be at least 3 characters";
    setTimeout(() => {
      error.innerHTML = " ";
    }, 4000);
    isValid = false;
  }

  if (!emailValue.includes("@")) {
    error.innerHTML = "Invalid email";
    setTimeout(() => {
      error.innerHTML = " ";
    }, 4000);
    isValid = false;
  }

  if (phoneValue.length !== 10 || isNaN(phoneValue)) {
    error.innerHTML = "Invalid phone number";
    setTimeout(() => {
      error.innerHTML = " ";
    }, 4000);
    isValid = false;
  }
}

button.addEventListener("click", validation);

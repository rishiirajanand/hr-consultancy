// Navbar
function setActive(element) {
    let lis = document.querySelectorAll(".nav-content ul li");
    lis.forEach(function (li) {
      li.classList.remove("active");
    });
    element.parentElement.classList.add("active");
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    let homeLink = document.querySelector(".nav-content ul li.active");
    if (!homeLink) {
      let defaultActiveLink = document.querySelector(
        ".nav-content ul li:first-child"
      );
      defaultActiveLink.classList.add("active");
    }
  });
  
  function toggleDropdown(element, isHovering) {
    const dropdownContent = element.querySelector(".dropdown-content");
    dropdownContent.style.display = isHovering ? "flex" : "none";
  }

  //Navbar2
/*function toggleContent() {
  var container = document.getElementsByClassName("container");
  if(container.classList.contains("hidden")) {
    container.classList.remove("hidden");
  }
  else {
    container.classList.add("hidden");
  }
}*/
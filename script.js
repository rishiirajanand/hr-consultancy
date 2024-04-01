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

// Hero Carousel
let slideIndex = 1; // Start from 1 to skip the cloned first image
const slides = document.querySelectorAll(".carousel-slide img");
const totalSlides = slides.length;
const slideWidth = slides[0].clientWidth; // Get the width of a single slide
const carouselSlide = document.querySelector(".carousel-slide");

carouselSlide.style.transform = `translateX(${-slideIndex * slideWidth}px)`; // Initial positioning

function showSlide(index) {
  const offset = -index * slideWidth;
  carouselSlide.style.transition = "transform 0.5s ease"; // Add transition
  carouselSlide.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
  if (slideIndex >= totalSlides - 1) {
    slideIndex = 0;
    setTimeout(() => {
      carouselSlide.style.transition = "none"; // Remove transition to instantly jump back to the first slide
      carouselSlide.style.transform = `translateX(${
        -slideIndex * slideWidth
      }px)`;
    }, 500); // Wait for the transition to complete before resetting
  } else {
    slideIndex++;
    showSlide(slideIndex);
  }
}

function prevSlide() {
  if (slideIndex <= 0) {
    slideIndex = totalSlides - 1;
    setTimeout(() => {
      carouselSlide.style.transition = "none"; // Remove transition to instantly jump back to the last slide
      carouselSlide.style.transform = `translateX(${
        -slideIndex * slideWidth
      }px)`;
    }, 500); // Wait for the transition to complete before resetting
  } else {
    slideIndex--;
    showSlide(slideIndex);
  }
}

// Automatically change slide every 4 seconds
setInterval(nextSlide, 4000);

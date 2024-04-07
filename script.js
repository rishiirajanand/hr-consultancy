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
let list = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let dots = document.querySelectorAll(".slider .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function () {
  if (active + 1 > lengthItems) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloadSlider();
};
prev.onclick = function () {
  if (active - 1 < 0) {
    active = lengthItems;
  } else {
    active = active - 1;
  }
  reloadSlider();
};
let refreshSlider = setInterval(() => {
  next.click();
}, 4000);
function reloadSlider() {
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + "px";

  let lastActiveDot = document.querySelector(".slider .dots li.active");
  lastActiveDot.classList.remove("active");
  dots[active].classList.add("active");
}

dots.forEach((li, key) => {
  li.addEventListener("click", function () {
    active = key;
    reloadSlider();
  });
});

// Cards
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    cards.forEach((otherCard) => {
      if (otherCard !== card) {
        otherCard.style.opacity = "0.5";
      }
    });
  });

  card.addEventListener("mouseout", () => {
    cards.forEach((otherCard) => {
      if (otherCard !== card) {
        otherCard.style.opacity = "1";
      }
    });
  });
});

// Video
function playVideo() {
  var playButton = document.querySelector(".play-btn");
  var thumbnail = document.querySelector(".video-thumbnail");
  var video = document.getElementById("youtube-video");

  playButton.style.display = "none";
  thumbnail.style.display = "none";
  video.style.display = "block";
  video.src += "&autoplay=1";
}

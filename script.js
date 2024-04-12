// Random Testimonials
const paragraphs = [
  {
    text: "“Aspire HR Consultants (Aspire HRC) has created a new human resources era by providing its innovative services and creative tailored HR packages and plans taking into consideration each and every company’s expectations, requirements, size and aspirations. It has been a pleasure working closely with Aspire HRC and it will be a fulfilling and rewarding experience. I do recommend Aspire HRC locally and regionally. Aspire HRC’s work dedication and professional commitment is impressive. Its wide-broad network will always ensure quality and will always help sourcing the best talent for each available position. Its mission revolves around the concept of “the right candidate to the right position.”",
    writer:
      "Dr Hani Sarie-Eldin, Managing <br/> Partner, Sarie-Eldin & Partners",
  },
  {
    text: "“Aspire HRC Consulting Team brings you international best practices with strong business and pragmatic local knowledge, that help any organization or company to introduce innovative approach to its Human Resources Programs. The team offers substantial strategic value that is critical for growth and organization development.”",
    writer: "Dalia Wahba, Managing Partner,<br/> CID Consulting",
  },
  {
    text: "“Aspire is by far one of the most able, and professional organizations currently operating in the field of HR consultancy and Executive Search in Egypt. We have hired several middle management professionals with Aspire’s assistance. Their robust candidate database and extensive network helped us attract the best talent. They put inconsiderable effort in understanding our requirements and providing the best fit for the position promptly—even the most challenging ones. They are our one of the best search partners we have really recruited quality professionals through them. As for HR consultancy, Aspire takes your ideas, needs and imaginations and springs them to life. Their HR consultants are very well trained and professional in their approach. I consider it a pleasure to have worked with Aspire in relation to our recruitment needs and HR projects and regard the service they provide as being no less than exceptional.”",
    writer: "Nihad Abdel-Wahab, Human <br/> Resource Director, Tetrapak",
  },
  {
    text: "“I have been dealing with Aspire HR Consultants since 2008,during which time they have provided my business with excellent support in the areas of recruitment and executive search. Aspire HR Consultants are considered one of our few business partners whose work has been remarkably significant and influential to the business. I can confidently recommend Aspire HR Consultants as solid and reliable business partners, and experts in their field.”",
    writer: "Khaled Gamal, HR Executive <br/> Director, SODIC",
  },
  {
    text: "“Since we opened our subsidiary in Egypt in October2007, Aspire was a key partner in our success story, as people are our key assets. We were impressed with Aspire level of service to cater our HR needs, where today we have key players, potential talents and zero turnover among all their recruited candidates. Passion, efficiency& commitment are the key strength of Aspire making it one of the best trustworthy recruitment organization in Egypt.”",
    writer: "Imad A. Ghazal, General Manager,<br/> Adidas Group-Egypt",
  },
  {
    text: "“I have been dealing with Aspire HR Consultants since 2008,during which time they have provided my business with excellent support in the areas of recruitment and executive search. Aspire HR Consultants are considered one of our few business partners whose work has been remarkably significant and influential to the business. I can confidently recommend Aspire HR Consultants as solid and reliable business partners, and experts in their field.”",
    writer: "Khaled Gamal, HR Executive <br/> Director, SODIC",
  },
];
function loadRandomParagraph() {
  const randomIndex = Math.floor(Math.random() * paragraphs.length);

  const { text, writer } = paragraphs[randomIndex];

  document.getElementById("paragraph").innerHTML = text;
  document.getElementById("writer").innerHTML = writer;
}

window.onload = loadRandomParagraph;

// Preloader
let preloader = document.getElementById("preloader");
let scrollToTopBtn = document.getElementById("scrollToTopBtn");
function showScrollButton() {
  scrollToTopBtn.style.display = "flex";
}
setTimeout(showScrollButton, 1500);
function hidePreloader() {
  preloader.style.display = "none";
}
setTimeout(hidePreloader, 1500);

// GSAP

// Navbar
function toggleActive(element) {
  var elements = document.querySelectorAll(".nav-content ul li");

  elements.forEach(function (el) {
    el.classList.remove("active");
  });

  element.classList.add("active");
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

// ScrollToTop

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

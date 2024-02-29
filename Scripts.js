console.log("Script loaded successfully!");
(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        680: {
          items: 2,
          nav: false,
          loop: false,
        },
        1000: {
          items: 3,
          nav: true,
        },
      },
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navbarList = document.querySelector(".navbar-list");

  menuIcon.addEventListener("click", function () {
    navbarList.classList.toggle("active");
  });
});
// JavaScript for hiding navbar-list after clicking on list item
document.querySelectorAll(".navbar-list a, button").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".navbar-list").classList.remove("active");
  });
});
function toggleScrollButton() {
  const firstSection = document.getElementById("section1"); // Change 'section1' to the ID of your first section
  const scrollButton = document.getElementById("scrollButton");

  // Check if the user is at or before the first section
  if (window.scrollY <= firstSection.offsetTop) {
    // Show the button if at or before the first section
    scrollButton.style.display = "inline";
  } else {
    // Hide the button if scrolled past the first section
    scrollButton.style.display = "none";
  }
}

function scrollToNextSection() {
  const secondSection = document.getElementById("case-study"); // Change 'case-study' to the ID of your second section
  secondSection.scrollIntoView({ behavior: "smooth" });
}

// Call the toggleScrollButton function when the window is scrolled
window.addEventListener("scroll", toggleScrollButton);

// Call the scrollToNextSection function when the scroll button is clicked
document
  .getElementById("scrollButton")
  .addEventListener("click", scrollToNextSection);

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    // Scroll to the section smoothly
    section.scrollIntoView({ behavior: "smooth" });
  }
}

const sentences = [
  "My Great Projects",
  "Freelancing Projects",
  "Professional History with Companies",
];

let sentenceIndex = 0;
let charIndex = 0;
const typingSpeed = 100;

function type() {
  if (sentenceIndex < sentences.length) {
    const currentSentence = sentences[sentenceIndex];
    if (charIndex < currentSentence.length) {
      document.getElementById("typing-heading").innerHTML +=
        currentSentence.charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, typingSpeed + 1000);
    }
  }
}

function erase() {
  if (charIndex >= 0) {
    const currentText = sentences[sentenceIndex].substring(0, charIndex);
    document.getElementById("typing-heading").innerHTML = currentText;
    charIndex--;
    setTimeout(erase, typingSpeed / 2);
  } else {
    sentenceIndex++;
    if (sentenceIndex < sentences.length) {
      setTimeout(type, typingSpeed / 2);
    } else {
      // Loop through sentences again
      sentenceIndex = 0;
      setTimeout(type, typingSpeed / 2);
    }
  }
}

window.onload = function () {
  type();
};

// Define the number of stars
const numStars = 5;

// Get all elements with the "rating" class
const ratingElements = document.querySelectorAll(".rating");

// Loop through each rating element
ratingElements.forEach((ratingElement) => {
  // Create a loop to generate stars for each rating element
  for (let i = 0; i < numStars; i++) {
    // Create a new object element for each star
    const star = document.createElement("object");
    star.className = "star";
    star.type = "image/svg+xml";
    star.data = "star.svg";
    star.width = "100";
    star.height = "100";
    star.innerHTML = "Your browser does not support SVG";

    // Append the star to the current rating element
    ratingElement.appendChild(star);
  }
});

document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    // Replace 'path/to/your/cv.pdf' with the actual path to your CV file
    var cvPath =
      "https://drive.google.com/uc?export=download&id=13D13OoPM2FtzCdtYr-VMATsGhq-9nOwr";

    // var cvPath = 'Nour_Eldin_Resume.pdf';

    // Create a link element
    var link = document.createElement("a");
    link.href = cvPath;

    // Specify the filename for the download
    link.download = "Nour_Eldin_Resume.pdf";

    // link.target = '_blank';

    // Append the link to the document and trigger a click
    document.body.appendChild(link);
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  });
function navigateToHomePage() {
  window.location.href = "home.html#Talk"; // Assuming 'home.html' is your home page and 'contact' is the ID of the contact section
}
function redirectToHexaDev() {
  window.location.href = "HexaDev.html";
}

function redirectToMMC() {
  window.location.href = "MMC.html";
}
function redirectToBeethon() {
  window.location.href = "Beethon.html";
}
function redirectToTmm() {
  window.location.href = "Tmm.html";
}
function redirectToCave() {
  window.location.href = "Cave.html";
}
function redirectToOrangeDepo() {
  window.location.href = "OrangeDepo.html";
}
function openHexaDevPage() {
  window.location.href = "HexaDev.html";
}
function openMMCPage() {
  window.location.href = "MMC.html";
}
function openOrangeDepoPage() {
  window.location.href = "OrangeDepo.html";
}
function openCavePage() {
  window.location.href = "Cave.html";
}
function openBeethonPage() {
  window.location.href = "Beethon.html";
}
function openTmmPage() {
  window.location.href = "Tmm.html";
}
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const centerMedia = document.getElementById("centerMedia");

// Array of media (images and videos)
const mediaArray = [
  "Siraj.mp4",
  "pro-3.svg",
  "pro-5.svg",
  "Adnan.mp4",
  "pro-6.svg",
  "pro-7.svg",
  "pro-8.svg",
  "pro-9.svg",
  "pro-10.svg",
  "pro-11.svg",
  "pro-13.svg",
  "pro-12.svg",
  "pro-4.svg",
];

// Initialize current media index
let currentIndex = 0;

// Event listeners for arrow clicks
leftArrow.addEventListener("click", () => changeMedia("previous"));
rightArrow.addEventListener("click", () => changeMedia("next"));

// Function to change media (image or video)
function changeMedia(direction) {
  if (direction === "previous") {
    currentIndex = (currentIndex - 1 + mediaArray.length) % mediaArray.length;
  } else if (direction === "next") {
    currentIndex = (currentIndex + 1) % mediaArray.length;
  }

  const currentMedia = mediaArray[currentIndex];
  if (currentMedia.endsWith(".mp4")) {
    centerMedia.src = currentMedia;
    centerMedia.style.display = "block"; // Show video
    centerImage.style.display = "none"; // Hide image
  } else {
    centerImage.src = currentMedia;
    centerImage.style.display = "block"; // Show image
    centerMedia.style.display = "none"; // Hide video
  }
}

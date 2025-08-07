// ===== Scroll-based Popup Menu =====
window.addEventListener("scroll", () => {
  const popupMenu = document.getElementById("popupMenu");
  const moveUpBtn = document.getElementById("moveUpBtn");
  const scrollPopupMenu = document.getElementById("scrollPopupMenu");

  if (popupMenu) {
    popupMenu.classList.toggle("visible", window.scrollY > 100);
  }

  if (moveUpBtn) {
    moveUpBtn.style.display = window.scrollY > 100 ? "flex" : "none";
  }

  if (scrollPopupMenu) {
    scrollPopupMenu.style.display = window.scrollY > 300 ? "flex" : "none";
  }
});

// ===== Slideshow Logic =====
let slideIndex = 1;
let slideInterval;

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("opacity-100");
    dots[i].classList.add("opacity-50");
  }

  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("active");
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].classList.add("opacity-100");
    dots[slideIndex - 1].classList.remove("opacity-50");
  }
}

function plusSlides(n) {
  showSlides(slideIndex += n);
  resetSlideShow();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  resetSlideShow();
}

function startSlideShow() {
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 5000); // every 5 seconds
}

function resetSlideShow() {
  clearInterval(slideInterval);
  startSlideShow();
}

// Start slideshow
document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
  startSlideShow();

  // Manual nav
  const prev = document.querySelector('.prev-btn');
  const next = document.querySelector('.next-btn');
  if (prev) prev.addEventListener("click", () => plusSlides(-1));
  if (next) next.addEventListener("click", () => plusSlides(1));

  // Dot nav
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => currentSlide(index + 1));
  });
});

// ===== Language Switch Logic =====
function toggleLanguageMenu() {
  const menu = document.getElementById('langMenu');
  if (menu) {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
}

function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-en]');
  document.getElementById('langMenu').style.display = 'none';
  document.getElementById('current-lang').textContent = lang.toUpperCase();

  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

// Close language dropdown when clicking outside
document.addEventListener('click', function (event) {
  const menu = document.getElementById('langMenu');
  const toggle = document.getElementById('langToggle');
  if (menu && toggle && !toggle.contains(event.target) && !menu.contains(event.target)) {
    menu.style.display = 'none';
  }
});
  function toggleLanguageMenu() {
    const menu = document.getElementById('langMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }

  function setLanguage(lang) {
    alert(`Language changed to ${lang}`);
    document.getElementById('langMenu').style.display = 'none';
  }

  // Optional: Close the dropdown if clicked outside
  window.addEventListener('click', function(e) {
    if (!e.target.closest('.language-switcher')) {
      document.getElementById('langMenu').style.display = 'none';
    }
  });

// translations


// contact form submission
  document.querySelector('.contact-form').addEventListener('submit', function (e) {
    alert('Thank you! Your message is being sent.');
  });
// validate name, email, and message fields 
  document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Regex for validation
    const nameRegex = /^[A-Za-z\s]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation logic
    if (!nameRegex.test(name)) {
      alert("Please enter a valid full name (only letters and spaces, at least two characters).");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (message.length < 10) {
      alert("Please enter a more detailed message (at least 10 characters).");
      return;
    }

    // If valid
    alert("Message sent successfully!");
    // Optionally, you can reset the form or send data to a server
    // e.target.submit(); // Uncomment if you want to submit to a backend
  });


  // tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'eagle-fly': 'eagleFly 8s ease-in-out infinite',
      },
      keyframes: {
        eagleFly: {
          '0%, 100%': { transform: 'translateY(0) translateX(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) translateX(20px) rotate(-2deg)' },
          '50%': { transform: 'translateY(0px) translateX(40px) rotate(2deg)' },
          '75%': { transform: 'translateY(10px) translateX(20px) rotate(0deg)' },
        },
      },
    },
  },
}

const eagleContainer = document.getElementById('eagle-container');
    const eagleEmoji = "🦅";

    function createFlyingEagle() {
      const eagle = document.createElement("div");
      eagle.className = "eagle-shape text-2xl";
      eagle.textContent = eagleEmoji;

      // Random values
      const top = Math.random() * 80 + 10; // 10% to 90% from top
      const duration = Math.random() * 10 + 5; // 5s to 15s
      const size = Math.random() * 0.8 + 1; // scale 1 to 1.8
      const delay = Math.random() * 3;

      // Styles
      eagle.style.top = `${top}%`;
      eagle.style.left = `-50px`;
      eagle.style.fontSize = `${size}rem`;
      eagle.style.animationDuration = `${duration}s`;
      eagle.style.animationDelay = `${delay}s`;

      eagleContainer.appendChild(eagle);

      // Remove after animation
      setTimeout(() => {
        eagle.remove();
      }, (duration + delay) * 1000);
    }

    // Add one eagle every 1.5 seconds
    setInterval(createFlyingEagle, 1500);

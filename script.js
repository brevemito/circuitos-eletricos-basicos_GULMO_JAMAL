document.addEventListener("DOMContentLoaded", function () {
  // Menu mobile
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Ano no rodapé
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var slides = document.querySelectorAll(".carousel-slide");
  var prev = document.querySelector(".carousel-prev");
  var next = document.querySelector(".carousel-next");
  if (slides.length > 0 && prev && next) {
    var current = 0;
    function showSlide(index) {
      slides.forEach(function (s) { s.classList.remove("active"); });
      slides[index].classList.add("active");
    }
    next.addEventListener("click", function () {
      current = (current + 1) % slides.length;
      showSlide(current);
    });
    prev.addEventListener("click", function () {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    });
    setInterval(function () {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 6000);
  }
});

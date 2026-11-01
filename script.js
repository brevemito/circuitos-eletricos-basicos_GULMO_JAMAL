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

/* Banner de afiliado Chess.com Premium: aparece em todas as páginas */
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".bm-chess-ad")) return;

  var cavalo = '<path d="m19 272.47 40.63 18.06a32 32 0 0024.88.47l12.78-5.12a32 32 0 0018.76-20.5l9.22-30.65a24 24 0 0112.55-15.65L159.94 208v50.33a48 48 0 01-26.53 42.94l-57.22 28.65A80 80 0 0032 401.48V416h319.86V224c0-106-85.92-192-191.92-192H12A12 12 0 000 44a16.9 16.9 0 001.79 7.58L16 80l-9 9a24 24 0 00-7 17v137.21a32 32 0 0019 29.26zM52 128a20 20 0 11-20 20 20 20 0 0120-20zm316 320H16a16 16 0 00-16 16v32a16 16 0 0016 16h352a16 16 0 0016-16v-32a16 16 0 00-16-16z"/>';
  var visto = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M4 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var html =
    '<aside class="bm-chess-ad" aria-label="Publicidade: Chess.com Premium">' +
      '<span class="bm-chess-ad-tag">Publicidade</span>' +
      '<header class="bm-chess-ad-brand">' +
        '<span class="bm-chess-ad-logo" aria-hidden="true"><svg viewBox="0 0 384 512" fill="#ffffff">' + cavalo + '</svg></span>' +
        '<span class="bm-chess-ad-wordmark">chess<span>.com</span></span>' +
      '</header>' +
      '<div class="bm-chess-ad-body">' +
        '<div class="bm-chess-ad-content">' +
          '<h3 class="bm-chess-ad-title">Seja Premium.<br><span class="bm-chess-highlight">Melhore no Xadrez.</span></h3>' +
          '<p class="bm-chess-ad-text">Junte-se a milhões de jogadores em todo o mundo e leve o seu xadrez a outro nível com as ferramentas oficiais do Chess.com.</p>' +
          '<ul class="bm-chess-ad-benefits">' +
            '<li>' + visto + 'Puzzles diários ilimitados</li>' +
            '<li>' + visto + 'Análise das suas partidas com IA</li>' +
            '<li>' + visto + 'Lições guiadas para todos os níveis</li>' +
          '</ul>' +
          '<a class="bm-chess-ad-button" href="https://www.chess.com/membership?ref_id=24845802" target="_blank" rel="sponsored noopener noreferrer">Assinar Chess.com Premium' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
          '</a>' +
        '</div>' +
        '<div class="bm-chess-ad-badge" aria-hidden="true"><svg viewBox="0 0 384 512" fill="#1e1e1e">' + cavalo + '</svg></div>' +
      '</div>' +
    '</aside>';

  var caixa = document.createElement("div");
  caixa.className = "container";
  caixa.innerHTML = html;

  var projectos = document.getElementById("projectos");
  var rodape = document.querySelector(".site-footer");
  if (projectos) {
    projectos.insertAdjacentElement("afterend", caixa);
  } else if (rodape) {
    rodape.parentNode.insertBefore(caixa, rodape);
  }
});

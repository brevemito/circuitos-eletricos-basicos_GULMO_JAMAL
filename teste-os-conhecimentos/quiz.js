(function () {
  var Q = [
    { t: 'mc', lv: 'Comando', q: 'No intertravamento mútuo de K1 e K2 (reversão), que contato de K1 vai em série com a bobina de K2?', o: ['NF 21-22', 'NA 13-14', 'NF 95-96', 'Contato principal 1-2'], a: 0, e: 'O NF auxiliar (21-22) de cada contator bloqueia a bobina do outro e evita o curto-circuito entre fases.' },
    { t: 'mc', q: 'Onde se liga o contato de selo (auto-retenção) de K1?', o: ['Em série com S0', 'Em paralelo com a botoeira de partida S1', 'Em paralelo com a bobina', 'Em série com o relé térmico'], a: 1, e: 'O NA 13-14 de K1 fica em paralelo com S1 e mantém a bobina ligada depois de soltar o botão.' },
    { t: 'mc', q: 'Na partida estrela-triângulo, a corrente de partida em estrela é aproximadamente:', o: ['O dobro da direta', 'Igual à direta', '1/3 da partida direta', '1/10 da partida direta'], a: 2, e: 'Em estrela cada enrolamento recebe 380/√3 ≈ 220 V, logo corrente e binário caem para cerca de 1/3.' },
    { t: 'mc', q: 'O relé térmico de sobrecarga protege o motor contra:', o: ['Curto-circuito instantâneo', 'Sobrecarga prolongada', 'Sobretensão da rede', 'Falta de neutro'], a: 1, e: 'O térmico é bimetálico e actua com atraso. O curto-circuito exige disjuntor ou fusível a montante.' },
    { t: 'mc', lv: 'Sensores', q: 'Um sensor PNP, quando activo, apresenta na saída:', o: ['0 V (nível baixo)', '+24 V (nível alto)', '220 V CA', 'Saída aberta sem tensão'], a: 1, e: 'O PNP comuta o positivo para a carga. O NPN comuta o negativo.' },
    { t: 'mc', q: 'Qual sensor detecta líquidos, plástico e metais?', o: ['Indutivo', 'Capacitivo', 'Fim de curso mecânico', 'Nenhum deles'], a: 1, e: 'O capacitivo reage à variação da capacitância. O indutivo só detecta metais.' },
    { t: 'mc', lv: 'Inversores e arranque', q: 'Manter V/f constante no inversor serve para:', o: ['Manter o fluxo e o binário constantes', 'Aumentar o ruído', 'Dobrar a velocidade', 'Eliminar o Link CC'], a: 0, e: 'O fluxo é proporcional a V/f. Em 380 V / 50 Hz são 7,6 V/Hz.' },
    { t: 'mc', q: 'O erro de sobretensão no Link CC numa desaceleração brusca acontece porque:', o: ['O motor regenera energia para o barramento', 'A rede está fraca', 'O motor está em curto', 'O contator está aberto'], a: 0, e: 'O motor actua como gerador e a ponte de díodos não devolve energia à rede. Solução: rampa maior ou resistor de frenagem.' },
    { t: 'mc', q: 'O soft starter limita a corrente de partida controlando:', o: ['A frequência da rede', 'O ângulo de disparo dos tirístores', 'O número de pólos', 'A secção dos cabos'], a: 1, e: 'Os SCR em antiparalelo aplicam uma rampa de tensão ao motor.' },
    { t: 'tf', lv: 'Verdadeiro ou Falso', q: 'O relé térmico protege contra curto-circuito.', a: false, e: 'Falso. Só protege contra sobrecarga.' },
    { t: 'tf', q: 'Depois de uma falta de tensão, um circuito com selo não rearranca sozinho.', a: true, e: 'Verdadeiro. O selo perde-se e é preciso premir S1 de novo.' },
    { t: 'tf', q: 'Um sensor indutivo detecta plástico e madeira.', a: false, e: 'Falso. O indutivo só detecta metais.' },
    { t: 'tf', q: 'Numa reversão de motor trifásico trocam-se duas fases.', a: true, e: 'Verdadeiro. Por exemplo L1 e L3, feito pelo contator K2.' },
    { t: 'ord', lv: 'Ordenar a sequência', q: 'Ordene o funcionamento da partida estrela-triângulo.', s: ['Prime-se S1 e K1 é energizado (selo)', 'K3 fecha o ponto de estrela e KT1 começa a contar', 'KT1 esgota o tempo e K3 desliga', 'K2 é energizado e liga em triângulo', 'O NF de K2 impede K3 de voltar a ligar'], e: 'Estrela, tempo, abertura da estrela, triângulo e bloqueio por intertravamento.' }
  ];
  var box = document.getElementById('quiz');
  if (!box) return;
  var i, score, lives, streak, hits, cur = 'Teste';

  function shuffle(a) { a = a.slice(); for (var k = a.length - 1; k > 0; k--) { var j = Math.floor(Math.random() * (k + 1)); var t = a[k]; a[k] = a[j]; a[j] = t; } return a; }
  function el(tag, cls, txt) { var n = document.createElement(tag); if (cls) n.className = cls; if (txt) n.textContent = txt; return n; }
  function hud() {
    var h = box.querySelector('.quiz-hud');
    if (!h) return;
    h.innerHTML = '<span>' + cur + '</span><span>' + score + ' pts</span><span>' + '❤'.repeat(Math.max(lives, 0)) + '♡'.repeat(3 - Math.max(lives, 0)) + '</span>';
    box.querySelector('.quiz-bar i').style.width = (i / Q.length * 100) + '%';
  }
  function frame() { box.innerHTML = '<div class="quiz-hud"></div><div class="quiz-bar"><i></i></div><div id="quizBody"></div>'; hud(); return document.getElementById('quizBody'); }

  function start() {
    i = 0; score = 0; lives = 3; streak = 0; hits = 0;
    var b = frame();
    b.innerHTML = '<div class="quiz-tag">Circuitos Eléctricos Básicos</div><h2>Pronto para o desafio?</h2><p>' + Q.length + ' perguntas sobre comando, sensores, inversores e arranque de motores.</p>';
    var btn = el('button', 'btn', 'Começar'); btn.onclick = show; b.appendChild(btn);
  }
  function finish(win) {
    i = Q.length;
    var b = frame(), pct = Math.round(hits / Q.length * 100);
    var r = pct >= 85 ? 'Engenheiro de automação 🏆' : pct >= 65 ? 'Electricista industrial ⚙️' : pct >= 40 ? 'Aprendiz dedicado 📘' : 'Revê a matéria e tenta de novo 🔁';
    b.innerHTML = '<div class="quiz-tag">' + (win ? 'Concluído' : 'Sem vidas') + '</div><div class="quiz-big">' + score + ' pts</div><h2>' + r + '</h2><p>Acertou ' + hits + ' de ' + Q.length + ' (' + pct + '%).</p>';
    var btn = el('button', 'btn', 'Jogar outra vez'); btn.onclick = start; b.appendChild(btn);
  }
  function next() { i++; if (lives <= 0) return finish(false); if (i >= Q.length) return finish(true); show(); }
  function result(b, ok, e) {
    if (ok) { streak++; hits++; score += 100 + Math.min(streak - 1, 4) * 20; } else { streak = 0; lives--; }
    var f = el('div', 'quiz-fb' + (ok ? '' : ' bad')); f.textContent = (ok ? 'Certo! ' : 'Errado. ') + e + (ok && streak > 1 ? ' Sequência x' + streak : '');
    b.appendChild(f);
    var btn = el('button', 'btn', (lives <= 0 || i >= Q.length - 1) ? 'Ver resultado' : 'Continuar'); btn.onclick = next; b.appendChild(btn);
    hud();
  }
  function show() {
    var q = Q[i]; if (q.lv) cur = q.lv;
    var b = frame();
    b.appendChild(el('div', 'quiz-tag', 'Pergunta ' + (i + 1) + ' de ' + Q.length));
    b.appendChild(el('h2', '', q.q));
    var done = false;
    if (q.t === 'mc') {
      shuffle(q.o.map(function (_, k) { return k; })).forEach(function (k) {
        var o = el('button', 'quiz-opt', q.o[k]);
        o.onclick = function () {
          if (done) return; done = true;
          [].forEach.call(b.querySelectorAll('.quiz-opt'), function (x) { x.disabled = true; if (x.textContent === q.o[q.a]) x.classList.add('ok'); });
          if (k !== q.a) o.classList.add('ko');
          result(b, k === q.a, q.e);
        };
        b.appendChild(o);
      });
    } else if (q.t === 'tf') {
      var w = el('div', 'quiz-tf');
      [['Verdadeiro', true], ['Falso', false]].forEach(function (p) {
        var o = el('button', 'quiz-opt', p[0]);
        o.onclick = function () {
          if (done) return; done = true;
          [].forEach.call(w.children, function (x) { x.disabled = true; if ((x.textContent === 'Verdadeiro') === q.a) x.classList.add('ok'); });
          if (p[1] !== q.a) o.classList.add('ko');
          result(b, p[1] === q.a, q.e);
        };
        w.appendChild(o);
      });
      b.appendChild(w);
    } else {
      b.appendChild(el('p', '', 'Toque nos passos pela ordem correcta. Um erro custa uma vida.'));
      var sl = el('div', 'quiz-slots'), wrap = el('div'), n = 0, wrong = false;
      b.appendChild(sl); b.appendChild(wrap);
      shuffle(q.s.map(function (_, k) { return k; })).forEach(function (k) {
        var o = el('button', 'quiz-opt', q.s[k]);
        o.onclick = function () {
          if (o.disabled) return;
          if (k === n) {
            o.disabled = true; o.classList.add('used'); sl.appendChild(el('div', '', (n + 1) + '. ' + q.s[k])); n++;
            if (n === q.s.length) { if (wrong) lives++; result(b, !wrong, q.e); }
          } else {
            wrong = true; lives--; streak = 0; hud();
            if (lives <= 0) {
              [].forEach.call(wrap.children, function (x) { x.disabled = true; });
              var f = el('div', 'quiz-fb bad', 'Sem vidas. ' + q.e); b.appendChild(f);
              var bb = el('button', 'btn', 'Ver resultado'); bb.onclick = function () { finish(false); }; b.appendChild(bb);
            }
          }
        };
        wrap.appendChild(o);
      });
    }
  }
  start();
})();

const targetDate = new Date('2024-07-14T00:00:00'); // Solo referencia
let isCountdownActive = false; // Nunca activa cuenta regresiva dinámica

// Función para mostrar el contenido fijo con solo días
function showFixedDaysTogether() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <div class="romantic-container celebration-mode loaded">
      <div class="hearts-background"></div>
      <div class="sparkles"></div>
      <div class="confetti"></div>

      <header class="main-header">
        <h1 class="title celebration-title">🎉 ¡3 MESES DE NOVIOS! 🎉</h1>
        <div class="subtitle">Un recorrido lleno de buenos momentos.🐈‍⬛</div>
      </header>

      <main class="content">
        <div class="anniversary-card celebration-card">
          <div class="card-inner">
            <div class="celebration-text">
              <h2>💕 ¡Llegó el día! 💕</h2>
              <p>Hoy celebramos tres meses increíbles desde que comenzamos esta hermosa aventura juntos. Cada día contigo ha sido un regalo.</p>
            </div>

            <div class="celebration-photo-container">
              <div class="celebration-photo-frame">
                <img src="./MYA.jpg" alt="Celebrando nuestro amor" class="celebration-photo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                <div class="photo-placeholder" style="display: none; width: 100%; height: 100%; background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; font-size: 4rem;">📷</div>
                <div class="celebration-photo-overlay">
                  <div class="celebration-photo-hearts">
                    <span class="celebration-photo-heart">💖</span>
                    <span class="celebration-photo-heart">💕</span>
                    <span class="celebration-photo-heart">💖</span>
                    <span class="celebration-photo-heart">💕</span>
                    <span class="celebration-photo-heart">💖</span>
                  </div>
                </div>
              </div>
              <p class="celebration-photo-caption">3 meses de pura felicidad</p>
            </div>

            <div class="time-counter">
              <h3>Llevamos juntos exactamente:</h3>
              <div class="counter-display">
                <div class="time-unit">
                  <span id="days" class="number">91</span>
                  <span class="label">días</span>
                </div>
              </div>
            </div>

            <div class="love-message">
              <div class="message-heart">💝</div>
              <p>Gracias por llenar mi vida de sonrisas, aventuras y momentos inolvidables. Eres la razón por la que cada día es especial. Te amo más de lo que las palabras pueden expresar.</p>
              <div class="signature">Con todo mi amor, Ander 💕</div>
            </div>

            <div class="celebration-button">
              <button id="surprise-btn" class="surprise-button">✨ ¡Una sorpresa más! ✨</button>
            </div>
          </div>
        </div>

        <div class="floating-hearts">
          ${Array(20).fill(0).map((_, i) => `<div class="heart heart-${i+1}">💖</div>`).join('')}
        </div>
      </main>

      <footer class="romantic-footer">
        <p>✨ Que sean muchos meses más de felicidad ✨</p>
      </footer>
    </div>
  `;

  // Configurar botón de sorpresa
  const surpriseBtn = document.getElementById('surprise-btn');
  if (surpriseBtn) {
    surpriseBtn.addEventListener('click', showFinalSurprise);
  }
}

// Función para mostrar la sorpresa final
function showFinalSurprise() {
  const surpriseOverlay = document.createElement('div');
  surpriseOverlay.className = 'surprise-overlay';
  surpriseOverlay.innerHTML = `
    <div class="surprise-content">
      <div class="surprise-hearts">
        <div class="surprise-heart">💖</div>
        <div class="surprise-heart">💖</div>
        <div class="surprise-heart">💖</div>
        <div class="surprise-heart">💖</div>
        <div class="surprise-heart">💖</div>
      </div>
      <h1 class="surprise-title">💕 TE AMO 💕</h1>
      <p class="surprise-message">Eres lo mejor que me ha pasado en la vida</p>
      <div class="surprise-photo-mini">
        <img src="./MYA.jpg" alt="Nuestro amor" class="surprise-mini-photo" onerror="this.style.display='none';" />
      </div>
      <button class="close-surprise">Cerrar ✨</button>
    </div>
  `;

  document.body.appendChild(surpriseOverlay);

  // Mostrar overlay con animación
  setTimeout(() => surpriseOverlay.classList.add('show'), 100);

  // Cerrar overlay
  surpriseOverlay.querySelector('.close-surprise').addEventListener('click', () => {
    surpriseOverlay.classList.remove('show');
    setTimeout(() => {
      if (document.body.contains(surpriseOverlay)) {
        document.body.removeChild(surpriseOverlay);
      }
    }, 500);
  });
}

// Crear efectos visuales (destellos)
function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = Math.random() * 100 + '%';
  sparkle.style.top = Math.random() * 100 + '%';
  sparkle.textContent = '✨';

  const sparklesContainer = document.querySelector('.sparkles');
  if (sparklesContainer) {
    sparklesContainer.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 3000);
  }
}

// Crear confetti animado (opcional)
function createConfetti() {
  const confettiContainer = document.querySelector('.confetti');
  if (!confettiContainer) return;

  const colors = ['#ff6b9d', '#ffd93d', '#6bcf7f', '#4d9de0', '#e15554', '#f9844a'];

  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const confettiPiece = document.createElement('div');
      confettiPiece.className = 'confetti-piece';
      confettiPiece.style.left = Math.random() * 100 + '%';
      confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confettiPiece.style.animationDelay = Math.random() * 2 + 's';

      confettiContainer.appendChild(confettiPiece);

      setTimeout(() => {
        confettiPiece.remove();
      }, 4000);
    }, i * 100);
  }
}

// Inicializar aplicación
function init() {
  showFixedDaysTogether();

  setInterval(createSparkle, 2000);
  setInterval(createConfetti, 3000);
}

// Esperar a que el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

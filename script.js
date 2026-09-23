/* =============================================
   BIRTHDAY SITE FOR JOE — REACT APP
   Components: Cover, Memories, Phrases, Music, Letter, Ending
   ============================================= */

const { useState, useEffect, useCallback, useRef } = React;

// ─── DATA ──────────────────────────────────────────────

const PICS = [
  '9c571dd6-e880-491c-9547-858f4b821760.jpeg',
  '1dcb15f6-eb47-498e-aa1b-e197d01ffa18.jpeg',
  '540ac665-2341-4a9a-bef9-96c9f9b8a40e.jpeg',
  'b62bc6f0-9d44-4d3d-a1a4-f32af662c686.jpeg',
  'a923c8f3-bb50-4c1e-be04-cd150201bfd1.jpeg',
  '72d9c854-724d-4bc3-802d-47b1444364be.jpeg',
  '1.jpeg',
  'WhatsApp Image 2026-09-21 at 6.21.38 PM.jpeg',
  'b5f26fb9-32e9-4e72-938c-ab73b7b9d648.jpeg',
  '8106f1ce-8433-4206-a8e8-dab48a4ed2db.jpeg',
  '26649b73-eb9e-4d28-83a9-2f037cf3ea92.jpeg',
  '5814dd1f-c5f8-43e8-a86f-abdd199d7c13.jpeg',
  'ff3a4d96-13b2-4f72-88f4-07b363cfdca0.jpeg',
  '31363b6b-3244-4b11-94c5-b4b8f726cd3f.jpeg',
  '047a1441-4e93-4cb5-99b6-e912d872c237.jpeg',
  '06214024-2430-40c5-a810-2f9d0f1da660.jpeg',
  '916d9655-99a1-496f-9e03-7297a14bfdbb.jpeg',
  '91baf368-ca1e-4f95-82c6-6c7f2d31e898.jpeg',
  '927d8d05-07df-487d-ad94-8263091613f6.jpeg',
  '4935c607-eab5-46d6-a9b3-4b5d0fb86dce.jpeg',
  '11626228-7a2e-4ff7-aa69-7bcddc3ea4bb.jpeg',
  '5311909e-3dc5-4084-b5c2-a89ba2b50bf6.jpeg',
  '268338ee-5865-4ba6-87af-766c252f969f.jpeg',
  'd54e735c-528f-4361-aa4a-87d1e3c2732c.jpeg',
  '95e950b5-2d14-4e99-8d66-a7f56401b119.jpeg',
  '0159b54b-95eb-4ac2-9bfc-dc45741d9a82.jpeg',
];

const PHRASES = [
  'Some people are worth melting for.',
  "Love is putting someone else's needs before yours.",
  "My dream wouldn't be complete without you in it.",
  'You were my new dream.',
  'You and I are a team. There is nothing more important than our friendship.',
  'Entre tantos pilotos y tantos circuitos, mi lugar favorito sigue siendo a tu lado.',
  'Si mi corazón fuera un monoplaza, tú serías mi destino.',
  'No necesito ganar todas las carreras si puedo compartir la vuelta contigo.',
  'Hay personas que llegan a tu vida como una vuelta rápida: inesperadas y difíciles de olvidar.',
  'En un mundo lleno de curvas, qué bonito encontrar a alguien que se convierte en mi recta favorita.',
  'No sé cuántas carreras nos quedan, pero me gustaría vivirlas todas contigo.',
  'Podrán cambiar los circuitos, los equipos y las temporadas, pero hay personas que siempre quieres tener en tu paddock.',
  'Entre banderas, motores y podios, mi momento favorito siempre sería encontrarte al final de la carrera.',
];

const PLAYLIST_URL =
  'https://music.youtube.com/playlist?list=PLHG9BcYlbrwM&si=sX8TFesCr12TItM7';

/** Helper: get image path */
const imgSrc = (name) => 'img/' + encodeURIComponent(name);


// ─── HOOKS ─────────────────────────────────────────────

/**
 * Typewriter effect hook
 * @param {string} text - text to type out
 * @param {number} speed - ms per character
 * @param {boolean} active - whether to start typing
 */
const useTypewriter = (text, speed = 55, active = true) => {
  const [display, setDisplay] = useState('');
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!active) {
      setDisplay('');
      return;
    }

    let i = 0;
    let timer;
    setDisplay('');
    setTyping(true);

    const tick = () => {
      if (i < text.length) {
        setDisplay(text.slice(0, i + 1));
        i++;
        timer = setTimeout(tick, speed);
      } else {
        setTyping(false);
      }
    };

    // Small initial delay before starting
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [text, speed, active]);

  return { display, typing };
};


// ─── COMPONENTS ────────────────────────────────────────

/* ---- Cover ---- */
const Cover = ({ active, onNext }) => {
  const { display, typing } = useTypewriter('Feliz cumpleaños, Joe.', 65, active);

  return (
    <div className={`slide ${active ? 'active' : ''}`}>
      {/* Background photos collage */}
      <div className="cover-bg">
        {PICS.slice(0, 6).map((p, i) => (
          <img
            key={i}
            className="cover-bg-img"
            src={imgSrc(p)}
            alt=""
            loading="lazy"
          />
        ))}
      </div>

      <div className="mono-label fade-up">29 · 09 · 2026 / VUELTA 17</div>

      <h1 className={`title fade-up delay-1 ${typing ? 'typewriter-cursor' : ''}`}>
        {display || '\u00A0'}
      </h1>

      <p className="subtitle fade-up delay-2">
        Una vuelta llena de recuerdos, palabras y todo lo que eres para mí.
      </p>

      <button className="btn fade-up delay-3" onClick={onNext}>
        Comenzar nuestro viaje →
      </button>
    </div>
  );
};


/* ---- Memories ---- */
const Memories = ({ active, onNext }) => {
  return (
    <div className={`slide ${active ? 'active' : ''}`}>
      <div className="section-tag fade-up">VUELTA 01 / 04</div>

      <h2 className="title-small fade-up delay-1">
        Primera parada:<br />nuestros recuerdos.
      </h2>

      <div className="memories-layout fade-up delay-2">
        {/* Big featured photo */}
        <img
          className="memories-big-photo"
          src={imgSrc(PICS[0])}
          alt="Un recuerdo especial"
          loading="lazy"
        />

        {/* Text + small photos */}
        <div className="memories-text">
          <p className="quote">
            "Entre tantos pilotos y tantos circuitos, mi lugar favorito sigue siendo a tu lado."
          </p>
          <p className="soft">
            No son solo fotos. Son momentos que quisiera guardar una y otra vez.
          </p>
          <div className="memories-small-photos">
            <img src={imgSrc(PICS[1])} alt="Recuerdo" loading="lazy" />
            <img src={imgSrc(PICS[2])} alt="Recuerdo" loading="lazy" />
          </div>
        </div>
      </div>

      <button className="btn fade-up delay-3" onClick={onNext} style={{ marginTop: '1.5rem' }}>
        Sigue a las palabras →
      </button>
    </div>
  );
};


/* ---- Phrases ---- */
const Phrases = ({ active, onNext }) => {
  const [idx, setIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const goTo = (newIdx) => {
    setIdx(newIdx);
    setAnimKey((k) => k + 1);
  };

  const prev = () => idx > 0 && goTo(idx - 1);
  const next = () => {
    if (idx < PHRASES.length - 1) {
      goTo(idx + 1);
    } else {
      onNext();
    }
  };

  // Pair of photos for current phrase
  const photo1 = PICS[idx * 2] || PICS[idx % PICS.length];
  const photo2 = PICS[idx * 2 + 1] || PICS[(idx + 1) % PICS.length];

  return (
    <div className={`slide ${active ? 'active' : ''}`}>
      <div className="section-tag fade-up">VUELTA 02 / 04 · FRASE {idx + 1} DE 13</div>

      <h2 className="title-small fade-up delay-1" style={{ marginTop: '1rem' }}>
        Una frase,<br />un recuerdo.
      </h2>

      <div className="glass-card phrase-card fade-up delay-2" key={`card-${animKey}`}>
        <div className="phrase-counter">{String(idx + 1).padStart(2, '0')} / {PHRASES.length}</div>

        <div className="phrase-text" style={{ animation: 'fadeIn 0.6s ease both' }}>
          "{PHRASES[idx]}"
        </div>

        <div className="phrase-photos">
          <img
            key={`p1-${animKey}`}
            src={imgSrc(photo1)}
            alt="Recuerdo"
            loading="lazy"
            style={{ animation: 'scaleIn 0.5s ease both' }}
          />
          <img
            key={`p2-${animKey}`}
            src={imgSrc(photo2)}
            alt="Recuerdo"
            loading="lazy"
            style={{ animation: 'scaleIn 0.5s ease 0.1s both' }}
          />
        </div>

        <div className="phrase-nav">
          <button
            className="phrase-nav-btn"
            onClick={prev}
            disabled={idx === 0}
            aria-label="Anterior"
          >
            ←
          </button>
          <span className="phrase-nav-counter">
            {String(idx + 1).padStart(2, '0')} / 13
          </span>
          <button
            className="phrase-nav-btn"
            onClick={next}
            aria-label={idx === 12 ? 'Ir a la música' : 'Siguiente'}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};


/* ---- Music ---- */
const Music = ({ active, onNext }) => {
  return (
    <div className={`slide ${active ? 'active' : ''}`}>
      <div className="section-tag fade-up">VUELTA 03 / 04</div>

      <div className="music-wrap">
        <h2 className="title-small fade-up delay-1">
          La banda sonora<br />de nosotros.
        </h2>

        <div className="vinyl fade-up delay-2">
          <div className="vinyl-center">
            <div className="vinyl-hole"></div>
          </div>
        </div>

        <div className="fade-up delay-2" style={{ textAlign: 'center' }}>
          <div className="mono-label" style={{ opacity: 1 }}>PLAYLIST ESPECIAL</div>
          <p className="subtitle" style={{ opacity: 1, marginBottom: '0.5rem' }}>
            Dale play a cada recuerdo.
          </p>
          <p style={{ color: 'var(--text-muted)', maxWidth: 400, margin: '0 auto 1.5rem', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Esta música es para que acompañe cada parte de este regalo.
          </p>
        </div>

        <a
          href={PLAYLIST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="music-link fade-up delay-3"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
          Escuchar Playlist
        </a>

        <button className="btn btn-secondary fade-up delay-4" onClick={onNext} style={{ marginTop: '0.5rem' }}>
          Abre tu carta →
        </button>
      </div>
    </div>
  );
};


/* ---- Letter ---- */
const Letter = ({ active, onNext }) => {
  return (
    <div className={`slide ${active ? 'active' : ''}`}>
      <div className="section-tag fade-up">VUELTA 04 / 04</div>

      <h2 className="title-small fade-up delay-1">Una carta para Joe.</h2>

      <div className="letter-paper fade-up delay-2">
        <span className="letter-flag" aria-hidden="true">🏁</span>
        <span className="letter-car" aria-hidden="true">🏎️</span>
        <p>
          Ya hoy finalmente cumples tus 17 años. En 2023 fue cuando te conocí sin pensar en lo
          importante que te volverías en mi vida y pasó; hoy cuatro años después me alegra seguir
          siendo parte de tu vida.
        </p>
        <p>
          Cada momento vivido, cada risa, cada lágrima, cada promesa y cada consejo te lo agradezco.
          Me ayudaste en mis peores momentos y en los mejores también, y eso no se me olvidará nunca.
        </p>
        <p>
          Fuiste mi mejor amigo y mi casi algo, y cada paso y momento que pasé contigo lo llevo en el
          corazón. Siempre contarás conmigo para lo que sea.
        </p>
        <p>
          Gracias por tu paciencia y por demostrarme que sí puedo ser amada y amar de igual manera.
          Que el Señor te siga bendiciendo grandemente y que todas tus metas se cumplan.
        </p>
        <div className="letter-sign">
          Te amo mucho y feliz cumpleaños, Joe. ♥
        </div>
      </div>

      <button className="btn fade-up delay-3" onClick={onNext} style={{ marginTop: '1.5rem' }}>
        Llegar al final →
      </button>
    </div>
  );
};


/* ---- Ending ---- */
const Ending = ({ active, onReset }) => {
  useEffect(() => {
    if (!active || !window.confetti) return;

    const end = Date.now() + 4000;

    const burst = () => {
      // Left side
      window.confetti({
        particleCount: 4,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.6 },
        colors: ['#d988b9', '#d4af37', '#ffffff', '#f06eaa'],
      });
      // Right side
      window.confetti({
        particleCount: 4,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.6 },
        colors: ['#d988b9', '#d4af37', '#ffffff', '#e8cc6e'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(burst);
      }
    };

    // Delay confetti slightly so slide transition finishes
    const timer = setTimeout(burst, 600);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <div className={`slide ${active ? 'active' : ''}`}>
      <div className="mono-label fade-up">FELIZ CUMPLEAÑOS JOE  · 17 AÑOS</div>

      <h1 className="title fade-up delay-1">
        Feliz cumpleaños,<br /><em>Joe.</em>
      </h1>

      <p className="subtitle fade-up delay-2">
        Gracias por cada risa, cada momento y por hacer el camino mucho más bonito.
      </p>

      <div className="hearts-row fade-up delay-3">
        <span className="heart-icon">♥</span>
        <span className="heart-icon">♥</span>
        <span className="heart-icon">♥</span>
      </div>

      <button className="btn btn-secondary fade-up delay-4" onClick={onReset}>
        Volver al inicio ↑
      </button>
    </div>
  );
};


// ─── MAIN APP ──────────────────────────────────────────

const App = () => {
  const [slide, setSlide] = useState(0);
  const TOTAL = 6;

  /** Navigate to a specific slide */
  const goTo = useCallback((n) => {
    const clamped = Math.max(0, Math.min(TOTAL - 1, n));
    setSlide(clamped);
  }, []);

  /** Advance to the next slide */
  const next = useCallback(() => {
    setSlide((s) => Math.min(s + 1, TOTAL - 1));
  }, []);

  /** Go back to slide 0 */
  const reset = useCallback(() => setSlide(0), []);

  /* Keyboard navigation */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        setSlide((s) => Math.min(s + 1, TOTAL - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        setSlide((s) => Math.max(s - 1, 0));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /* Touch swipe support for mobile */
  useEffect(() => {
    let startY = 0;

    const onTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const onTouchEnd = (e) => {
      const diff = startY - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 60) {
        if (diff > 0) {
          setSlide((s) => Math.min(s + 1, TOTAL - 1));
        } else {
          setSlide((s) => Math.max(s - 1, 0));
        }
      }
    };

    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  /* Mouse wheel navigation (debounced) */
  useEffect(() => {
    let lastWheel = 0;

    const onWheel = (e) => {
      const now = Date.now();
      if (now - lastWheel < 1200) return;

      if (e.deltaY > 40) {
        setSlide((s) => Math.min(s + 1, TOTAL - 1));
        lastWheel = now;
      } else if (e.deltaY < -40) {
        setSlide((s) => Math.max(s - 1, 0));
        lastWheel = now;
      }
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    return () => window.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div className="app-container">
      {/* Slides */}
      <Cover active={slide === 0} onNext={next} />
      <Memories active={slide === 1} onNext={next} />
      <Phrases active={slide === 2} onNext={next} />
      <Music active={slide === 3} onNext={next} />
      <Letter active={slide === 4} onNext={next} />
      <Ending active={slide === 5} onReset={reset} />

      {/* Navigation dots */}
      <nav className="nav-dots" aria-label="Navegación">
        {Array.from({ length: TOTAL }).map((_, i) => (
          <div
            key={i}
            className={`dot ${slide === i ? 'active' : ''}`}
            onClick={() => goTo(i)}
            role="button"
            aria-label={`Ir a sección ${i + 1}`}
          />
        ))}
      </nav>
    </div>
  );
};


// ─── MOUNT ─────────────────────────────────────────────

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

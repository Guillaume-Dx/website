// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Language switcher (English / French)
(function () {
  const translations = {
    en: {
      "meta.title": "Lab to Forge",
      "meta.description":
        "Lab to Forge — turning experiments into production-ready tools.",
      "hero.title":
        "From the lab to the forge, where ideas become reality.",
      "hero.text":
        'Lab to Forge is a space for building, testing ideas in the "lab" at a fast pace, shaping the ones that work into solid, dependable tools in the forge. Every project here moves from rough prototype to something real.',
      "footer.rights": "Lab to Forge. All rights reserved.",
      "footer.poweredBy": "Powered by",
      "footer.agentic": "Agentic Workstation"
    },
    fr: {
      "meta.title": "Lab to Forge",
      "meta.description":
        "Lab to Forge — transformer les expérimentations en outils prêts pour la production.",
      "hero.title":
        "Du laboratoire à la forge, là où les idées deviennent réalité.",
      "hero.text":
        "Lab to Forge est un espace pour construire et tester des idées dans le « labo » à un rythme soutenu, puis façonner celles qui fonctionnent en outils solides et fiables dans la forge. Chaque projet y passe du prototype brut à quelque chose de concret.",
      "footer.rights": "Lab to Forge. Tous droits réservés.",
      "footer.poweredBy": "Propulsé par",
      "footer.agentic": "Station de travail agentique"
    }
  };

  function applyLanguage(lang) {
    const dict = translations[lang] ? lang : "en";
    const strings = translations[dict];

    document.documentElement.lang = dict;
    document.title = strings["meta.title"];

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );
    if (metaDescription) {
      metaDescription.setAttribute("content", strings["meta.description"]);
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (strings[key] !== undefined) {
        el.textContent = strings[key];
      }
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === dict);
    });

    try {
      localStorage.setItem("lf-lang", dict);
    } catch (e) {
      /* localStorage unavailable, ignore */
    }

    fitHeroTitle();
  }

  // Shrink the hero title's font-size, if needed, so it always fits on a
  // single line regardless of language, viewport width or zoom level.
  function fitHeroTitle() {
    const title = document.querySelector(".hero h1");
    if (!title) return;

    const container = title.parentElement || title;
    title.style.fontSize = "";

    const maxSize = parseFloat(window.getComputedStyle(title).fontSize);
    const minSize = 10; // px floor so the title never becomes unreadable
    let size = maxSize;

    // clientWidth includes the container's own padding, but that padding is
    // not available space for its children — subtract it so we compare
    // against the title's true available width.
    const containerStyle = window.getComputedStyle(container);
    const horizontalPadding =
      parseFloat(containerStyle.paddingLeft || "0") +
      parseFloat(containerStyle.paddingRight || "0");
    const availableWidth = container.clientWidth - horizontalPadding;

    // Step down until the text fits within its container's available width.
    while (title.scrollWidth > availableWidth && size > minSize) {
      size -= 1;
      title.style.fontSize = size + "px";
    }
  }

  window.addEventListener("resize", () => {
    window.requestAnimationFrame(fitHeroTitle);
  });

  const savedLang = (() => {
    try {
      return localStorage.getItem("lf-lang");
    } catch (e) {
      return null;
    }
  })();

  const browserLang = (navigator.language || "en").slice(0, 2);
  const initialLang = savedLang || (browserLang === "fr" ? "fr" : "en");
  applyLanguage(initialLang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });
})();

// Interactive background: drifting embers and sparks
(function () {
  const canvas = document.getElementById("bg-field");
  if (!canvas || !canvas.getContext) return;

  const ctx = canvas.getContext("2d");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  let width = 0;
  let height = 0;
  let particles = [];
  let pointerX = null;
  let pointerY = null;

  function randomParticle(spawnAtBottom) {
    return {
      x: Math.random() * width,
      y: spawnAtBottom ? height + Math.random() * 40 : Math.random() * height,
      radius: Math.random() * 2.4 + 0.8,
      speed: Math.random() * 0.5 + 0.18,
      drift: (Math.random() - 0.5) * 0.35,
      flicker: Math.random() * Math.PI * 2,
      // mostly warm forge embers, occasional cool "lab" spark
      color: Math.random() < 0.18 ? "110, 168, 254" : "224, 122, 44"
    };
  }

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    const count = Math.min(140, Math.max(50, Math.floor((width * height) / 9000)));
    particles = Array.from({ length: count }, () => randomParticle(false));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.y -= p.speed;
      p.x += p.drift;
      p.flicker += 0.04;

      if (pointerX !== null) {
        const dx = p.x - pointerX;
        const dy = p.y - pointerY;
        const dist = Math.hypot(dx, dy);
        if (dist < 120 && dist > 0) {
          const force = (120 - dist) / 120;
          p.x += (dx / dist) * force * 0.6;
          p.y += (dy / dist) * force * 0.6;
        }
      }

      if (p.y < -10) {
        Object.assign(p, randomParticle(true));
      }

      const alpha = 0.5 + Math.sin(p.flicker) * 0.35;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color}, ${Math.max(alpha, 0.18)})`;
      ctx.shadowColor = `rgba(${p.color}, 0.9)`;
      ctx.shadowBlur = p.radius * 3;
      ctx.fill();
      ctx.shadowBlur = 0;
    });
  }

  function loop() {
    draw();
    requestAnimationFrame(loop);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
  });
  window.addEventListener("pointerleave", () => {
    pointerX = null;
    pointerY = null;
  });

  resize();

  if (prefersReducedMotion) {
    draw();
  } else {
    loop();
  }
})();

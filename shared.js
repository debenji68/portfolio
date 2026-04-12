/* ═══════════════════════════════════════════════════════════
   shared.js  — Header + Nav + Terminal init
   Load order REQUIRED:  i18n.js  →  shared.js  →  terminal.js
   Every page calls injectShared() in DOMContentLoaded.
═══════════════════════════════════════════════════════════ */

// ── Active page detection ────────────────────────────────
function getActivePage() {
  return window.location.pathname.split('/').pop() || 'index.html';
}

// ── Build & inject header + nav HTML ────────────────────
function injectShared() {
  const active = getActivePage();

  const pages = [
    { href:'index.html',       icon:'fa-house',          keyFr:'CV',           keyEn:'CV'         },
    { href:'formation.html',   icon:'fa-graduation-cap', keyFr:'Formations',   keyEn:'Education'  },
    { href:'diplomes.html',    icon:'fa-award',          keyFr:'Diplômes',     keyEn:'Degrees'    },
    { href:'experiences.html', icon:'fa-briefcase',      keyFr:'Expériences',  keyEn:'Experience' },
    { href:'projets.html',     icon:'fa-code',           keyFr:'Projets',      keyEn:'Projects'   },
    { href:'competences.html', icon:'fa-microchip',      keyFr:'Compétences',  keyEn:'Skills'     },
    { href:'contact.html',     icon:'fa-envelope',       keyFr:'Contact',      keyEn:'Contact'    },
  ];

  const lang = typeof currentLang !== 'undefined' ? currentLang : 'fr';

  const desktopLinks = pages.map(p => {
    const label = lang === 'en' ? p.keyEn : p.keyFr;
    return `<a href="${p.href}" class="${active === p.href ? 'active' : ''}">
      <i class="fa-solid ${p.icon}"></i> <span>${label}</span>
    </a>`;
  }).join('');

  const drawerLinks = pages.map(p => {
    const label = lang === 'en' ? p.keyEn : p.keyFr;
    return `<a href="${p.href}" class="${active === p.href ? 'active' : ''}">
      <i class="fa-solid ${p.icon}"></i> ${label}
    </a>`;
  }).join('');

  const termLabel = lang === 'en' ? 'Terminal' : 'Terminal';
  const altSub    = lang === 'en'
    ? 'Systems &amp; Network Admin · 2 years · Alsace'
    : 'Étudiant BUT Réseaux &amp; Télécommunications · Cybersécurité';

  const html = `
<header id="site-header">
  <img class="header-avatar" src="images/photo_profil.jpeg" alt="Photo de profil" onerror="this.style.display='none'">
  <div class="header-text">
    <h1>Deiber Benjamin</h1>
    <p class="header-subtitle">${altSub}</p>
    <div class="header-contacts">
      <a href="https://maps.app.goo.gl/VhSzwQHute3TE4Aa9" target="_blank"><i class="fa-solid fa-location-dot"></i> Fessenheim</a>
      <a href="mailto:deiber.benji@gmail.com"><i class="fa-regular fa-envelope"></i> deiber.benji@gmail.com</a>
      <a href="tel:+33637714714"><i class="fa-solid fa-phone"></i> 06&nbsp;37&nbsp;71&nbsp;47&nbsp;14</a>
    </div>
  </div>
</header>
<nav id="site-nav">
  <div class="nav-inner">
    <div class="nav-links" id="nav-desktop-links">${desktopLinks}</div>
    <div style="display:flex;gap:6px;align-items:center;flex-shrink:0;">
      <div class="lang-switcher">
        <button class="lang-btn ${lang === 'fr' ? 'active' : ''}" data-lang="fr" onclick="setLang('fr')">FR</button>
        <button class="lang-btn ${lang === 'en' ? 'active' : ''}" data-lang="en" onclick="setLang('en')">EN</button>
      </div>
      <button class="nav-terminal-btn" id="open-terminal-btn">
        <i class="fa-solid fa-terminal"></i> ${termLabel} <span class="blink">_</span>
      </button>
    </div>
    <button class="hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
  <div class="nav-drawer" id="nav-drawer">${drawerLinks}</div>
</nav>`;

  // Inject into placeholder
  const placeholder = document.getElementById('shared-header-nav');
  if (placeholder) {
    placeholder.innerHTML = html;
  } else {
    const div = document.createElement('div');
    div.id = 'shared-header-nav';
    div.innerHTML = html;
    document.body.insertBefore(div, document.body.firstChild);
  }

  // Bind hamburger
  const burger  = document.getElementById('hamburger');
  const drawer  = document.getElementById('nav-drawer');
  if (burger && drawer) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      drawer.classList.toggle('open');
    });
  }

  // Bind terminal button — works even if initTerminal already ran
  _bindTerminalButton();
}

// ── Terminal button binding (called after every inject) ──
function _bindTerminalButton() {
  const btn = document.getElementById('open-terminal-btn');
  const overlay = document.getElementById('terminal-overlay');
  if (!btn || !overlay) return;

  // Remove old listeners by cloning
  const newBtn = btn.cloneNode(true);
  btn.parentNode.replaceChild(newBtn, btn);

  newBtn.addEventListener('click', function () {
    overlay.classList.add('open');
    const inp = document.getElementById('terminal-input');
    if (inp) inp.focus();
  });
}

// ── setLang — rebuilds nav + applies translations everywhere ─
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  // Rebuild shared header/nav with new language
  injectShared();

  // Apply data-i18n on page
  applyTranslations();

  // Re-run page-specific builders
  if (typeof buildPageRef    === 'function') buildPageRef();
  if (typeof renderSkills    === 'function') renderSkills();
  if (typeof _rebuildPageText=== 'function') _rebuildPageText();
}

/* ═══════════════════════════════════════════════════════════
   shared.js  — Header + Nav (FR) + Terminal
   Chaque page FR charge shared.js
   Le bouton EN redirige vers *-en.html
═══════════════════════════════════════════════════════════ */

// currentLang is set by i18n.js

function getActivePage() {
  return window.location.pathname.split('/').pop() || 'index.html';
}

function injectShared() {
  currentLang = 'fr';
  const active = getActivePage();
  const enPage = active.replace('.html', '-en.html');

  const pages = [
    { href:'index.html',       icon:'fa-house',          label:'CV'          },
    { href:'formation.html',   icon:'fa-graduation-cap', label:'Formations'  },
    { href:'diplomes.html',    icon:'fa-award',          label:'Diplômes'    },
    { href:'experiences.html', icon:'fa-briefcase',      label:'Expériences' },
    { href:'projets.html',     icon:'fa-code',           label:'Projets'     },
    { href:'competences.html',     icon:'fa-microchip',      label:'Compétences'    },
    { href:'competences-uha.html', icon:'fa-graduation-cap', label:'Compétences UHA'},
    { href:'contact.html',         icon:'fa-envelope',       label:'Contact'        },
  ];

  const desktopLinks = pages.map(p =>
    `<a href="${p.href}" class="${active === p.href ? 'active' : ''}">
      <i class="fa-solid ${p.icon}"></i> <span>${p.label}</span>
    </a>`
  ).join('');

  const drawerLinks = pages.map(p =>
    `<a href="${p.href}" class="${active === p.href ? 'active' : ''}">
      <i class="fa-solid ${p.icon}"></i> ${p.label}
    </a>`
  ).join('');

  const html = `
<header id="site-header">
  <img class="header-avatar" src="images/photo_profil.jpeg" alt="Photo de profil" onerror="this.style.display='none'">
  <div class="header-text">
    <h1>Deiber Benjamin</h1>
    <p class="header-subtitle">Étudiant BUT Réseaux &amp; Télécommunications · Cybersécurité</p>
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
        <button class="lang-btn active" style="cursor:default;">FR</button>
        <a href="${enPage}" class="lang-btn" style="text-decoration:none;">EN</a>
      </div>
      <button class="nav-terminal-btn" id="open-terminal-btn">
        <i class="fa-solid fa-terminal"></i> Terminal <span class="blink">_</span>
      </button>
    </div>
    <button class="hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
  <div class="nav-drawer" id="nav-drawer">${drawerLinks}</div>
</nav>`;

  const placeholder = document.getElementById('shared-header-nav');
  if (placeholder) {
    placeholder.innerHTML = html;
  } else {
    const div = document.createElement('div');
    div.id = 'shared-header-nav';
    div.innerHTML = html;
    document.body.insertBefore(div, document.body.firstChild);
  }

  const burger = document.getElementById('hamburger');
  const drawer = document.getElementById('nav-drawer');
  if (burger && drawer) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      drawer.classList.toggle('open');
    });
  }

  _bindTerminalButton();
}

function _bindTerminalButton() {
  const btn = document.getElementById('open-terminal-btn');
  const overlay = document.getElementById('terminal-overlay');
  if (!btn || !overlay) return;
  const newBtn = btn.cloneNode(true);
  btn.parentNode.replaceChild(newBtn, btn);
  newBtn.addEventListener('click', function() {
    overlay.classList.add('open');
    const inp = document.getElementById('terminal-input');
    if (inp) inp.focus();
  });
}

// stub so pages that call setLang don't error
function setLang(lang) {
  if (lang === 'en') {
    const active = getActivePage();
    window.location.href = active.replace('.html', '-en.html');
  }
}

// stub for pages that call applyTranslations
function applyTranslations() {}

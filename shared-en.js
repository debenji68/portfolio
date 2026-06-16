/* ═══════════════════════════════════════════════════════════
   shared-en.js — Header + Nav (EN)
   Every EN page loads this file
═══════════════════════════════════════════════════════════ */

// currentLang is set by i18n.js, we override to 'en' in injectSharedEn

function getActivePage() {
  return window.location.pathname.split('/').pop() || 'index-en.html';
}

function injectSharedEn() {
  currentLang = 'en';
  const active = getActivePage();
  const frPage = active.replace('-en.html', '.html');

  const pages = [
    { href:'index-en.html',       icon:'fa-house',          label:'CV'         },
    { href:'formation-en.html',   icon:'fa-graduation-cap', label:'Education'  },
    { href:'diplomes-en.html',    icon:'fa-award',          label:'Degrees'    },
    { href:'experiences-en.html', icon:'fa-briefcase',      label:'Experience' },
    { href:'projets-en.html',     icon:'fa-code',           label:'Projects'   },
    { href:'competences-en.html',     icon:'fa-microchip',      label:'Skills'         },
    { href:'competences-uha-en.html', icon:'fa-graduation-cap', label:'UHA Framework'  },
    { href:'contact-en.html',         icon:'fa-envelope',       label:'Contact'        },
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
  <img class="header-avatar" src="images/photo_profil.jpeg" alt="Profile photo" onerror="this.style.display='none'">
  <div class="header-text">
    <h1>Deiber Benjamin</h1>
    <p class="header-subtitle">Systems &amp; Network Admin · 2 years · Alsace</p>
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
        <a href="${frPage}" class="lang-btn" style="text-decoration:none;">FR</a>
        <button class="lang-btn active" style="cursor:default;">EN</button>
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

  _bindTerminalButtonEn();
}

function _bindTerminalButtonEn() {
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

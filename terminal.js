/* ═══════════════════════════════════════════════════════════
   terminal.js  — Terminal emulator (FR/EN bilingue)
   Requires: i18n.js + shared.js loaded first
═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  initTerminal();
});

function initTerminal() {
  const overlay = document.getElementById('terminal-overlay');
  const output  = document.getElementById('terminal-output');
  const input   = document.getElementById('terminal-input');
  const closeBtn= document.getElementById('terminal-close');

  if (!overlay || !output || !input) return;

  // ── Helpers ─────────────────────────────────────────────
  function esc(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }
  function appendLine(type, val) {
    const d = document.createElement('div');
    d.className = 'term-line';
    if (type) d.classList.add('term-out', type);
    d.textContent = val;
    output.appendChild(d);
    output.scrollTop = output.scrollHeight;
  }
  function appendPrompt(cmd) {
    const d = document.createElement('div');
    d.className = 'term-line';
    d.innerHTML = `<span class="term-prompt">benjamin@portfolio:~$</span> <span class="term-cmd">${esc(cmd)}</span>`;
    output.appendChild(d);
    output.scrollTop = output.scrollHeight;
  }
  function lang() {
    return (typeof currentLang !== 'undefined' ? currentLang : 'fr');
  }
  function isFr() { return lang() === 'fr'; }

  // ── Boot message ────────────────────────────────────────
  function getBoot() {
    return isFr() ? [
      { t:'dim',   v:'╔═══════════════════════════════════════════════╗' },
      { t:'cyan',  v:'║  benjamin@portfolio  ~  terminal v2.1         ║' },
      { t:'dim',   v:'╠═══════════════════════════════════════════════╣' },
      { t:'green', v:'║  Bienvenue sur mon portfolio interactif 🚀     ║' },
      { t:'dim',   v:'╚═══════════════════════════════════════════════╝' },
      { t:'',      v:'' },
      { t:'cyan',  v:'Tapez "help" pour la liste des commandes.' },
      { t:'dim',   v:'Conseil : essayez "whoami" ou "cat nas".' },
      { t:'',      v:'' },
    ] : [
      { t:'dim',   v:'╔═══════════════════════════════════════════════╗' },
      { t:'cyan',  v:'║  benjamin@portfolio  ~  terminal v2.1         ║' },
      { t:'dim',   v:'╠═══════════════════════════════════════════════╣' },
      { t:'green', v:'║  Welcome to my interactive portfolio 🚀        ║' },
      { t:'dim',   v:'╚═══════════════════════════════════════════════╝' },
      { t:'',      v:'' },
      { t:'cyan',  v:'Type "help" for the list of commands.' },
      { t:'dim',   v:'Tip: try "whoami" or "cat nas".' },
      { t:'',      v:'' },
    ];
  }

  // ── Commands ────────────────────────────────────────────
  function getCommands() {
    const fr = isFr();
    return {
      help: () => fr ? [
        { t:'cyan',  v:'╔══════════════════ AIDE ══════════════════╗' },
        { t:'',      v:'  whoami · skills · langues · sports · contact · alternance' },
        { t:'',      v:'  ls · clear · history' },
        { t:'gold',  v:'  cat bac · cat brevet · cat pix · cat dsd1' },
        { t:'cyan',  v:'  cat but · cat lycee · cat college' },
        { t:'green', v:'  cat nas · cat stage · cat cvweb · cat mdp' },
        { t:'green', v:'  cat ctf · cat blox · cat streamdeck' },
        { t:'green', v:'  cat sae101 · cat sae102 · cat sae103 · cat sae105' },
        { t:'',      v:'  open <page>  →  index / formations / diplomes / experiences' },
        { t:'',      v:'               →  projets / competences / contact' },
        { t:'',      v:'               →  bac / brevet / pix / dsd1 / but / lycee / college' },
        { t:'',      v:'               →  nas / stage / cvweb / mdp / ctf / blox / streamdeck' },
        { t:'',      v:'               →  sae101 / sae102 / sae103 / sae105' },
        { t:'cyan',  v:'╚══════════════════════════════════════════╝' },
      ] : [
        { t:'cyan',  v:'╔══════════════════ HELP ══════════════════╗' },
        { t:'',      v:'  whoami · skills · languages · sports · contact · workstudy' },
        { t:'',      v:'  ls · clear · history' },
        { t:'gold',  v:'  cat bac · cat brevet · cat pix · cat dsd1' },
        { t:'cyan',  v:'  cat but · cat lycee · cat college' },
        { t:'green', v:'  cat nas · cat stage · cat cvweb · cat mdp' },
        { t:'green', v:'  cat ctf · cat blox · cat streamdeck' },
        { t:'green', v:'  cat sae101 · cat sae102 · cat sae103 · cat sae105' },
        { t:'',      v:'  open <page>  →  index / education / degrees / experience' },
        { t:'',      v:'               →  projects / skills / contact' },
        { t:'',      v:'               →  bac / brevet / pix / dsd1 / but / lycee / college' },
        { t:'',      v:'               →  nas / stage / cvweb / mdp / ctf / blox / streamdeck' },
        { t:'',      v:'               →  sae101 / sae102 / sae103 / sae105' },
        { t:'cyan',  v:'╚══════════════════════════════════════════╝' },
      ],

      whoami: () => fr ? [
        { t:'green', v:'> Deiber Benjamin' },
        { t:'',      v:'  BUT Réseaux & Télécommunications — IUT Colmar' },
        { t:'cyan',  v:'  Passionné cybersécurité & administration système' },
        { t:'',      v:'  📍 Fessenheim, 68740  |  ✉ deiber.benji@gmail.com' },
        { t:'green', v:'  🔍 Recherche alternance — Septembre 2026' },
      ] : [
        { t:'green', v:'> Deiber Benjamin' },
        { t:'',      v:'  BUT Networks & Telecommunications — IUT Colmar' },
        { t:'cyan',  v:'  Passionate about cybersecurity & system administration' },
        { t:'',      v:'  📍 Fessenheim, 68740  |  ✉ deiber.benji@gmail.com' },
        { t:'green', v:'  🔍 Looking for work-study — September 2026' },
      ],

      ls: () => fr ? [
        { t:'cyan',  v:'drwxr-xr-x  formations/     BUT · Lycée · Collège' },
        { t:'cyan',  v:'drwxr-xr-x  diplomes/       Bac · Brevet · PIX · DSD1' },
        { t:'cyan',  v:'drwxr-xr-x  experiences/    Stage Crédit Mutuel' },
        { t:'cyan',  v:'drwxr-xr-x  projets/        NAS · CV Web · MDP · CTF · Blox · Stream Deck' },
        { t:'cyan',  v:'drwxr-xr-x  competences/    20+ compétences' },
        { t:'green', v:'drwxr-xr-x  contact/        Email · GitHub · LinkedIn' },
      ] : [
        { t:'cyan',  v:'drwxr-xr-x  education/      BUT · High School · Middle School' },
        { t:'cyan',  v:'drwxr-xr-x  degrees/        Bac · Brevet · PIX · DSD1' },
        { t:'cyan',  v:'drwxr-xr-x  experience/     Crédit Mutuel Internship' },
        { t:'cyan',  v:'drwxr-xr-x  projects/       NAS · CV Web · MDP · CTF · Blox · Stream Deck' },
        { t:'cyan',  v:'drwxr-xr-x  skills/         20+ skills' },
        { t:'green', v:'drwxr-xr-x  contact/        Email · GitHub · LinkedIn' },
      ],

      skills: () => fr ? [
        { t:'cyan',  v:'── Réseaux & Télécommunications ──' },
        { t:'green', v:'  TCP/IP · VLAN · VPN WireGuard · DHCP · DNS · OSPF · Cisco IOS' },
        { t:'cyan',  v:'── Cybersécurité ──' },
        { t:'green', v:'  iptables · UFW · Fail2Ban · SSL/TLS · Pi-hole · SSH hardening' },
        { t:'cyan',  v:'── Systèmes & Infra ──' },
        { t:'green', v:'  Linux Debian/Ubuntu · Docker · Portainer · Home Assistant · ESPHome' },
        { t:'cyan',  v:'── Développement ──' },
        { t:'green', v:'  Python · Bash · HTML5 · CSS3 · JavaScript · MySQL' },
      ] : [
        { t:'cyan',  v:'── Networks & Telecommunications ──' },
        { t:'green', v:'  TCP/IP · VLAN · WireGuard VPN · DHCP · DNS · OSPF · Cisco IOS' },
        { t:'cyan',  v:'── Cybersecurity ──' },
        { t:'green', v:'  iptables · UFW · Fail2Ban · SSL/TLS · Pi-hole · SSH hardening' },
        { t:'cyan',  v:'── Systems & Infrastructure ──' },
        { t:'green', v:'  Linux Debian/Ubuntu · Docker · Portainer · Home Assistant · ESPHome' },
        { t:'cyan',  v:'── Development ──' },
        { t:'green', v:'  Python · Bash · HTML5 · CSS3 · JavaScript · MySQL' },
      ],

      contact: () => fr ? [
        { t:'cyan',  v:'── Contact ──' },
        { t:'',      v:'  Email    → deiber.benji@gmail.com' },
        { t:'',      v:'  Tél      → 06 37 71 47 14' },
        { t:'cyan',  v:'  GitHub   → github.com/BenjaminDeiber' },
        { t:'cyan',  v:'  LinkedIn → linkedin.com/in/benjamin-deiber/' },
        { t:'green', v:'  Page     → open contact' },
      ] : [
        { t:'cyan',  v:'── Contact ──' },
        { t:'',      v:'  Email    → deiber.benji@gmail.com' },
        { t:'',      v:'  Phone    → +33 6 37 71 47 14' },
        { t:'cyan',  v:'  GitHub   → github.com/BenjaminDeiber' },
        { t:'cyan',  v:'  LinkedIn → linkedin.com/in/benjamin-deiber/' },
        { t:'green', v:'  Page     → open contact' },
      ],

      alternance: () => fr ? [
        { t:'gold',  v:'══ RECHERCHE D\'ALTERNANCE ══' },
        { t:'green', v:'  Disponible : Septembre 2026' },
        { t:'',      v:'  Poste : Administrateur Systèmes & Réseaux' },
        { t:'',      v:'  Durée : 2 ans · BUT R&T IUT Colmar' },
        { t:'',      v:'  Zone  : Alsace, Grand Est' },
        { t:'cyan',  v:'  → open contact  pour me joindre' },
      ] : null,

      workstudy: () => !fr ? [
        { t:'gold',  v:'══ LOOKING FOR WORK-STUDY ══' },
        { t:'green', v:'  Available: September 2026' },
        { t:'',      v:'  Position: Systems & Network Administrator' },
        { t:'',      v:'  Duration: 2 years · BUT R&T IUT Colmar' },
        { t:'',      v:'  Area: Alsace, Grand Est' },
        { t:'cyan',  v:'  → open contact  to reach me' },
      ] : null,

      langues: () => fr ? [
        { t:'cyan', v:'── Langues ──' },
        { t:'green',v:'  Français  → Langue maternelle' },
        { t:'',     v:'  Anglais   → B1 (Intermédiaire)' },
        { t:'',     v:'  Allemand  → DSD1 B1 (Intermédiaire)' },
      ] : null,

      languages: () => !fr ? [
        { t:'cyan', v:'── Languages ──' },
        { t:'green',v:'  French  → Native language' },
        { t:'',     v:'  English → B1 (Intermediate)' },
        { t:'',     v:'  German  → DSD1 B1 (Intermediate)' },
      ] : null,

      sports: () => fr ? [
        { t:'cyan', v:'── Sports & Activités ──' },
        { t:'green',v:'  🥋 Taekwondo  → 9 ans en club' },
        { t:'',     v:'  🤾 Handball   → 3 ans, ailier droit' },
        { t:'',     v:'  🏃 Course     → Semi-marathon 2h30' },
      ] : [
        { t:'cyan', v:'── Sports & Activities ──' },
        { t:'green',v:'  🥋 Taekwondo  → 9 years in club' },
        { t:'',     v:'  🤾 Handball   → 3 years, right wing' },
        { t:'',     v:'  🏃 Running    → Half-marathon 2h30' },
      ],

      history: () => [{ t:'dim', v: fr ? 'Utilise ↑↓ pour parcourir l\'historique.' : 'Use ↑↓ to browse history.' }],

      // cat commands — diplômes
      'cat bac': () => fr ? [
        { t:'gold',v:'══ Bac Général 2025 ══'},
        { t:'green',v:'  14.14/20 — Mention BIEN'},
        { t:'gold',v:'  Grand Oral: 20/20 ★ · NSI: 17/20'},
        { t:'dim',v:'  → open bac'},
      ] : [
        { t:'gold',v:'══ French Baccalaureate 2025 ══'},
        { t:'green',v:'  14.14/20 — Good Honours'},
        { t:'gold',v:'  Grand Oral: 20/20 ★ · NSI: 17/20'},
        { t:'dim',v:'  → open bac'},
      ],

      'cat brevet': () => fr ? [
        { t:'gold',v:'══ Brevet 2022 ══'},
        { t:'green',v:'  17.8/20 — Mention TRÈS BIEN'},
        { t:'',v:'  Oral: 20/20 ★ · CC: 19.5/20'},
        { t:'dim',v:'  → open brevet'},
      ] : [
        { t:'gold',v:'══ Middle School Diploma 2022 ══'},
        { t:'green',v:'  17.8/20 — Very Good Honours'},
        { t:'',v:'  Oral: 20/20 ★ · Continuous: 19.5/20'},
        { t:'dim',v:'  → open brevet'},
      ],

      'cat pix': () => fr ? [
        { t:'gold',v:'══ PIX 2025 ══'},
        { t:'green',v:'  531 pix — Niveau Avancé 1'},
        { t:'',v:'  5 domaines Niveau 5'},
        { t:'dim',v:'  → open pix'},
      ] : [
        { t:'gold',v:'══ PIX Certification 2025 ══'},
        { t:'green',v:'  531 pix — Advanced Level 1'},
        { t:'',v:'  5 domains at Level 5'},
        { t:'dim',v:'  → open pix'},
      ],

      'cat dsd1': () => fr ? [
        { t:'gold',v:'══ DSD1 KMK 2023 ══'},
        { t:'',v:'  Diplôme officiel allemand — B1 global'},
        { t:'green',v:'  Hörverstehen B1 · Schriftl. B1 · Mündl. B1'},
        { t:'dim',v:'  → open dsd1'},
      ] : [
        { t:'gold',v:'══ DSD1 KMK 2023 ══'},
        { t:'',v:'  Official German diploma — B1 overall'},
        { t:'green',v:'  Listening B1 · Writing B1 · Speaking B1'},
        { t:'dim',v:'  → open dsd1'},
      ],

      // cat commands — formations
      'cat but': () => fr ? [
        { t:'gold',v:'══ BUT R&T (2025-2028) ══'},
        { t:'',v:'  IUT Colmar — UHA'},
        { t:'cyan',v:'  Réseaux, Systèmes, Cybersécurité, Développement'},
        { t:'dim',v:'  → open but'},
      ] : [
        { t:'gold',v:'══ BUT R&T (2025-2028) ══'},
        { t:'',v:'  IUT Colmar — University of Haute-Alsace'},
        { t:'cyan',v:'  Networks, Systems, Cybersecurity, Development'},
        { t:'dim',v:'  → open but'},
      ],

      'cat lycee': () => fr ? [
        { t:'gold',v:'══ Lycée Théodore Deck ══'},
        { t:'',v:'  Bac Général NSI + Maths · Guebwiller'},
        { t:'green',v:'  Projet NSI : Générateur MDP Python'},
        { t:'dim',v:'  → open lycee'},
      ] : [
        { t:'gold',v:'══ Théodore Deck High School ══'},
        { t:'',v:'  French Baccalaureate NSI + Maths · Guebwiller'},
        { t:'green',v:'  NSI Project: Python Password Generator'},
        { t:'dim',v:'  → open lycee'},
      ],

      'cat college': () => fr ? [
        { t:'gold',v:'══ Collège Félix Éboué ══'},
        { t:'',v:'  DNB Mention Très Bien (17.8/20) · Fessenheim'},
        { t:'dim',v:'  → open college'},
      ] : [
        { t:'gold',v:'══ Félix Éboué Middle School ══'},
        { t:'',v:'  National Diploma — Very Good Honours (17.8/20)'},
        { t:'dim',v:'  → open college'},
      ],

      // cat commands — projets
      'cat nas': () => fr ? [
        { t:'gold',v:'══ Serveur NAS (2023-présent) ══'},
        { t:'green',v:'  12 services · 24/7 en production'},
        { t:'cyan',v:'  Docker · WireGuard · Home Assistant · Pi-hole'},
        { t:'dim',v:'  → open nas  pour la carte réseau interactive'},
      ] : [
        { t:'gold',v:'══ NAS Server (2023-present) ══'},
        { t:'green',v:'  12 services · Running 24/7'},
        { t:'cyan',v:'  Docker · WireGuard · Home Assistant · Pi-hole'},
        { t:'dim',v:'  → open nas  for the interactive network map'},
      ],

      'cat stage': () => fr ? [
        { t:'gold',v:'══ Stage Crédit Mutuel (Janv. 2022) ══'},
        { t:'',v:'  1 semaine · Agence de Fessenheim'},
        { t:'',v:'  Découverte du secteur bancaire'},
        { t:'dim',v:'  → open stage'},
      ] : [
        { t:'gold',v:'══ Crédit Mutuel Internship (Jan. 2022) ══'},
        { t:'',v:'  1 week · Fessenheim branch'},
        { t:'',v:'  Banking sector discovery'},
        { t:'dim',v:'  → open stage'},
      ],

      'cat cvweb': () => fr ? [
        { t:'gold',v:'══ CV Web — SAÉ 1.04 (2025-2026) ══'},
        { t:'',v:'  Site web CV multi-pages'},
        { t:'cyan',v:'  HTML5 · CSS3 · JavaScript · i18n FR/EN · Terminal'},
        { t:'dim',v:'  → open cvweb'},
      ] : [
        { t:'gold',v:'══ CV Website — SAÉ 1.04 (2025-2026) ══'},
        { t:'',v:'  Multi-page CV website'},
        { t:'cyan',v:'  HTML5 · CSS3 · JavaScript · i18n FR/EN · Terminal'},
        { t:'dim',v:'  → open cvweb'},
      ],

      'cat mdp': () => fr ? [
        { t:'gold',v:'══ Générateur MDP (2024-2025) ══'},
        { t:'',v:'  Python 3 · Tkinter · NSI Terminale'},
        { t:'dim',v:'  → open mdp  pour la démo interactive'},
      ] : [
        { t:'gold',v:'══ Password Generator (2024-2025) ══'},
        { t:'',v:'  Python 3 · Tkinter · High School NSI'},
        { t:'dim',v:'  → open mdp  for the interactive demo'},
      ],

      'cat ctf': () => fr ? [
        { t:'gold',v:'══ CTF Rhin Tech 2025 ══'},
        { t:'green',v:'  🏆 15ème / 40 équipes'},
        { t:'cyan',v:'  Kali Linux · Crypto · Web · Forensic · OSINT'},
        { t:'dim',v:'  → open ctf'},
      ] : [
        { t:'gold',v:'══ CTF Rhin Tech 2025 ══'},
        { t:'green',v:'  🏆 15th out of 40 teams'},
        { t:'cyan',v:'  Kali Linux · Crypto · Web · Forensic · OSINT'},
        { t:'dim',v:'  → open ctf'},
      ],

      'cat blox': () => fr ? [
        { t:'gold',v:'══ Blox DIY — Nanoleaf maison (2024-présent) ══'},
        { t:'',v:'  Panneaux LED réactifs au son — 100% fait maison'},
        { t:'cyan',v:'  ESP32 · WLED · Home Assistant · Impression 3D'},
        { t:'dim',v:'  → open blox'},
      ] : [
        { t:'gold',v:'══ Blox DIY — Homemade Nanoleaf (2024-present) ══'},
        { t:'',v:'  Sound-reactive LED panels — 100% homemade'},
        { t:'cyan',v:'  ESP32 · WLED · Home Assistant · 3D Printing'},
        { t:'dim',v:'  → open blox'},
      ],

      'cat streamdeck': () => fr ? [
        { t:'gold',v:'══ Stream Deck DIY (2024-présent) ══'},
        { t:'',v:'  Contrôleur de touches programmable'},
        { t:'cyan',v:'  Arduino Pro Micro · USB HID · Impression 3D · Soudure'},
        { t:'dim',v:'  → open streamdeck'},
      ] : [
        { t:'gold',v:'══ DIY Stream Deck (2024-present) ══'},
        { t:'',v:'  Programmable macro keypad'},
        { t:'cyan',v:'  Arduino Pro Micro · USB HID · 3D Printing · Soldering'},
        { t:'dim',v:'  → open streamdeck'},
      ],

      'cat sae101': () => fr ? [
        { t:'gold',v:'══ SAÉ 1.01 — Hygiène informatique ══'},
        { t:'',v:'  Vidéo 3 min + diaporama · Cybersécurité'},
        { t:'cyan',v:'  Mots de passe · Recommandations ANSSI'},
        { t:'dim',v:'  → open sae101'},
      ] : [
        { t:'gold',v:'══ SAÉ 1.01 — IT Security Awareness ══'},
        { t:'',v:'  3-min video + slides · Cybersecurity'},
        { t:'cyan',v:'  Passwords · ANSSI guidelines'},
        { t:'dim',v:'  → open sae101'},
      ],

      'cat sae102': () => fr ? [
        { t:'gold',v:'══ SAÉ 1.02 — Réseaux informatiques ══'},
        { t:'',v:'  Infrastructure réseau multi-VLAN sur EVE-NG'},
        { t:'cyan',v:'  Cisco IOS · VLAN · DHCP Linux · Wireshark · VTP'},
        { t:'dim',v:'  → open sae102'},
      ] : [
        { t:'gold',v:'══ SAÉ 1.02 — Computer Networks ══'},
        { t:'',v:'  Multi-VLAN network infrastructure on EVE-NG'},
        { t:'cyan',v:'  Cisco IOS · VLAN · Linux DHCP · Wireshark · VTP'},
        { t:'dim',v:'  → open sae102'},
      ],

      'cat sae103': () => fr ? [
        { t:'gold',v:'══ SAÉ 1.03 — Transmission Wi-Fi ══'},
        { t:'',v:'  Étude réseau Wi-Fi réel — IUT Colmar'},
        { t:'cyan',v:'  Cisco Catalyst 2960 PoE · Heatmaps · iPerf · WLC'},
        { t:'dim',v:'  → open sae103'},
      ] : [
        { t:'gold',v:'══ SAÉ 1.03 — Wi-Fi Transmission ══'},
        { t:'',v:'  Real Wi-Fi network study — IUT Colmar'},
        { t:'cyan',v:'  Cisco Catalyst 2960 PoE · Heatmaps · iPerf · WLC'},
        { t:'dim',v:'  → open sae103'},
      ],

      'cat sae105': () => fr ? [
        { t:'gold',v:'══ SAÉ 1.05 — Traitement de données ══'},
        { t:'',v:'  Outil de reporting Python + PowerShell'},
        { t:'cyan',v:'  PyQt5 · pathlib · QChart · JSON'},
        { t:'dim',v:'  → open sae105'},
      ] : [
        { t:'gold',v:'══ SAÉ 1.05 — Data Processing ══'},
        { t:'',v:'  Python + PowerShell reporting tool'},
        { t:'cyan',v:'  PyQt5 · pathlib · QChart · JSON'},
        { t:'dim',v:'  → open sae105'},
      ],

      clear: () => null,
    };
  }

  // ── Navigation map ───────────────────────────────────────
  const PAGE_MAP = {
    // FR aliases
    index:'index.html', cv:'index.html',
    formations:'formation.html', formation:'formation.html',
    diplomes:'diplomes.html', diplome:'diplomes.html',
    experiences:'experiences.html', experience:'experiences.html',
    projets:'projets.html', projet:'projets.html',
    competences:'competences.html',
    contact:'contact.html',
    bac:'detail-bac.html', brevet:'detail-brevet.html',
    pix:'detail-pix.html', dsd1:'detail-dsd1.html',
    but:'detail-but.html', lycee:'detail-lycee.html', college:'detail-college.html',
    nas:'detail-nas.html', stage:'detail-stage.html',
    cvweb:'detail-cv-web.html', 'cv-web':'detail-cv-web.html',
    mdp:'detail-mdp.html', ctf:'detail-ctf.html',
    blox:'detail-blox.html', streamdeck:'detail-streamdeck.html',
    sae101:'detail-sae101.html', sae102:'detail-sae102.html',
    sae103:'detail-sae103.html', sae105:'detail-sae105.html',
    // EN aliases
    education:'formation.html',
    degrees:'diplomes.html',
    projects:'projets.html', project:'projets.html',
    skills:'competences.html',
    'high-school':'detail-lycee.html', highschool:'detail-lycee.html',
    'middle-school':'detail-college.html',
    internship:'detail-stage.html',
    'password-generator':'detail-mdp.html',
    'stream-deck':'detail-streamdeck.html',
  };

  function handleOpen(arg) {
    const fr = isFr();
    const target = PAGE_MAP[arg.toLowerCase().trim()];
    if (target) {
      appendLine('green', fr ? `→ Navigation vers ${target}…` : `→ Navigating to ${target}…`);
      setTimeout(() => { window.location.href = target; }, 500);
    } else {
      appendLine('red', fr ? `Destination inconnue: "${arg}"` : `Unknown destination: "${arg}"`);
      appendLine('dim', fr
        ? 'Pages: index, formations, diplomes, experiences, projets, competences, contact, bac, brevet, pix, dsd1, but, lycee, college, nas, stage, cvweb, mdp, ctf, blox, streamdeck, sae101-105'
        : 'Pages: index, education, degrees, experience, projects, skills, contact, bac, brevet, pix, dsd1, but, lycee, college, nas, stage, cvweb, mdp, ctf, blox, streamdeck, sae101-105'
      );
    }
  }

  // ── Open/close ───────────────────────────────────────────
  function openTerm() {
    overlay.classList.add('open');
    input.focus();
  }
  function closeTerm() {
    overlay.classList.remove('open');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeTerm);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeTerm(); });

  document.addEventListener('keydown', e => {
    const tag = document.activeElement.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (e.key === '`' || e.key === 'F2') {
      e.preventDefault();
      overlay.classList.contains('open') ? closeTerm() : openTerm();
    }
    if (e.key === 'Escape') closeTerm();
  });

  window._termOpenFn = openTerm;

  // ── Command input ─────────────────────────────────────────
  const hist = []; let histIdx = -1;

  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp')   { if (histIdx < hist.length-1) { histIdx++; input.value = hist[histIdx]; } e.preventDefault(); return; }
    if (e.key === 'ArrowDown') { if (histIdx > 0) { histIdx--; input.value = hist[histIdx]; } else { histIdx=-1; input.value=''; } e.preventDefault(); return; }
    if (e.key !== 'Enter') return;

    const raw = input.value.trim();
    input.value = '';
    if (!raw) return;
    hist.unshift(raw); histIdx = -1;

    appendPrompt(raw);
    const cmd = raw.toLowerCase();

    if (cmd === 'clear') { output.innerHTML = ''; writeBoot(); return; }
    if (cmd.startsWith('open ')) { handleOpen(cmd.slice(5)); appendLine('',''); return; }

    const commands = getCommands();
    const fn = commands[cmd];
    if (fn) {
      const lines = fn();
      if (lines) lines.forEach(l => appendLine(l.t, l.v));
      else {
        // Command exists but returned null (wrong lang alias)
        appendLine('red', isFr() ? `Commande inconnue: "${raw}"` : `Unknown command: "${raw}"`);
        appendLine('dim', isFr() ? 'Tapez "help" pour l\'aide.' : 'Type "help" for help.');
      }
    } else {
      appendLine('red', isFr() ? `Commande inconnue: "${raw}"` : `Unknown command: "${raw}"`);
      appendLine('dim', isFr() ? 'Tapez "help" pour l\'aide.' : 'Type "help" for help.');
    }
    appendLine('', '');
  });

  function writeBoot() {
    getBoot().forEach(l => appendLine(l.t, l.v));
  }

  writeBoot();
}

// Override _bindTerminalButton to use window._termOpenFn if available
function _bindTerminalButton() {
  const btn = document.getElementById('open-terminal-btn');
  const overlay = document.getElementById('terminal-overlay');
  if (!btn || !overlay) return;

  const newBtn = btn.cloneNode(true);
  btn.parentNode.replaceChild(newBtn, btn);

  newBtn.addEventListener('click', function () {
    if (window._termOpenFn) {
      window._termOpenFn();
    } else {
      overlay.classList.add('open');
      const inp = document.getElementById('terminal-input');
      if (inp) inp.focus();
    }
  });
}

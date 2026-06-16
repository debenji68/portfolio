/* ═══════════════════════════════════════════════════════════
   terminal.js  — Terminal émulateur bilingue FR / EN
   Chargement : shared.js (ou shared-en.js) doit être chargé
   avant terminal.js pour que currentLang soit déjà défini.
═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {
  // Petit délai pour laisser shared.js / shared-en.js terminer
  // leur DOMContentLoaded et définir currentLang correctement
  setTimeout(initTerminal, 0);
});

function initTerminal() {
  var overlay  = document.getElementById('terminal-overlay');
  var output   = document.getElementById('terminal-output');
  var input    = document.getElementById('terminal-input');
  var closeBtn = document.getElementById('terminal-close');

  if (!overlay || !output || !input) return;

  // ── Langue ──────────────────────────────────────────────
  function getLang() {
    return (typeof currentLang !== 'undefined' ? currentLang : 'fr');
  }
  function isFr() { return getLang() === 'fr'; }

  // ── Helpers ─────────────────────────────────────────────
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function appendLine(type, val) {
    var d = document.createElement('div');
    d.className = 'term-line';
    if (type) d.classList.add('term-out', type);
    d.textContent = val;
    output.appendChild(d);
    output.scrollTop = output.scrollHeight;
  }

  function appendPrompt(cmd) {
    var d = document.createElement('div');
    d.className = 'term-line';
    d.innerHTML = '<span class="term-prompt">benjamin@portfolio:~$</span> <span class="term-cmd">' + esc(cmd) + '</span>';
    output.appendChild(d);
    output.scrollTop = output.scrollHeight;
  }

  // ── Message de démarrage ────────────────────────────────
  function getBoot() {
    if (isFr()) {
      return [
        { t:'dim',   v:'╔═══════════════════════════════════════════════╗' },
        { t:'cyan',  v:'║  benjamin@portfolio  ~  terminal v2.1         ║' },
        { t:'dim',   v:'╠═══════════════════════════════════════════════╣' },
        { t:'green', v:'║  Bienvenue sur mon portfolio interactif 🚀     ║' },
        { t:'dim',   v:'╚═══════════════════════════════════════════════╝' },
        { t:'',      v:'' },
        { t:'cyan',  v:'Tapez "help" pour la liste des commandes.' },
        { t:'dim',   v:'Conseil : essayez "whoami" ou "cat nas".' },
        { t:'',      v:'' },
      ];
    } else {
      return [
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
  }

  // ── Commandes ────────────────────────────────────────────
  function getCommands() {
    var fr = isFr();
    return {

      help: function () {
        if (fr) return [
          { t:'cyan',  v:'╔══════════════════ AIDE ══════════════════╗' },
          { t:'',      v:'  whoami · skills · langues · sports · contact · alternance' },
          { t:'',      v:'  ls · clear · history' },
          { t:'gold',  v:'  cat bac · cat brevet · cat pix · cat dsd1' },
          { t:'cyan',  v:'  cat but · cat lycee · cat college' },
          { t:'green', v:'  cat nas · cat stage · cat cvweb · cat mdp' },
          { t:'green', v:'  cat ctf · cat blox · cat streamdeck' },
          { t:'green', v:'  cat sae101 · cat sae102 · cat sae103 · cat sae105 · cat sae203' },
          { t:'gold',  v:'  cat uha  →  Référentiel de compétences BUT R&T' },
          { t:'',      v:'  open <page>  →  index / formations / diplomes / experiences' },
          { t:'',      v:'               →  projets / competences / uha / contact' },
          { t:'',      v:'               →  bac / brevet / pix / dsd1 / but / lycee / college' },
          { t:'',      v:'               →  nas / stage / cvweb / mdp / ctf / blox / streamdeck' },
          { t:'',      v:'               →  sae101 / sae102 / sae103 / sae105 / sae203' },
          { t:'cyan',  v:'╚══════════════════════════════════════════╝' },
        ];
        return [
          { t:'cyan',  v:'╔══════════════════ HELP ══════════════════╗' },
          { t:'',      v:'  whoami · skills · languages · sports · contact · workstudy' },
          { t:'',      v:'  ls · clear · history' },
          { t:'gold',  v:'  cat bac · cat brevet · cat pix · cat dsd1' },
          { t:'cyan',  v:'  cat but · cat lycee · cat college' },
          { t:'green', v:'  cat nas · cat stage · cat cvweb · cat mdp' },
          { t:'green', v:'  cat ctf · cat blox · cat streamdeck' },
          { t:'green', v:'  cat sae101 · cat sae102 · cat sae103 · cat sae105 · cat sae203' },
          { t:'gold',  v:'  cat uha  →  UHA Competency Framework' },
          { t:'',      v:'  open <page>  →  index / education / degrees / experience' },
          { t:'',      v:'               →  projects / skills / uha / contact' },
          { t:'',      v:'               →  bac / brevet / pix / dsd1 / but / lycee / college' },
          { t:'',      v:'               →  nas / stage / cvweb / mdp / ctf / blox / streamdeck' },
          { t:'',      v:'               →  sae101 / sae102 / sae103 / sae105 / sae203' },
          { t:'cyan',  v:'╚══════════════════════════════════════════╝' },
        ];
      },

      whoami: function () {
        if (fr) return [
          { t:'green', v:'> Deiber Benjamin' },
          { t:'',      v:'  BUT Réseaux & Télécommunications — IUT Colmar' },
          { t:'cyan',  v:'  Passionné cybersécurité & administration système' },
          { t:'',      v:'  📍 Fessenheim, 68740  |  ✉ deiber.benji@gmail.com' },
          { t:'green', v:'  🔍 Recherche alternance — Septembre 2026' },
        ];
        return [
          { t:'green', v:'> Deiber Benjamin' },
          { t:'',      v:'  BUT Networks & Telecommunications — IUT Colmar' },
          { t:'cyan',  v:'  Passionate about cybersecurity & system administration' },
          { t:'',      v:'  📍 Fessenheim, 68740  |  ✉ deiber.benji@gmail.com' },
          { t:'green', v:'  🔍 Looking for work-study — September 2026' },
        ];
      },

      ls: function () {
        if (fr) return [
          { t:'cyan',  v:'drwxr-xr-x  formations/     BUT · Lycée · Collège' },
          { t:'cyan',  v:'drwxr-xr-x  diplomes/       Bac · Brevet · PIX · DSD1' },
          { t:'cyan',  v:'drwxr-xr-x  experiences/    Stage Crédit Mutuel' },
          { t:'cyan',  v:'drwxr-xr-x  projets/        NAS · CV Web · MDP · CTF · Blox · Stream Deck' },
          { t:'cyan',  v:'drwxr-xr-x  competences/    20+ compétences' },
          { t:'green', v:'drwxr-xr-x  contact/        Email · GitHub · LinkedIn' },
        ];
        return [
          { t:'cyan',  v:'drwxr-xr-x  education/      BUT · High School · Middle School' },
          { t:'cyan',  v:'drwxr-xr-x  degrees/        Bac · Brevet · PIX · DSD1' },
          { t:'cyan',  v:'drwxr-xr-x  experience/     Crédit Mutuel Internship' },
          { t:'cyan',  v:'drwxr-xr-x  projects/       NAS · CV Web · MDP · CTF · Blox · Stream Deck' },
          { t:'cyan',  v:'drwxr-xr-x  skills/         20+ skills' },
          { t:'green', v:'drwxr-xr-x  contact/        Email · GitHub · LinkedIn' },
        ];
      },

      skills: function () {
        if (fr) return [
          { t:'cyan',  v:'── Réseaux & Télécommunications ──' },
          { t:'green', v:'  TCP/IP · VLAN · VPN WireGuard · DHCP · DNS · OSPF · Cisco IOS' },
          { t:'cyan',  v:'── Cybersécurité ──' },
          { t:'green', v:'  iptables · UFW · Fail2Ban · SSL/TLS · Pi-hole · SSH hardening' },
          { t:'cyan',  v:'── Systèmes & Infra ──' },
          { t:'green', v:'  Linux Debian/Ubuntu · Docker · Portainer · Home Assistant · ESPHome' },
          { t:'cyan',  v:'── Développement ──' },
          { t:'green', v:'  Python · Bash · HTML5 · CSS3 · JavaScript · MySQL' },
        ];
        return [
          { t:'cyan',  v:'── Networks & Telecommunications ──' },
          { t:'green', v:'  TCP/IP · VLAN · WireGuard VPN · DHCP · DNS · OSPF · Cisco IOS' },
          { t:'cyan',  v:'── Cybersecurity ──' },
          { t:'green', v:'  iptables · UFW · Fail2Ban · SSL/TLS · Pi-hole · SSH hardening' },
          { t:'cyan',  v:'── Systems & Infrastructure ──' },
          { t:'green', v:'  Linux Debian/Ubuntu · Docker · Portainer · Home Assistant · ESPHome' },
          { t:'cyan',  v:'── Development ──' },
          { t:'green', v:'  Python · Bash · HTML5 · CSS3 · JavaScript · MySQL' },
        ];
      },

      contact: function () {
        if (fr) return [
          { t:'cyan',  v:'── Contact ──' },
          { t:'',      v:'  Email    → deiber.benji@gmail.com' },
          { t:'',      v:'  Tél      → 06 37 71 47 14' },
          { t:'cyan',  v:'  GitHub   → github.com/BenjaminDeiber' },
          { t:'cyan',  v:'  LinkedIn → linkedin.com/in/benjamin-deiber/' },
          { t:'green', v:'  Page     → open contact' },
        ];
        return [
          { t:'cyan',  v:'── Contact ──' },
          { t:'',      v:'  Email    → deiber.benji@gmail.com' },
          { t:'',      v:'  Phone    → +33 6 37 71 47 14' },
          { t:'cyan',  v:'  GitHub   → github.com/BenjaminDeiber' },
          { t:'cyan',  v:'  LinkedIn → linkedin.com/in/benjamin-deiber/' },
          { t:'green', v:'  Page     → open contact' },
        ];
      },

      alternance: function () {
        if (!fr) return null;
        return [
          { t:'gold',  v:"══ RECHERCHE D'ALTERNANCE ══" },
          { t:'green', v:'  Disponible : Septembre 2026' },
          { t:'',      v:'  Poste : Administrateur Systèmes & Réseaux' },
          { t:'',      v:'  Durée : 2 ans · BUT R&T IUT Colmar' },
          { t:'',      v:'  Zone  : Alsace, Grand Est' },
          { t:'cyan',  v:'  → open contact  pour me joindre' },
        ];
      },

      workstudy: function () {
        if (fr) return null;
        return [
          { t:'gold',  v:'══ LOOKING FOR WORK-STUDY ══' },
          { t:'green', v:'  Available: September 2026' },
          { t:'',      v:'  Position: Systems & Network Administrator' },
          { t:'',      v:'  Duration: 2 years · BUT R&T IUT Colmar' },
          { t:'',      v:'  Area: Alsace, Grand Est' },
          { t:'cyan',  v:'  → open contact  to reach me' },
        ];
      },

      langues: function () {
        if (!fr) return null;
        return [
          { t:'cyan',  v:'── Langues ──' },
          { t:'green', v:'  Français  → Langue maternelle' },
          { t:'',      v:'  Anglais   → B1 (Intermédiaire)' },
          { t:'',      v:'  Allemand  → DSD1 B1 (Intermédiaire)' },
        ];
      },

      languages: function () {
        if (fr) return null;
        return [
          { t:'cyan',  v:'── Languages ──' },
          { t:'green', v:'  French  → Native language' },
          { t:'',      v:'  English → B1 (Intermediate)' },
          { t:'',      v:'  German  → DSD1 B1 (Intermediate)' },
        ];
      },

      sports: function () {
        if (fr) return [
          { t:'cyan',  v:'── Sports & Activités ──' },
          { t:'green', v:'  🥋 Taekwondo  → 9 ans en club' },
          { t:'',      v:'  🤾 Handball   → 3 ans, ailier droit' },
          { t:'',      v:'  🏃 Course     → Semi-marathon 2h30' },
        ];
        return [
          { t:'cyan',  v:'── Sports & Activities ──' },
          { t:'green', v:'  🥋 Taekwondo  → 9 years in club' },
          { t:'',      v:'  🤾 Handball   → 3 years, right wing' },
          { t:'',      v:'  🏃 Running    → Half-marathon 2h30' },
        ];
      },

      history: function () {
        return [{ t:'dim', v: fr ? "Utilise ↑↓ pour parcourir l'historique." : 'Use ↑↓ to browse history.' }];
      },

      // ── cat diplômes ──────────────────────────────────────
      'cat bac': function () {
        if (fr) return [
          { t:'gold',  v:'══ Bac Général 2025 ══' },
          { t:'green', v:'  14.14/20 — Mention BIEN' },
          { t:'gold',  v:'  Grand Oral : 20/20 ★ · NSI : 17/20' },
          { t:'dim',   v:'  → open bac' },
        ];
        return [
          { t:'gold',  v:'══ French Baccalaureate 2025 ══' },
          { t:'green', v:'  14.14/20 — Good Honours' },
          { t:'gold',  v:'  Grand Oral: 20/20 ★ · NSI: 17/20' },
          { t:'dim',   v:'  → open bac' },
        ];
      },

      'cat brevet': function () {
        if (fr) return [
          { t:'gold',  v:'══ Brevet 2022 ══' },
          { t:'green', v:'  17.8/20 — Mention TRÈS BIEN' },
          { t:'',      v:'  Oral : 20/20 ★ · CC : 19.5/20' },
          { t:'dim',   v:'  → open brevet' },
        ];
        return [
          { t:'gold',  v:'══ Middle School Diploma 2022 ══' },
          { t:'green', v:'  17.8/20 — Very Good Honours' },
          { t:'',      v:'  Oral: 20/20 ★ · Continuous: 19.5/20' },
          { t:'dim',   v:'  → open brevet' },
        ];
      },

      'cat pix': function () {
        if (fr) return [
          { t:'gold',  v:'══ PIX 2025 ══' },
          { t:'green', v:'  531 pix — Niveau Avancé 1' },
          { t:'',      v:'  5 domaines Niveau 5' },
          { t:'dim',   v:'  → open pix' },
        ];
        return [
          { t:'gold',  v:'══ PIX Certification 2025 ══' },
          { t:'green', v:'  531 pix — Advanced Level 1' },
          { t:'',      v:'  5 domains at Level 5' },
          { t:'dim',   v:'  → open pix' },
        ];
      },

      'cat dsd1': function () {
        if (fr) return [
          { t:'gold',  v:'══ DSD1 KMK 2023 ══' },
          { t:'',      v:'  Diplôme officiel allemand — B1 global' },
          { t:'green', v:'  Hörverstehen B1 · Schriftl. B1 · Mündl. B1' },
          { t:'dim',   v:'  → open dsd1' },
        ];
        return [
          { t:'gold',  v:'══ DSD1 KMK 2023 ══' },
          { t:'',      v:'  Official German diploma — B1 overall' },
          { t:'green', v:'  Listening B1 · Writing B1 · Speaking B1' },
          { t:'dim',   v:'  → open dsd1' },
        ];
      },

      // ── cat formations ────────────────────────────────────
      'cat but': function () {
        if (fr) return [
          { t:'gold',  v:'══ BUT R&T (2025-2028) ══' },
          { t:'',      v:'  IUT Colmar — UHA' },
          { t:'cyan',  v:'  Réseaux, Systèmes, Cybersécurité, Développement' },
          { t:'dim',   v:'  → open but' },
        ];
        return [
          { t:'gold',  v:'══ BUT R&T (2025-2028) ══' },
          { t:'',      v:'  IUT Colmar — University of Haute-Alsace' },
          { t:'cyan',  v:'  Networks, Systems, Cybersecurity, Development' },
          { t:'dim',   v:'  → open but' },
        ];
      },

      'cat lycee': function () {
        if (fr) return [
          { t:'gold',  v:'══ Lycée Théodore Deck ══' },
          { t:'',      v:'  Bac Général NSI + Maths · Guebwiller' },
          { t:'green', v:'  Projet NSI : Générateur MDP Python' },
          { t:'dim',   v:'  → open lycee' },
        ];
        return [
          { t:'gold',  v:'══ Théodore Deck High School ══' },
          { t:'',      v:'  French Baccalaureate NSI + Maths · Guebwiller' },
          { t:'green', v:'  NSI Project: Python Password Generator' },
          { t:'dim',   v:'  → open lycee' },
        ];
      },

      'cat college': function () {
        if (fr) return [
          { t:'gold',  v:'══ Collège Félix Éboué ══' },
          { t:'',      v:'  DNB Mention Très Bien (17.8/20) · Fessenheim' },
          { t:'dim',   v:'  → open college' },
        ];
        return [
          { t:'gold',  v:'══ Félix Éboué Middle School ══' },
          { t:'',      v:'  National Diploma — Very Good Honours (17.8/20)' },
          { t:'dim',   v:'  → open college' },
        ];
      },

      // ── cat projets ───────────────────────────────────────
      'cat nas': function () {
        if (fr) return [
          { t:'gold',  v:'══ Serveur NAS (2023-présent) ══' },
          { t:'green', v:'  12 services · 24/7 en production' },
          { t:'cyan',  v:'  Docker · WireGuard · Home Assistant · Pi-hole' },
          { t:'dim',   v:'  → open nas  pour la carte réseau interactive' },
        ];
        return [
          { t:'gold',  v:'══ NAS Server (2023-present) ══' },
          { t:'green', v:'  12 services · Running 24/7' },
          { t:'cyan',  v:'  Docker · WireGuard · Home Assistant · Pi-hole' },
          { t:'dim',   v:'  → open nas  for the interactive network map' },
        ];
      },

      'cat stage': function () {
        if (fr) return [
          { t:'gold',  v:'══ Stage Crédit Mutuel (Janv. 2022) ══' },
          { t:'',      v:'  1 semaine · Agence de Fessenheim' },
          { t:'',      v:'  Découverte du secteur bancaire' },
          { t:'dim',   v:'  → open stage' },
        ];
        return [
          { t:'gold',  v:'══ Crédit Mutuel Internship (Jan. 2022) ══' },
          { t:'',      v:'  1 week · Fessenheim branch' },
          { t:'',      v:'  Banking sector discovery' },
          { t:'dim',   v:'  → open stage' },
        ];
      },

      'cat cvweb': function () {
        if (fr) return [
          { t:'gold',  v:'══ CV Web — SAÉ 1.04 (2025-2026) ══' },
          { t:'',      v:'  Site web CV multi-pages' },
          { t:'cyan',  v:'  HTML5 · CSS3 · JavaScript · i18n FR/EN · Terminal' },
          { t:'dim',   v:'  → open cvweb' },
        ];
        return [
          { t:'gold',  v:'══ CV Website — SAÉ 1.04 (2025-2026) ══' },
          { t:'',      v:'  Multi-page CV website' },
          { t:'cyan',  v:'  HTML5 · CSS3 · JavaScript · i18n FR/EN · Terminal' },
          { t:'dim',   v:'  → open cvweb' },
        ];
      },

      'cat mdp': function () {
        if (fr) return [
          { t:'gold',  v:'══ Générateur MDP (2024-2025) ══' },
          { t:'',      v:'  Python 3 · Tkinter · NSI Terminale' },
          { t:'dim',   v:'  → open mdp  pour la démo interactive' },
        ];
        return [
          { t:'gold',  v:'══ Password Generator (2024-2025) ══' },
          { t:'',      v:'  Python 3 · Tkinter · High School NSI' },
          { t:'dim',   v:'  → open mdp  for the interactive demo' },
        ];
      },

      'cat ctf': function () {
        if (fr) return [
          { t:'gold',  v:'══ CTF Rhin Tech 2025 ══' },
          { t:'green', v:'  🏆 15ème / 40 équipes' },
          { t:'cyan',  v:'  Kali Linux · Crypto · Web · Forensic · OSINT' },
          { t:'dim',   v:'  → open ctf' },
        ];
        return [
          { t:'gold',  v:'══ CTF Rhin Tech 2025 ══' },
          { t:'green', v:'  🏆 15th out of 40 teams' },
          { t:'cyan',  v:'  Kali Linux · Crypto · Web · Forensic · OSINT' },
          { t:'dim',   v:'  → open ctf' },
        ];
      },

      'cat blox': function () {
        if (fr) return [
          { t:'gold',  v:'══ Blox DIY — Nanoleaf maison (2024-présent) ══' },
          { t:'',      v:'  Panneaux LED réactifs au son — 100% fait maison' },
          { t:'cyan',  v:'  ESP32 · WLED · Home Assistant · Impression 3D' },
          { t:'dim',   v:'  → open blox' },
        ];
        return [
          { t:'gold',  v:'══ Blox DIY — Homemade Nanoleaf (2024-present) ══' },
          { t:'',      v:'  Sound-reactive LED panels — 100% homemade' },
          { t:'cyan',  v:'  ESP32 · WLED · Home Assistant · 3D Printing' },
          { t:'dim',   v:'  → open blox' },
        ];
      },

      'cat streamdeck': function () {
        if (fr) return [
          { t:'gold',  v:'══ Stream Deck DIY (2024-présent) ══' },
          { t:'',      v:'  Contrôleur de touches programmable' },
          { t:'cyan',  v:'  Arduino Pro Micro · USB HID · Impression 3D · Soudure' },
          { t:'dim',   v:'  → open streamdeck' },
        ];
        return [
          { t:'gold',  v:'══ DIY Stream Deck (2024-present) ══' },
          { t:'',      v:'  Programmable macro keypad' },
          { t:'cyan',  v:'  Arduino Pro Micro · USB HID · 3D Printing · Soldering' },
          { t:'dim',   v:'  → open streamdeck' },
        ];
      },

      // ── cat SAÉ ───────────────────────────────────────────
      'cat sae101': function () {
        if (fr) return [
          { t:'gold',  v:'══ SAÉ 1.01 — Hygiène informatique ══' },
          { t:'',      v:'  Vidéo 3 min + diaporama · Cybersécurité' },
          { t:'cyan',  v:'  Mots de passe · Recommandations ANSSI' },
          { t:'dim',   v:'  → open sae101' },
        ];
        return [
          { t:'gold',  v:'══ SAÉ 1.01 — IT Security Awareness ══' },
          { t:'',      v:'  3-min video + slides · Cybersecurity' },
          { t:'cyan',  v:'  Passwords · ANSSI guidelines' },
          { t:'dim',   v:'  → open sae101' },
        ];
      },

      'cat sae102': function () {
        if (fr) return [
          { t:'gold',  v:'══ SAÉ 1.02 — Réseaux informatiques ══' },
          { t:'',      v:'  Infrastructure réseau multi-VLAN sur EVE-NG' },
          { t:'cyan',  v:'  Cisco IOS · VLAN · DHCP Linux · Wireshark · VTP' },
          { t:'dim',   v:'  → open sae102' },
        ];
        return [
          { t:'gold',  v:'══ SAÉ 1.02 — Computer Networks ══' },
          { t:'',      v:'  Multi-VLAN network infrastructure on EVE-NG' },
          { t:'cyan',  v:'  Cisco IOS · VLAN · Linux DHCP · Wireshark · VTP' },
          { t:'dim',   v:'  → open sae102' },
        ];
      },

      'cat sae103': function () {
        if (fr) return [
          { t:'gold',  v:'══ SAÉ 1.03 — Transmission Wi-Fi ══' },
          { t:'',      v:'  Étude réseau Wi-Fi réel — IUT Colmar' },
          { t:'cyan',  v:'  Cisco Catalyst 2960 PoE · Heatmaps · iPerf · WLC' },
          { t:'dim',   v:'  → open sae103' },
        ];
        return [
          { t:'gold',  v:'══ SAÉ 1.03 — Wi-Fi Transmission ══' },
          { t:'',      v:'  Real Wi-Fi network study — IUT Colmar' },
          { t:'cyan',  v:'  Cisco Catalyst 2960 PoE · Heatmaps · iPerf · WLC' },
          { t:'dim',   v:'  → open sae103' },
        ];
      },

      'cat sae105': function () {
        if (fr) return [
          { t:'gold',  v:'══ SAÉ 1.05 — Traitement de données ══' },
          { t:'',      v:'  Outil de reporting Python + PowerShell' },
          { t:'cyan',  v:'  PyQt5 · pathlib · QChart · JSON' },
          { t:'dim',   v:'  → open sae105' },
        ];
        return [
          { t:'gold',  v:'══ SAÉ 1.05 — Data Processing ══' },
          { t:'',      v:'  Python + PowerShell reporting tool' },
          { t:'cyan',  v:'  PyQt5 · pathlib · QChart · JSON' },
          { t:'dim',   v:'  → open sae105' },
        ];
      },

      'cat uha': function () {
        if (fr) return [
          { t:'gold',  v:'══ Référentiel de Compétences UHA ══' },
          { t:'cyan',  v:'  UE1 — Administrer les réseaux et l\'Internet' },
          { t:'',      v:'       5 AC · 5 CE' },
          { t:'green', v:'  UE2 — Connecter les entreprises et les usagers' },
          { t:'',      v:'       4 AC · 3 CE' },
          { t:'',      v:'  UE3 — Créer des outils et applications informatiques' },
          { t:'',      v:'       6 AC · 3 CE' },
          { t:'dim',   v:'  → open uha' },
        ];
        return [
          { t:'gold',  v:'══ UHA Competency Framework ══' },
          { t:'cyan',  v:'  UE1 — Administer Networks and the Internet' },
          { t:'',      v:'       5 AC · 5 CE' },
          { t:'green', v:'  UE2 — Connect Companies and Users' },
          { t:'',      v:'       4 AC · 3 CE' },
          { t:'',      v:'  UE3 — Create IT Tools and Applications' },
          { t:'',      v:'       6 AC · 3 CE' },
          { t:'dim',   v:'  → open uha' },
        ];
      },

      'cat sae203': function () {
        if (fr) return [
          { t:'gold',  v:'══ SAÉ 2.03 — Application web Ludothèque ══' },
          { t:'',      v:'  Django · MariaDB · Nginx · Gunicorn · VirtualBox' },
          { t:'',      v:'  CRUD : Joueur · Commentaire · Liste de jeux' },
          { t:'',      v:'  2 VMs Linux · BDD séparée · Déploiement prod' },
          { t:'cyan',  v:'  Python · Django · MariaDB · Nginx · Gunicorn' },
          { t:'dim',   v:'  → open sae203' },
        ];
        return [
          { t:'gold',  v:'══ SAÉ 2.03 — Board Game Library Web App ══' },
          { t:'',      v:'  Django · MariaDB · Nginx · Gunicorn · VirtualBox' },
          { t:'',      v:'  CRUD: Player · Comment · Game list' },
          { t:'',      v:'  2 Linux VMs · Separate DB server · Prod deploy' },
          { t:'cyan',  v:'  Python · Django · MariaDB · Nginx · Gunicorn' },
          { t:'dim',   v:'  → open sae203' },
        ];
      },

      clear: function () { return null; },
    };
  }

  // ── Carte de navigation ──────────────────────────────────
  // Chaque clé → [page_FR, page_EN]
  var PAGE_MAP = {
    index:        ['index.html',             'index-en.html'],
    cv:           ['index.html',             'index-en.html'],
    formations:   ['formation.html',         'formation-en.html'],
    formation:    ['formation.html',         'formation-en.html'],
    diplomes:     ['diplomes.html',          'diplomes-en.html'],
    diplome:      ['diplomes.html',          'diplomes-en.html'],
    experiences:  ['experiences.html',       'experiences-en.html'],
    experience:   ['experiences.html',       'experiences-en.html'],
    projets:      ['projets.html',           'projets-en.html'],
    projet:       ['projets.html',           'projets-en.html'],
    competences:  ['competences.html',       'competences-en.html'],
    uha:          ['competences-uha.html',   'competences-uha-en.html'],
    'competences-uha': ['competences-uha.html', 'competences-uha-en.html'],
    'uha-framework':   ['competences-uha.html', 'competences-uha-en.html'],
    contact:      ['contact.html',           'contact-en.html'],
    bac:          ['detail-bac.html',        'detail-bac-en.html'],
    brevet:       ['detail-brevet.html',     'detail-brevet-en.html'],
    pix:          ['detail-pix.html',        'detail-pix-en.html'],
    dsd1:         ['detail-dsd1.html',       'detail-dsd1-en.html'],
    but:          ['detail-but.html',        'detail-but-en.html'],
    lycee:        ['detail-lycee.html',      'detail-lycee-en.html'],
    college:      ['detail-college.html',    'detail-college-en.html'],
    nas:          ['detail-nas.html',        'detail-nas-en.html'],
    stage:        ['detail-stage.html',      'detail-stage-en.html'],
    cvweb:        ['detail-cv-web.html',     'detail-cv-web-en.html'],
    'cv-web':     ['detail-cv-web.html',     'detail-cv-web-en.html'],
    mdp:          ['detail-mdp.html',        'detail-mdp-en.html'],
    ctf:          ['detail-ctf.html',        'detail-ctf-en.html'],
    blox:         ['detail-blox.html',       'detail-blox-en.html'],
    streamdeck:   ['detail-streamdeck.html', 'detail-streamdeck-en.html'],
    sae101:       ['detail-sae101.html',     'detail-sae101-en.html'],
    sae102:       ['detail-sae102.html',     'detail-sae102-en.html'],
    sae103:       ['detail-sae103.html',     'detail-sae103-en.html'],
    sae105:       ['detail-sae105.html',     'detail-sae105-en.html'],
    sae203:       ['detail-sae203.html',     'detail-sae203-en.html'],
    // alias EN uniquement
    education:           ['formation.html',         'formation-en.html'],
    degrees:             ['diplomes.html',           'diplomes-en.html'],
    projects:            ['projets.html',            'projets-en.html'],
    project:             ['projets.html',            'projets-en.html'],
    skills:              ['competences.html',        'competences-en.html'],
    'high-school':       ['detail-lycee.html',       'detail-lycee-en.html'],
    highschool:          ['detail-lycee.html',       'detail-lycee-en.html'],
    'middle-school':     ['detail-college.html',     'detail-college-en.html'],
    internship:          ['detail-stage.html',       'detail-stage-en.html'],
    'password-generator':['detail-mdp.html',         'detail-mdp-en.html'],
    'stream-deck':       ['detail-streamdeck.html',  'detail-streamdeck-en.html'],
  };

  function handleOpen(arg) {
    var fr    = isFr();
    var entry = PAGE_MAP[arg.toLowerCase().trim()];
    if (entry) {
      var target = fr ? entry[0] : entry[1];
      appendLine('green', fr
        ? ('→ Navigation vers ' + target + '…')
        : ('→ Navigating to ' + target + '…'));
      setTimeout(function () { window.location.href = target; }, 500);
    } else {
      appendLine('red', fr
        ? ('Destination inconnue : "' + arg + '"')
        : ('Unknown destination: "' + arg + '"'));
      appendLine('dim', fr
        ? 'Pages : index, formations, diplomes, experiences, projets, competences, uha, contact, bac, brevet, pix, dsd1, but, lycee, college, nas, stage, cvweb, mdp, ctf, blox, streamdeck, sae101-105, sae203'
        : 'Pages: index, education, degrees, experience, projects, skills, uha, contact, bac, brevet, pix, dsd1, but, lycee, college, nas, stage, cvweb, mdp, ctf, blox, streamdeck, sae101-105, sae203');
    }
  }

  // ── Ouverture / fermeture ────────────────────────────────
  function openTerm() {
    overlay.classList.add('open');
    input.focus();
  }
  function closeTerm() {
    overlay.classList.remove('open');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeTerm);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeTerm();
  });

  document.addEventListener('keydown', function (e) {
    var tag = document.activeElement.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (e.key === '`' || e.key === 'F2') {
      e.preventDefault();
      overlay.classList.contains('open') ? closeTerm() : openTerm();
    }
    if (e.key === 'Escape') closeTerm();
  });

  window._termOpenFn = openTerm;

  // ── Saisie de commandes ──────────────────────────────────
  var hist = []; var histIdx = -1;

  input.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowUp') {
      if (histIdx < hist.length - 1) { histIdx++; input.value = hist[histIdx]; }
      e.preventDefault(); return;
    }
    if (e.key === 'ArrowDown') {
      if (histIdx > 0) { histIdx--; input.value = hist[histIdx]; }
      else { histIdx = -1; input.value = ''; }
      e.preventDefault(); return;
    }
    if (e.key !== 'Enter') return;

    var raw = input.value.trim();
    input.value = '';
    if (!raw) return;
    hist.unshift(raw); histIdx = -1;

    appendPrompt(raw);
    var cmd = raw.toLowerCase();

    if (cmd === 'clear') { output.innerHTML = ''; writeBoot(); return; }
    if (cmd.startsWith('open ')) { handleOpen(cmd.slice(5)); appendLine('', ''); return; }

    var commands = getCommands();
    var fn = commands[cmd];
    if (fn) {
      var lines = fn();
      if (lines) {
        lines.forEach(function (l) { appendLine(l.t, l.v); });
      } else {
        appendLine('red', isFr()
          ? ('Commande inconnue : "' + raw + '"')
          : ('Unknown command: "' + raw + '"'));
        appendLine('dim', isFr()
          ? "Tapez \"help\" pour l'aide."
          : 'Type "help" for help.');
      }
    } else {
      appendLine('red', isFr()
        ? ('Commande inconnue : "' + raw + '"')
        : ('Unknown command: "' + raw + '"'));
      appendLine('dim', isFr()
        ? "Tapez \"help\" pour l'aide."
        : 'Type "help" for help.');
    }
    appendLine('', '');
  });

  // ── Boot ─────────────────────────────────────────────────
  function writeBoot() {
    getBoot().forEach(function (l) { appendLine(l.t, l.v); });
  }

  writeBoot();
}

// Permet au bouton "Terminal" dans la nav d'ouvrir le terminal
function _bindTerminalButton() {
  var btn     = document.getElementById('open-terminal-btn');
  var overlay = document.getElementById('terminal-overlay');
  if (!btn || !overlay) return;

  var newBtn = btn.cloneNode(true);
  btn.parentNode.replaceChild(newBtn, btn);

  newBtn.addEventListener('click', function () {
    if (window._termOpenFn) {
      window._termOpenFn();
    } else {
      overlay.classList.add('open');
      var inp = document.getElementById('terminal-input');
      if (inp) inp.focus();
    }
  });
}

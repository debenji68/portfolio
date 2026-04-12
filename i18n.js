/* ═══════════════════════════════════════════════
   i18n.js — FR/EN translation system
   Benjamin Deiber Portfolio
═══════════════════════════════════════════════ */

const TRANSLATIONS = {
  fr: {
    // Nav
    nav_cv: 'CV', nav_formations: 'Formations', nav_diplomes: 'Diplômes',
    nav_experiences: 'Expériences', nav_competences: 'Compétences',
    nav_contact: 'Contact', nav_terminal: 'Terminal',
    // Index
    alternance_title: 'Recherche d\'alternance — Septembre 2026',
    alternance_sub: 'Administrateur Systèmes & Réseaux · 2 ans · Alsace & Grand Est',
    alternance_btn: 'Me contacter',
    section_formations: 'Formations', section_diplomes: 'Diplômes',
    section_exp: 'Expériences & Projets', section_skills: 'Compétences',
    section_info: 'Informations complémentaires',
    open_detail: 'Voir le détail',
    back_top: 'RETOUR EN HAUT',
    // Competences page
    cpt_title: 'Compétences techniques',
    cpt_sub: 'Filtrez par catégorie, recherchez un outil ou une technologie.',
    cpt_filter_all: 'Tout', cpt_filter_sys: 'Systèmes', cpt_filter_net: 'Réseaux',
    cpt_filter_sec: 'Sécurité', cpt_filter_dev: 'Développement',
    cpt_filter_auto: 'Automatisation', cpt_filter_iot: 'IoT & Domotique',
    cpt_filter_db: 'Bases de données', cpt_filter_web: 'Web',
    search_placeholder: 'Rechercher une compétence, un outil…',
    sort_label: 'Trier :',
    sort_level: 'par niveau',
    sort_alpha: 'alphabétique',
    results_label: 'Résultats',
    modal_doing: 'Ce que je fais',
    modal_tools: 'Outils et sujets liés',
    modal_proof: 'Preuve',
    modal_proof_placeholder: '📁 Emplacement réservé — ajoutez vos captures d\'écran ou documents ici.',
    modal_links: 'Liens utiles',
    modal_close: 'Fermer',
    see_homelab: 'Voir le projet NAS',
    see_project: 'Voir le projet',
    // Experiences
    tab_pro: 'Expériences professionnelles',
    tab_proj: 'Projets',
    // Contact
    contact_title: 'Contact',
    form_firstname: 'Prénom', form_lastname: 'Nom',
    form_email: 'Email', form_company: 'Entreprise / Organisation',
    form_subject: 'Sujet', form_message: 'Message',
    form_send: 'ENVOYER LE MESSAGE',
    form_sending: 'Envoi en cours…',
    form_success: 'Message envoyé ! Je vous répondrai dans les plus brefs délais.',
    // Referentiel
    ref_title: 'Référentiel de compétences BUT R&T',
    ref_ac: 'Apprentissages Critiques (AC)',
    ref_ce: 'Critères d\'Évaluation (CE)',
    // Footer
    footer_terminal: 'pour le terminal',
    // Common
    back: 'Retour',
    proof_placeholder: '📁 Preuve à ajouter — glissez vos fichiers ici ou cliquez pour sélectionner.',
  },
  en: {
    nav_cv: 'CV', nav_formations: 'Education', nav_diplomes: 'Degrees',
    nav_experiences: 'Experience', nav_competences: 'Skills',
    nav_contact: 'Contact', nav_terminal: 'Terminal',
    alternance_title: 'Looking for work-study program — September 2026',
    alternance_sub: 'Systems & Network Administrator · 2 years · Alsace & Grand Est',
    alternance_btn: 'Contact me',
    section_formations: 'Education', section_diplomes: 'Degrees',
    section_exp: 'Experience & Projects', section_skills: 'Skills',
    section_info: 'Additional Information',
    open_detail: 'See details',
    back_top: 'BACK TO TOP',
    cpt_title: 'Technical Skills',
    cpt_sub: 'Filter by category, search for a tool or technology.',
    cpt_filter_all: 'All', cpt_filter_sys: 'Systems', cpt_filter_net: 'Networks',
    cpt_filter_sec: 'Security', cpt_filter_dev: 'Development',
    cpt_filter_auto: 'Automation', cpt_filter_iot: 'IoT & Home Automation',
    cpt_filter_db: 'Databases', cpt_filter_web: 'Web',
    search_placeholder: 'Search a skill, tool…',
    sort_label: 'Sort:',
    sort_level: 'by level',
    sort_alpha: 'alphabetical',
    results_label: 'Results',
    modal_doing: 'What I do',
    modal_tools: 'Tools & related topics',
    modal_proof: 'Proof',
    modal_proof_placeholder: '📁 Reserved slot — add your screenshots or documents here.',
    modal_links: 'Useful links',
    modal_close: 'Close',
    see_homelab: 'See NAS project',
    see_project: 'See project',
    tab_pro: 'Professional Experience',
    tab_proj: 'Projects',
    contact_title: 'Contact',
    form_firstname: 'First name', form_lastname: 'Last name',
    form_email: 'Email', form_company: 'Company / Organization',
    form_subject: 'Subject', form_message: 'Message',
    form_send: 'SEND MESSAGE',
    form_sending: 'Sending…',
    form_success: 'Message sent! I\'ll reply as soon as possible.',
    ref_title: 'BUT R&T Skills Framework',
    ref_ac: 'Critical Learning Outcomes (AC)',
    ref_ce: 'Assessment Criteria (CE)',
    footer_terminal: 'to open terminal',
    back: 'Back',
    proof_placeholder: '📁 Proof to add — drag your files here or click to select.',
  }
};

// Referentiel BUT R&T (AC & CE) — partagé
const REFERENTIEL = {
  UE1: {
    code: 'UE1', icon: '🌐',
    fr: { title: 'Administrer les réseaux et l\'Internet', short: 'Administrer un réseau' },
    en: { title: 'Administer Networks and the Internet', short: 'Administer networks' },
    color: '#00d4ff',
    CE: [
      { id: 'CE1.01', fr: 'En choisissant les solutions et technologies réseaux adaptées', en: 'By choosing appropriate network solutions and technologies' },
      { id: 'CE1.02', fr: 'En respectant les principes fondamentaux de la sécurité informatique', en: 'By respecting the fundamental principles of IT security' },
      { id: 'CE1.03', fr: 'En utilisant une approche rigoureuse pour la résolution des dysfonctionnements', en: 'By using a rigorous approach to troubleshooting' },
      { id: 'CE1.04', fr: 'En respectant les règles métiers', en: 'By respecting business rules' },
      { id: 'CE1.05', fr: 'En assurant une veille technologique', en: 'By maintaining technological watch' },
    ],
    AC: [
      { id: 'AC11.01', fr: 'Maîtriser les lois fondamentales de l\'électricité afin d\'intervenir sur des équipements de réseaux et télécommunications', en: 'Master fundamental laws of electricity to work on network equipment' },
      { id: 'AC11.02', fr: 'Comprendre les supports de transmission et leurs caractéristiques', en: 'Understand transmission media and their characteristics' },
      { id: 'AC11.03', fr: 'Configurer et dépanner les équipements de commutation et de routage', en: 'Configure and troubleshoot switching and routing equipment' },
      { id: 'AC11.04', fr: 'Maîtriser les protocoles et technologies des réseaux locaux', en: 'Master protocols and technologies of local networks' },
      { id: 'AC11.05', fr: 'Identifier les dysfonctionnements du réseau local', en: 'Identify local network malfunctions' },
    ]
  },
  UE2: {
    code: 'UE2', icon: '💻',
    fr: { title: 'Connecter les entreprises et les usagers', short: 'Connecter les entreprises' },
    en: { title: 'Connect Companies and Users', short: 'Connect businesses' },
    color: '#00ff88',
    CE: [
      { id: 'CE2.01', fr: 'En choisissant les solutions techniques appropriées', en: 'By choosing appropriate technical solutions' },
      { id: 'CE2.02', fr: 'En respectant les contraintes de débit, de latence, de disponibilité et de sécurité', en: 'By respecting constraints of bandwidth, latency, availability and security' },
      { id: 'CE2.03', fr: 'En intégrant les solutions dans l\'environnement existant', en: 'By integrating solutions into the existing environment' },
    ],
    AC: [
      { id: 'AC12.01', fr: 'Déployer des équipements de réseaux avancés', en: 'Deploy advanced network equipment' },
      { id: 'AC12.02', fr: 'Configurer des services réseaux avancés', en: 'Configure advanced network services' },
      { id: 'AC12.03', fr: 'Déployer un accès sans fil sécurisé', en: 'Deploy secure wireless access' },
      { id: 'AC12.04', fr: 'Mettre en place une infrastructure VPN', en: 'Set up a VPN infrastructure' },
    ]
  },
  UE3: {
    code: 'UE3', icon: '🛠️',
    fr: { title: 'Créer des outils et applications informatiques', short: 'Créer des applications' },
    en: { title: 'Create IT Tools and Applications', short: 'Create applications' },
    color: '#b44fff',
    CE: [
      { id: 'CE3.01', fr: 'En utilisant des langages et des environnements de développement adaptés', en: 'By using appropriate development languages and environments' },
      { id: 'CE3.02', fr: 'En respectant les principes algorithmiques et de programmation', en: 'By respecting algorithmic and programming principles' },
      { id: 'CE3.03', fr: 'En intégrant des contraintes de sécurité', en: 'By integrating security constraints' },
    ],
    AC: [
      { id: 'AC13.01', fr: 'Utiliser un système informatique et ses outils', en: 'Use a computer system and its tools' },
      { id: 'AC13.02', fr: 'Lire, exécuter, corriger et écrire un programme', en: 'Read, execute, correct and write a program' },
      { id: 'AC13.03', fr: 'Traduire un algorithme dans un langage de programmation', en: 'Translate an algorithm into a programming language' },
      { id: 'AC13.04', fr: 'Connaître l\'architecture et les technologies d\'un site Web', en: 'Know the architecture and technologies of a website' },
      { id: 'AC13.05', fr: 'Mettre en place des outils et services informatiques', en: 'Set up IT tools and services' },
      { id: 'AC13.06', fr: 'Utiliser les systèmes informatiques embarqués', en: 'Use embedded computer systems' },
    ]
  }
};

// Project referentiel data
const PROJECT_REF = {
  nas: {
    UE: ['UE1','UE2','UE3'],
    AC: ['AC11.03','AC11.04','AC11.05','AC12.01','AC12.02','AC12.04','AC13.05'],
    CE: ['CE1.01','CE1.02','CE1.03','CE2.01','CE2.02','CE2.03','CE3.03'],
  },
  cvweb: {
    UE: ['UE3'],
    AC: ['AC13.01','AC13.02','AC13.03','AC13.04'],
    CE: ['CE3.01','CE3.02'],
  },
  mdp: {
    UE: ['UE3'],
    AC: ['AC13.01','AC13.02','AC13.03'],
    CE: ['CE3.01','CE3.02','CE3.03'],
  },
  stage: {
    UE: ['UE1','UE2'],
    AC: ['AC11.04','AC11.05'],
    CE: ['CE1.04','CE2.01','CE2.03'],
  },
};

// ── Language system ───────────────────────────
let currentLang = localStorage.getItem('lang') || 'fr';

function t(key) {
  return TRANSLATIONS[currentLang][key] || TRANSLATIONS['fr'][key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.getAttribute('data-i18n-title'));
  });
  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
  });
  document.documentElement.lang = currentLang;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  applyTranslations();
  // Rebuild referentiel if on a project page
  if (typeof buildReferentiel === 'function') buildReferentiel();
  // Rebuild competences if on cpt page
  if (typeof renderSkills === 'function') renderSkills();
}

// ── Referentiel builder ────────────────────────
function buildReferentielSection(projectKey, containerId) {
  const container = document.getElementById(containerId);
  if (!container || !PROJECT_REF[projectKey]) return;
  const ref = PROJECT_REF[projectKey];
  const lang = currentLang;

  let html = `<div class="ref-wrapper">
    <h2 class="block-title" style="margin-top:0;"><i class="fa-solid fa-graduation-cap"></i> ${t('ref_title')}</h2>
    <div class="ref-ue-row">`;

  ref.UE.forEach(ueKey => {
    const ue = REFERENTIEL[ueKey];
    html += `<div class="ref-ue-badge" style="border-color:${ue.color};color:${ue.color};background:${ue.color}18;">
      ${ue.icon} ${ue.code} — ${ue[lang].short}
    </div>`;
  });
  html += `</div>
    <div class="ref-cols">`;

  // AC column
  const filteredAC = ref.AC.map(id => {
    for (const ueKey of ref.UE) {
      const ac = REFERENTIEL[ueKey].AC.find(a => a.id === id);
      if (ac) return { ...ac, ueKey };
    }
    return null;
  }).filter(Boolean);

  html += `<div class="ref-col">
    <div class="ref-col-title"><i class="fa-solid fa-circle-check"></i> ${t('ref_ac')}</div>`;
  filteredAC.forEach(ac => {
    const ue = REFERENTIEL[ac.ueKey];
    html += `<div class="ref-item">
      <span class="ref-badge" style="color:${ue.color};border-color:${ue.color}44;background:${ue.color}12;">${ac.id}</span>
      <span class="ref-desc">${ac[lang]}</span>
    </div>`;
  });
  html += `</div>`;

  // CE column
  const filteredCE = ref.CE.map(id => {
    for (const ueKey of ref.UE) {
      const ce = REFERENTIEL[ueKey].CE.find(c => c.id === id);
      if (ce) return { ...ce, ueKey };
    }
    return null;
  }).filter(Boolean);

  html += `<div class="ref-col">
    <div class="ref-col-title"><i class="fa-solid fa-list-check"></i> ${t('ref_ce')}</div>`;
  filteredCE.forEach(ce => {
    const ue = REFERENTIEL[ce.ueKey];
    html += `<div class="ref-item">
      <span class="ref-badge" style="color:${ue.color};border-color:${ue.color}44;background:${ue.color}12;">${ce.id}</span>
      <span class="ref-desc">${ce[lang]}</span>
    </div>`;
  });
  html += `</div></div></div>`;

  container.innerHTML = html;
}

// Called on project pages
function buildReferentiel() {
  const el = document.getElementById('ref-container');
  if (!el) return;
  const key = el.getAttribute('data-project');
  if (key) buildReferentielSection(key, 'ref-container');
}

// ── Add missing nav keys ──────────────────────────────────
TRANSLATIONS.fr.nav_projets     = 'Projets';
TRANSLATIONS.fr.nav_experiences = 'Expériences';
TRANSLATIONS.en.nav_projets     = 'Projects';
TRANSLATIONS.en.nav_experiences = 'Experience';

// ── Fix REFERENTIEL with real BUT R&T S1 content ─────────
// Override with accurate data from official BUT R&T programme
Object.assign(REFERENTIEL.UE1, {
  CE: [
    { id:'CE1.01', fr:'En choisissant les solutions et technologies réseaux adaptées', en:'By choosing appropriate network solutions and technologies' },
    { id:'CE1.02', fr:'En respectant les principes fondamentaux de la sécurité informatique', en:'By respecting fundamental IT security principles' },
    { id:'CE1.03', fr:'En utilisant une approche rigoureuse pour la résolution des dysfonctionnements', en:'By using a rigorous troubleshooting approach' },
    { id:'CE1.04', fr:'En respectant les règles métiers', en:'By respecting business rules' },
    { id:'CE1.05', fr:'En assurant une veille technologique', en:'By maintaining technological watch' },
  ],
  AC: [
    { id:'AC11.01', fr:'Maîtriser les lois fondamentales de l\'électricité afin d\'intervenir sur des équipements de réseaux', en:'Master fundamental laws of electricity for network equipment' },
    { id:'AC11.02', fr:'Comprendre les supports de transmission et leurs caractéristiques', en:'Understand transmission media and their characteristics' },
    { id:'AC11.03', fr:'Configurer et dépanner les équipements de commutation et de routage', en:'Configure and troubleshoot switching and routing equipment' },
    { id:'AC11.04', fr:'Maîtriser les protocoles et technologies des réseaux locaux', en:'Master local network protocols and technologies' },
    { id:'AC11.05', fr:'Identifier les dysfonctionnements du réseau local', en:'Identify local network malfunctions' },
  ]
});

Object.assign(REFERENTIEL.UE2, {
  CE: [
    { id:'CE2.01', fr:'En communiquant avec le client et les différents acteurs impliqués, parfois en anglais', en:'By communicating with clients and stakeholders, sometimes in English' },
    { id:'CE2.02', fr:'En faisant preuve d\'une démarche scientifique', en:'By demonstrating a scientific approach' },
    { id:'CE2.03', fr:'En choisissant les solutions et technologies adaptées', en:'By choosing appropriate solutions and technologies' },
    { id:'CE2.04', fr:'En proposant des solutions respectueuses de l\'environnement', en:'By proposing environmentally friendly solutions' },
  ],
  AC: [
    { id:'AC12.01', fr:'Déployer un système de communication pour l\'entreprise', en:'Deploy a communication system for the enterprise' },
    { id:'AC12.02', fr:'Déployer un réseau d\'accès sans fil pour le réseau d\'entreprise en intégrant les enjeux de la sécurité', en:'Deploy wireless access network integrating security challenges' },
    { id:'AC12.03', fr:'Déployer un réseau d\'accès fixe ou mobile pour un opérateur de télécommunications', en:'Deploy a fixed or mobile access network for a telecom operator' },
    { id:'AC12.04', fr:'Permettre aux collaborateurs de se connecter de manière sécurisée au système d\'information', en:'Enable secure connections to the information system' },
    { id:'AC12.05', fr:'Collaborer en mode projet en français et en anglais', en:'Collaborate in project mode in French and English' },
  ]
});

Object.assign(REFERENTIEL.UE3, {
  CE: [
    { id:'CE3.01', fr:'En étant à l\'écoute des besoins du client', en:'By listening to client needs' },
    { id:'CE3.02', fr:'En respectant les principes algorithmiques', en:'By respecting algorithmic principles' },
    { id:'CE3.03', fr:'En veillant à la qualité du code et à l\'utilisation des bonnes pratiques de développement', en:'By ensuring code quality and development best practices' },
    { id:'CE3.04', fr:'En intégrant les contraintes de sécurité', en:'By integrating security constraints' },
  ],
  AC: [
    { id:'AC13.01', fr:'Utiliser un système informatique et ses outils', en:'Use a computer system and its tools' },
    { id:'AC13.02', fr:'Lire, exécuter, corriger et écrire un programme', en:'Read, execute, correct and write a program' },
    { id:'AC13.03', fr:'Traduire un algorithme dans un langage de programmation', en:'Translate an algorithm into a programming language' },
    { id:'AC13.04', fr:'Connaître l\'architecture et les technologies d\'un site Web', en:'Know the architecture and technologies of a website' },
    { id:'AC13.05', fr:'Mettre en place des outils et services informatiques', en:'Set up IT tools and services' },
    { id:'AC13.06', fr:'Utiliser les systèmes informatiques embarqués', en:'Use embedded computer systems' },
  ]
});

// Update project refs with correct AC/CE codes
PROJECT_REF.nas = {
  UE: ['UE1','UE2','UE3'],
  AC: ['AC11.03','AC11.04','AC11.05','AC12.01','AC12.04','AC13.05'],
  CE: ['CE1.01','CE1.02','CE1.03','CE2.03','CE3.04'],
};
PROJECT_REF.cvweb = {
  UE: ['UE3'],
  AC: ['AC13.01','AC13.02','AC13.03','AC13.04'],
  CE: ['CE3.01','CE3.02','CE3.03'],
};
PROJECT_REF.mdp = {
  UE: ['UE3'],
  AC: ['AC13.01','AC13.02','AC13.03'],
  CE: ['CE3.01','CE3.02','CE3.03','CE3.04'],
};
PROJECT_REF.stage = {
  UE: ['UE1','UE2'],
  AC: ['AC11.04','AC12.01','AC12.05'],
  CE: ['CE1.04','CE2.01','CE2.03'],
};

// ── Full page static text translations ──────────────────────
// Add more complete translations for static page content
const PAGE_TRANSLATIONS = {
  fr: {
    // Index
    'idx_formations_title': 'Formations',
    'idx_diplomes_title': 'Diplômes',
    'idx_exp_title': 'Expériences & Projets',
    'idx_skills_title': 'Compétences',
    'idx_info_title': 'Informations complémentaires',
    'idx_see_detail': 'Voir le détail',
    'idx_see_projects': 'Voir les projets',
    'idx_see_all_skills': 'Voir toutes les compétences (20+)',
    'idx_langues': 'Langues', 'idx_sports': 'Sports',
    'idx_hobbies': 'Hobbies', 'idx_interets': 'Intérêts',
    'idx_back_top': 'RETOUR EN HAUT',
    // Common
    'com_back': 'Retour',
    'com_proof': 'Preuves',
    'com_results': 'Résultats clés',
    'com_stack': 'Stack technique',
    'com_ref': 'Référentiel de compétences BUT R&T',
    // Stage
    'stg_title': 'Stage d\'Observation de 3ème',
    'stg_subtitle': 'Secteur bancaire · Découverte professionnelle · 1 semaine',
    'stg_programme': 'Programme de la semaine',
    'stg_competences': 'Compétences développées',
    'stg_apports': 'Apports',
    // NAS
    'nas_title': 'Infrastructure Domestique Sécurisée',
    'nas_services': '12 services déployés',
    'nas_map': 'Carte réseau des services',
    'nas_roadmap': 'Roadmap',
    // MDP
    'mdp_title': 'Générateur de mots de passe sécurisés',
    'mdp_live': 'Essayer le générateur en live',
    'mdp_code': 'Code source Python (original)',
    'mdp_features': 'Fonctionnalités',
    // CV Web
    'cvw_title': 'Portfolio CV Web Multi-pages',
    'cvw_features': 'Fonctionnalités développées',
    'cvw_learned': 'Ce que j\'ai appris',
    // Contact
    'cnt_title': 'Formulaire de contact',
    'cnt_social': 'Mes liens',
    'cnt_coords': 'Coordonnées directes',
    'cnt_firstname': 'Prénom', 'cnt_lastname': 'Nom',
    'cnt_email': 'Email', 'cnt_company': 'Entreprise / Organisation',
    'cnt_subject': 'Sujet', 'cnt_message': 'Message',
    'cnt_send': 'ENVOYER LE MESSAGE',
    'cnt_opt_alt': 'Proposition d\'alternance',
    'cnt_opt_stage': 'Proposition de stage',
    'cnt_opt_proj': 'Collaboration projet',
    'cnt_opt_q': 'Question générale',
    'cnt_opt_other': 'Autre',
    // Competences
    'cpt_page_title': 'Compétences techniques',
    'cpt_page_sub': 'Filtrez par catégorie, recherchez un outil ou une technologie.',
    'cpt_featured': '⚡ Compétences principales',
    'cpt_others': 'Autres compétences',
    'cpt_search': 'Rechercher une compétence, un outil…',
    'cpt_sort_level': '⇅ Par niveau',
    'cpt_sort_alpha': '⇅ Alphabétique',
    'cpt_no_result': '🔍 Aucun résultat — essayez un autre filtre.',
    'cpt_open': 'Ouvrir',
    'cpt_featured_badge': 'À LA UNE',
    'modal_doing': 'Ce que je fais',
    'modal_tools': 'Outils et sujets liés',
    'modal_proof': 'Preuve',
    'modal_links': 'Liens utiles',
  },
  en: {
    'idx_formations_title': 'Education',
    'idx_diplomes_title': 'Degrees',
    'idx_exp_title': 'Experience & Projects',
    'idx_skills_title': 'Skills',
    'idx_info_title': 'Additional Information',
    'idx_see_detail': 'See details',
    'idx_see_projects': 'See projects',
    'idx_see_all_skills': 'See all skills (20+)',
    'idx_langues': 'Languages', 'idx_sports': 'Sports',
    'idx_hobbies': 'Hobbies', 'idx_interets': 'Interests',
    'idx_back_top': 'BACK TO TOP',
    'com_back': 'Back',
    'com_proof': 'Proof',
    'com_results': 'Key Results',
    'com_stack': 'Tech Stack',
    'com_ref': 'BUT R&T Skills Framework',
    'stg_title': '3rd Year Observation Internship',
    'stg_subtitle': 'Banking sector · Professional discovery · 1 week',
    'stg_programme': 'Week Programme',
    'stg_competences': 'Skills Developed',
    'stg_apports': 'Takeaways',
    'nas_title': 'Secured Home Infrastructure',
    'nas_services': '12 deployed services',
    'nas_map': 'Service network map',
    'nas_roadmap': 'Roadmap',
    'mdp_title': 'Secure Password Generator',
    'mdp_live': 'Try the live generator',
    'mdp_code': 'Original Python source code',
    'mdp_features': 'Features',
    'cvw_title': 'Multi-page CV Web Portfolio',
    'cvw_features': 'Features developed',
    'cvw_learned': 'What I learned',
    'cnt_title': 'Contact Form',
    'cnt_social': 'My links',
    'cnt_coords': 'Direct contact',
    'cnt_firstname': 'First name', 'cnt_lastname': 'Last name',
    'cnt_email': 'Email', 'cnt_company': 'Company / Organization',
    'cnt_subject': 'Subject', 'cnt_message': 'Message',
    'cnt_send': 'SEND MESSAGE',
    'cnt_opt_alt': 'Work-study proposal',
    'cnt_opt_stage': 'Internship proposal',
    'cnt_opt_proj': 'Project collaboration',
    'cnt_opt_q': 'General question',
    'cnt_opt_other': 'Other',
    'cpt_page_title': 'Technical Skills',
    'cpt_page_sub': 'Filter by category, search for a tool or technology.',
    'cpt_featured': '⚡ Main skills',
    'cpt_others': 'Other skills',
    'cpt_search': 'Search a skill, tool…',
    'cpt_sort_level': '⇅ By level',
    'cpt_sort_alpha': '⇅ Alphabetical',
    'cpt_no_result': '🔍 No results — try another filter.',
    'cpt_open': 'Open',
    'cpt_featured_badge': 'FEATURED',
    'modal_doing': 'What I do',
    'modal_tools': 'Tools & related topics',
    'modal_proof': 'Proof',
    'modal_links': 'Useful links',
  }
};

// Merge into main TRANSLATIONS
Object.keys(PAGE_TRANSLATIONS).forEach(lang => {
  Object.assign(TRANSLATIONS[lang], PAGE_TRANSLATIONS[lang]);
});

// ── Enhanced applyTranslations ──────────────────────────────
// Overrides the basic one to handle all attribute types
const _origApply = typeof applyTranslations === 'function' ? applyTranslations : null;

function applyTranslations() {
  const lang = currentLang || 'fr';

  // data-i18n → textContent
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = TRANSLATIONS[lang][key] || TRANSLATIONS['fr'][key];
    if (!val) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.innerHTML = val;
    }
  });

  // data-i18n-placeholder → placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = TRANSLATIONS[lang][key] || TRANSLATIONS['fr'][key];
    if (val) el.placeholder = val;
  });

  // data-i18n-html → innerHTML (for links inside text)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const val = TRANSLATIONS[lang][key] || TRANSLATIONS['fr'][key];
    if (val) el.innerHTML = val;
  });

  // data-i18n-value → for select options etc
  document.querySelectorAll('option[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = TRANSLATIONS[lang][key] || TRANSLATIONS['fr'][key];
    if (val) el.textContent = val;
  });

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  document.documentElement.lang = lang;
}

// ════════════════════════════════════════════════════════
// COMPLETE BILINGUAL CONTENT — all static text blocks
// These functions rebuild full page text on lang switch
// ════════════════════════════════════════════════════════

// Filter label translations for competences
TRANSLATIONS.fr.cpt_filter_all  = 'Tout';
TRANSLATIONS.fr.cpt_filter_sys  = 'Systèmes';
TRANSLATIONS.fr.cpt_filter_net  = 'Réseaux';
TRANSLATIONS.fr.cpt_filter_sec  = 'Sécurité';
TRANSLATIONS.fr.cpt_filter_dev  = 'Développement';
TRANSLATIONS.fr.cpt_filter_auto = 'Automatisation';
TRANSLATIONS.fr.cpt_filter_iot  = 'IoT';
TRANSLATIONS.fr.cpt_filter_web  = 'Web';
TRANSLATIONS.en.cpt_filter_all  = 'All';
TRANSLATIONS.en.cpt_filter_sys  = 'Systems';
TRANSLATIONS.en.cpt_filter_net  = 'Networks';
TRANSLATIONS.en.cpt_filter_sec  = 'Security';
TRANSLATIONS.en.cpt_filter_dev  = 'Development';
TRANSLATIONS.en.cpt_filter_auto = 'Automation';
TRANSLATIONS.en.cpt_filter_iot  = 'IoT';
TRANSLATIONS.en.cpt_filter_web  = 'Web';

// Alternance translations
TRANSLATIONS.en.alternance_title = 'Looking for work-study — September 2026';
TRANSLATIONS.en.alternance_sub   = 'Systems & Network Administrator · 2 years · Alsace';
TRANSLATIONS.en.alternance_btn   = 'Contact me';

// Nav
TRANSLATIONS.en.footer_terminal  = 'to open terminal';
TRANSLATIONS.fr.footer_terminal  = 'pour le terminal';

// Back button
TRANSLATIONS.en.com_back = 'Back';
TRANSLATIONS.fr.com_back = 'Retour';
TRANSLATIONS.en.idx_back_top = 'BACK TO TOP';
TRANSLATIONS.fr.idx_back_top = 'RETOUR EN HAUT';

// Section labels used with data-i18n
TRANSLATIONS.fr.section_info = 'Informations complémentaires';
TRANSLATIONS.en.section_info = 'Additional Information';
TRANSLATIONS.fr.open_detail  = 'Voir le détail';
TRANSLATIONS.en.open_detail  = 'See details';
TRANSLATIONS.fr.back         = 'Retour';
TRANSLATIONS.en.back         = 'Back';

// ── New PROJECT_REF entries ──────────────────────────────
PROJECT_REF.ctf = {
  UE: ['UE1'],
  AC: ['AC11.05'],
  CE: ['CE1.02', 'CE1.05'],
};
PROJECT_REF.sae101 = {
  UE: ['UE1'],
  AC: ['AC11.02'],
  CE: ['CE1.02', 'CE1.05'],
};
PROJECT_REF.sae102 = {
  UE: ['UE1', 'UE2'],
  AC: ['AC11.03', 'AC11.04', 'AC11.05', 'AC12.01'],
  CE: ['CE1.01', 'CE1.03', 'CE2.03'],
};
PROJECT_REF.sae103 = {
  UE: ['UE1', 'UE2'],
  AC: ['AC11.02', 'AC11.03', 'AC11.04', 'AC12.02'],
  CE: ['CE1.01', 'CE2.02', 'CE2.03'],
};
PROJECT_REF.sae105 = {
  UE: ['UE3'],
  AC: ['AC13.01', 'AC13.02', 'AC13.03'],
  CE: ['CE3.01', 'CE3.02', 'CE3.03'],
};

// ════════════════════════════════════════════════════════════
// PAGE-SPECIFIC STATIC TEXT TRANSLATIONS
// ════════════════════════════════════════════════════════════

// BUT page translations
TRANSLATIONS.fr.but_title    = 'IUT de Colmar — Université de Haute-Alsace';
TRANSLATIONS.en.but_title    = 'IUT of Colmar — University of Haute-Alsace';
TRANSLATIONS.fr.but_subtitle = '// <span style="color:var(--cyan);">Diplôme national Bac+3 · Parcours Cybersécurité &amp; Réseaux</span>';
TRANSLATIONS.en.but_subtitle = '// <span style="color:var(--cyan);">National Bachelor Bac+3 · Cybersecurity &amp; Networks</span>';
TRANSLATIONS.fr.but_desc     = 'Le Bachelor Universitaire de Technologie Réseaux &amp; Télécommunications est une formation de 3 ans (180 ECTS) à l\'IUT de Colmar. Elle prépare aux métiers de l\'administration réseau, de la cybersécurité, des systèmes embarqués et du développement logiciel.';
TRANSLATIONS.en.but_desc     = 'The University Bachelor of Technology in Networks &amp; Telecommunications is a 3-year program (180 ECTS) at the IUT of Colmar. It prepares students for careers in network administration, cybersecurity, embedded systems and software development.';
TRANSLATIONS.fr.but_modules  = 'Modules — Semestres 1 &amp; 2 (Année 1)';
TRANSLATIONS.en.but_modules  = 'Modules — Semesters 1 &amp; 2 (Year 1)';
TRANSLATIONS.fr.but_deep     = 'Contenus approfondis';
TRANSLATIONS.en.but_deep     = 'Key content areas';
TRANSLATIONS.fr.but_saes     = 'SAÉ réalisées';
TRANSLATIONS.en.but_saes     = 'Completed SAÉ projects';
TRANSLATIONS.fr.but_skills   = 'Compétences visées (diplôme)';
TRANSLATIONS.en.but_skills   = 'Target skills (degree)';

// Common project page keys
TRANSLATIONS.fr.proj_desc_title   = 'Description du projet';
TRANSLATIONS.en.proj_desc_title   = 'Project description';
TRANSLATIONS.fr.proj_stack        = 'Stack technique';
TRANSLATIONS.en.proj_stack        = 'Tech stack';
TRANSLATIONS.fr.proj_learned      = 'Ce que j\'ai appris';
TRANSLATIONS.en.proj_learned      = 'What I learned';
TRANSLATIONS.fr.proj_ref          = 'Référentiel de compétences BUT R&amp;T';
TRANSLATIONS.en.proj_ref          = 'BUT R&amp;T Skills Framework';
TRANSLATIONS.fr.proj_proof        = 'Preuves';
TRANSLATIONS.en.proj_proof        = 'Proof';
TRANSLATIONS.fr.proj_results      = 'Résultats clés';
TRANSLATIONS.en.proj_results      = 'Key results';
TRANSLATIONS.fr.proj_roadmap      = 'Roadmap';
TRANSLATIONS.en.proj_roadmap      = 'Roadmap';
TRANSLATIONS.fr.proj_features     = 'Fonctionnalités';
TRANSLATIONS.en.proj_features     = 'Features';
TRANSLATIONS.fr.proj_on_demand    = 'disponible sur demande.';
TRANSLATIONS.en.proj_on_demand    = 'available on request.';

// NAS page
TRANSLATIONS.fr.nas_title    = 'Infrastructure Domestique Sécurisée';
TRANSLATIONS.en.nas_title    = 'Secure Home Infrastructure';
TRANSLATIONS.fr.nas_subtitle = 'OpenMediaVault · Docker · WireGuard · Home Assistant · 12 services';
TRANSLATIONS.en.nas_subtitle = 'OpenMediaVault · Docker · WireGuard · Home Assistant · 12 services';
TRANSLATIONS.fr.nas_services = '12 services déployés';
TRANSLATIONS.en.nas_services = '12 deployed services';
TRANSLATIONS.fr.nas_map      = 'Carte réseau des services';
TRANSLATIONS.en.nas_map      = 'Service network map';

// CTF page
TRANSLATIONS.fr.ctf_title    = 'CTF Rhin Tech 2025';
TRANSLATIONS.en.ctf_title    = 'CTF Rhin Tech 2025';
TRANSLATIONS.fr.ctf_subtitle = 'Capture The Flag · Cybersécurité · Équipe de 3 via l\'IUT de Colmar';
TRANSLATIONS.en.ctf_subtitle = 'Capture The Flag · Cybersecurity · Team of 3 via IUT Colmar';
TRANSLATIONS.fr.ctf_rank_label = 'sur 40 équipes participantes';
TRANSLATIONS.en.ctf_rank_label = 'out of 40 participating teams';
TRANSLATIONS.fr.ctf_categories = 'Catégories de challenges';
TRANSLATIONS.en.ctf_categories = 'Challenge categories';
TRANSLATIONS.fr.ctf_tools    = 'Outils &amp; techniques utilisés';
TRANSLATIONS.en.ctf_tools    = 'Tools &amp; techniques used';

// MDP page
TRANSLATIONS.fr.mdp_title    = 'Générateur de mots de passe sécurisés';
TRANSLATIONS.en.mdp_title    = 'Secure Password Generator';
TRANSLATIONS.fr.mdp_live     = 'Essayer le générateur en live';
TRANSLATIONS.en.mdp_live     = 'Try the live generator';
TRANSLATIONS.fr.mdp_code     = 'Code source Python (original)';
TRANSLATIONS.en.mdp_code     = 'Original Python source code';

// SAÉ pages
TRANSLATIONS.fr.sae101_title = 'Sensibilisation à l\'hygiène informatique et à la cybersécurité';
TRANSLATIONS.en.sae101_title = 'IT security and cybersecurity awareness';
TRANSLATIONS.fr.sae102_title = 'S\'initier aux réseaux informatiques';
TRANSLATIONS.en.sae102_title = 'Introduction to computer networks';
TRANSLATIONS.fr.sae103_title = 'Découvrir un dispositif de transmission';
TRANSLATIONS.en.sae103_title = 'Discovering a transmission device';
TRANSLATIONS.fr.sae105_title = 'Traiter les données sur internet';
TRANSLATIONS.en.sae105_title = 'Processing data on the internet';

// Experiences/Stage
TRANSLATIONS.fr.stage_title    = 'Stage d\'Observation de 3ème';
TRANSLATIONS.en.stage_title    = '9th Grade Observation Internship';
TRANSLATIONS.fr.stage_subtitle = 'Secteur bancaire · Découverte professionnelle · 1 semaine';
TRANSLATIONS.en.stage_subtitle = 'Banking sector · Professional discovery · 1 week';

// Formation pages
TRANSLATIONS.fr.formation_but      = 'BUT Réseaux &amp; Télécommunications';
TRANSLATIONS.en.formation_but      = 'BUT Networks &amp; Telecommunications';
TRANSLATIONS.fr.formation_bac      = 'Baccalauréat Général';
TRANSLATIONS.en.formation_bac      = 'French Baccalaureate';
TRANSLATIONS.fr.formation_brevet   = 'Brevet des collèges';
TRANSLATIONS.en.formation_brevet   = 'Middle School Diploma';

// Diplome pages
TRANSLATIONS.fr.dpl_bac_title  = 'Baccalauréat — Mention Bien';
TRANSLATIONS.en.dpl_bac_title  = 'Baccalaureate — Good Honours';
TRANSLATIONS.fr.dpl_bret_title = 'Diplôme National du Brevet — Mention Très Bien';
TRANSLATIONS.en.dpl_bret_title = 'National Diploma — Very Good Honours';

// Contact
TRANSLATIONS.fr.cnt_cv_dl = 'Télécharger mon CV';
TRANSLATIONS.en.cnt_cv_dl = 'Download my CV';

// ── Missing referentiel translation keys ──────────────────
TRANSLATIONS.fr.ref_title = 'Référentiel de compétences BUT R&T';
TRANSLATIONS.fr.ref_ac    = 'Apprentissages Critiques (AC)';
TRANSLATIONS.fr.ref_ce    = 'Critères d\'Évaluation (CE)';
TRANSLATIONS.en.ref_title = 'BUT R&T Skills Framework';
TRANSLATIONS.en.ref_ac    = 'Critical Learning (AC)';
TRANSLATIONS.en.ref_ce    = 'Evaluation Criteria (CE)';

// ── Complete page content translations ──────────────────
// Common labels
TRANSLATIONS.fr.lbl_description   = 'Description du projet';
TRANSLATIONS.en.lbl_description   = 'Project description';
TRANSLATIONS.fr.lbl_stack         = 'Stack technique';
TRANSLATIONS.en.lbl_stack         = 'Tech stack';
TRANSLATIONS.fr.lbl_learned       = 'Ce que j\'ai appris';
TRANSLATIONS.en.lbl_learned       = 'What I learned';
TRANSLATIONS.fr.lbl_proof         = 'Preuves';
TRANSLATIONS.en.lbl_proof         = 'Proof';
TRANSLATIONS.fr.lbl_results       = 'Résultats clés';
TRANSLATIONS.en.lbl_results       = 'Key results';
TRANSLATIONS.fr.lbl_features      = 'Fonctionnalités';
TRANSLATIONS.en.lbl_features      = 'Features';
TRANSLATIONS.fr.lbl_roadmap       = 'Roadmap';
TRANSLATIONS.en.lbl_roadmap       = 'Roadmap';
TRANSLATIONS.fr.lbl_tools         = 'Outils & techniques utilisés';
TRANSLATIONS.en.lbl_tools         = 'Tools & techniques used';
TRANSLATIONS.fr.lbl_context       = 'Contexte';
TRANSLATIONS.en.lbl_context       = 'Context';
TRANSLATIONS.fr.lbl_programme     = 'Programme de la semaine';
TRANSLATIONS.en.lbl_programme     = 'Week programme';
TRANSLATIONS.fr.lbl_skills_dev    = 'Compétences développées';
TRANSLATIONS.en.lbl_skills_dev    = 'Skills developed';
TRANSLATIONS.fr.lbl_takeaways     = 'Apports';
TRANSLATIONS.en.lbl_takeaways     = 'Takeaways';
TRANSLATIONS.fr.lbl_services      = '12 services déployés';
TRANSLATIONS.en.lbl_services      = '12 deployed services';
TRANSLATIONS.fr.lbl_net_map       = 'Carte réseau des services';
TRANSLATIONS.en.lbl_net_map       = 'Service network map';
TRANSLATIONS.fr.lbl_challenges    = 'Catégories de challenges';
TRANSLATIONS.en.lbl_challenges    = 'Challenge categories';
TRANSLATIONS.fr.lbl_live_demo     = 'Démo interactive — données réelles de mon disque';
TRANSLATIONS.en.lbl_live_demo     = 'Interactive demo — real data from my disk';
TRANSLATIONS.fr.lbl_source_code   = 'Code source Python (original)';
TRANSLATIONS.en.lbl_source_code   = 'Original Python source code';
TRANSLATIONS.fr.lbl_live_gen      = 'Essayer le générateur en live';
TRANSLATIONS.en.lbl_live_gen      = 'Try the live generator';
TRANSLATIONS.fr.lbl_site_online   = 'Site en ligne';
TRANSLATIONS.en.lbl_site_online   = 'Live site';
TRANSLATIONS.fr.lbl_project_desc  = 'Description du projet (SAÉ 1.04)';
TRANSLATIONS.en.lbl_project_desc  = 'Project description (SAÉ 1.04)';
TRANSLATIONS.fr.lbl_modules       = 'Modules — Semestres 1 & 2 (Année 1)';
TRANSLATIONS.en.lbl_modules       = 'Modules — Semesters 1 & 2 (Year 1)';
TRANSLATIONS.fr.lbl_deep_content  = 'Contenus approfondis';
TRANSLATIONS.en.lbl_deep_content  = 'In-depth content';
TRANSLATIONS.fr.lbl_sae_done      = 'SAÉ réalisées';
TRANSLATIONS.en.lbl_sae_done      = 'Completed SAÉ projects';
TRANSLATIONS.fr.lbl_skills_aim    = 'Compétences visées (diplôme)';
TRANSLATIONS.en.lbl_skills_aim    = 'Target skills (degree)';
TRANSLATIONS.fr.lbl_back          = 'Retour';
TRANSLATIONS.en.lbl_back          = 'Back';
TRANSLATIONS.fr.lbl_available_req = 'disponible sur demande';
TRANSLATIONS.en.lbl_available_req = 'available on request';

// Formation/Diplome pages
TRANSLATIONS.fr.frm_specialites   = 'Spécialités';
TRANSLATIONS.en.frm_specialites   = 'Specialisations';
TRANSLATIONS.fr.frm_projet        = 'Projet NSI — Générateur de mots de passe';
TRANSLATIONS.en.frm_projet        = 'NSI Project — Password Generator';
TRANSLATIONS.fr.dpl_results_glob  = 'Résultats globaux';
TRANSLATIONS.en.dpl_results_glob  = 'Overall results';
TRANSLATIONS.fr.dpl_results_det   = 'Résultats détaillés';
TRANSLATIONS.en.dpl_results_det   = 'Detailed results';
TRANSLATIONS.fr.dpl_grand_oral    = 'Grand Oral';
TRANSLATIONS.en.dpl_grand_oral    = 'Grand Oral';
TRANSLATIONS.fr.dpl_score_global  = 'Score global';
TRANSLATIONS.en.dpl_score_global  = 'Global score';
TRANSLATIONS.fr.dpl_per_domain    = 'Résultats par domaine';
TRANSLATIONS.en.dpl_per_domain    = 'Results by domain';
TRANSLATIONS.fr.dpl_what_cert     = 'Ce que valide cette certification';
TRANSLATIONS.en.dpl_what_cert     = 'What this certification validates';
TRANSLATIONS.fr.dpl_per_comp      = 'Résultats par compétence';
TRANSLATIONS.en.dpl_per_comp      = 'Results by competency';

// Contact page
TRANSLATIONS.fr.cnt_alternance_title = 'Recherche d\'alternance';
TRANSLATIONS.en.cnt_alternance_title = 'Looking for work-study';
TRANSLATIONS.fr.cnt_dl_cv         = 'Télécharger mon CV';
TRANSLATIONS.en.cnt_dl_cv         = 'Download my CV';
TRANSLATIONS.fr.cnt_coords_direct = 'Coordonnées directes';
TRANSLATIONS.en.cnt_coords_direct = 'Direct contact';
TRANSLATIONS.fr.cnt_form_info     = 'Une question ? Une proposition d\'alternance ? Remplissez ce formulaire et je vous répondrai rapidement.';
TRANSLATIONS.en.cnt_form_info     = 'A question? A work-study proposal? Fill in this form and I will reply quickly.';

// Footer
TRANSLATIONS.fr.footer_design     = 'Web-design : Deiber Benjamin';
TRANSLATIONS.en.footer_design     = 'Web-design: Deiber Benjamin';

// Back button
TRANSLATIONS.fr['lbl_back'] = 'Retour';
TRANSLATIONS.en['lbl_back'] = 'Back';
TRANSLATIONS.fr['back'] = 'Retour';
TRANSLATIONS.en['back'] = 'Back';

// ══════════════════════════════════════════════════════════
// MISSING TRANSLATIONS — complete static text coverage
// ══════════════════════════════════════════════════════════

// ── Index page ──
TRANSLATIONS.fr.idx_formations_title = 'Formations';
TRANSLATIONS.en.idx_formations_title = 'Education';
TRANSLATIONS.fr.idx_diplomes_title   = 'Diplômes';
TRANSLATIONS.en.idx_diplomes_title   = 'Degrees';
TRANSLATIONS.fr.idx_see_detail       = 'Voir le détail';
TRANSLATIONS.en.idx_see_detail       = 'See details';
TRANSLATIONS.fr.idx_see_projects     = 'Voir les projets';
TRANSLATIONS.en.idx_see_projects     = 'See projects';
TRANSLATIONS.fr.idx_see_all_skills   = 'Voir toutes les compétences';
TRANSLATIONS.en.idx_see_all_skills   = 'See all skills';
TRANSLATIONS.fr.idx_langues          = 'Langues';
TRANSLATIONS.en.idx_langues          = 'Languages';
TRANSLATIONS.fr.idx_sports           = 'Sports';
TRANSLATIONS.en.idx_sports           = 'Sports';
TRANSLATIONS.fr.idx_hobbies          = 'Hobbies';
TRANSLATIONS.en.idx_hobbies          = 'Hobbies';
TRANSLATIONS.fr.idx_interets         = 'Intérêts';
TRANSLATIONS.en.idx_interets         = 'Interests';
TRANSLATIONS.fr.idx_back_top         = 'RETOUR EN HAUT';
TRANSLATIONS.en.idx_back_top         = 'BACK TO TOP';
TRANSLATIONS.fr.nav_projets          = 'Projets';
TRANSLATIONS.en.nav_projets          = 'Projects';
TRANSLATIONS.fr.nav_experiences      = 'Expériences';
TRANSLATIONS.en.nav_experiences      = 'Experience';
TRANSLATIONS.fr.section_info         = 'Informations complémentaires';
TRANSLATIONS.en.section_info         = 'Additional Information';
TRANSLATIONS.fr.alternance_title     = 'Recherche d\'alternance — Septembre 2026';
TRANSLATIONS.en.alternance_title     = 'Looking for work-study — September 2026';
TRANSLATIONS.fr.alternance_sub       = 'Administrateur Systèmes & Réseaux · 2 ans · Alsace';
TRANSLATIONS.en.alternance_sub       = 'Systems & Network Administrator · 2 years · Alsace';
TRANSLATIONS.fr.alternance_btn       = 'Me contacter';
TRANSLATIONS.en.alternance_btn       = 'Contact me';

// ── Common labels ──
TRANSLATIONS.fr.com_back    = 'Retour';
TRANSLATIONS.en.com_back    = 'Back';
TRANSLATIONS.fr.lbl_back    = 'Retour';
TRANSLATIONS.en.lbl_back    = 'Back';
TRANSLATIONS.fr.com_proof   = 'Preuves';
TRANSLATIONS.en.com_proof   = 'Proof';
TRANSLATIONS.fr.lbl_proof   = 'Preuves';
TRANSLATIONS.en.lbl_proof   = 'Proof';
TRANSLATIONS.fr.lbl_stack   = 'Stack technique';
TRANSLATIONS.en.lbl_stack   = 'Tech stack';
TRANSLATIONS.fr.lbl_learned = 'Ce que j\'ai appris';
TRANSLATIONS.en.lbl_learned = 'What I learned';
TRANSLATIONS.fr.lbl_features= 'Fonctionnalités';
TRANSLATIONS.en.lbl_features= 'Features';
TRANSLATIONS.fr.lbl_description = 'Description du projet';
TRANSLATIONS.en.lbl_description = 'Project description';
TRANSLATIONS.fr.open_detail = 'Voir le détail';
TRANSLATIONS.en.open_detail = 'See details';
TRANSLATIONS.fr.back_top    = 'RETOUR EN HAUT';
TRANSLATIONS.en.back_top    = 'BACK TO TOP';
TRANSLATIONS.fr.footer_terminal = 'pour le terminal';
TRANSLATIONS.en.footer_terminal = 'to open terminal';

// ── Projets page (cards) ──
TRANSLATIONS.fr.proj_nas_desc     = 'Infrastructure complète en production 24/7 : NAS, VPN WireGuard, Pi-hole, Nginx reverse proxy, domotique Home Assistant + ESPHome, 12 conteneurs Docker.';
TRANSLATIONS.en.proj_nas_desc     = 'Full production infrastructure running 24/7: NAS, WireGuard VPN, Pi-hole, Nginx reverse proxy, Home Assistant + ESPHome smart home, 12 Docker containers.';
TRANSLATIONS.fr.proj_see_detail   = 'Voir le détail';
TRANSLATIONS.en.proj_see_detail   = 'See details';
TRANSLATIONS.fr.proj_see_netmap   = 'Voir le détail + carte réseau';
TRANSLATIONS.en.proj_see_netmap   = 'See details + network map';
TRANSLATIONS.fr.proj_see_demo     = 'Voir le code + démo interactive';
TRANSLATIONS.en.proj_see_demo     = 'See code + interactive demo';

// ── Formation page ──
TRANSLATIONS.fr.frm_but_desc   = 'Formation universitaire technologique sur 3 ans axée sur l\'administration réseau, la sécurité informatique, les systèmes embarqués et le développement. Alternance possible en 2ème et 3ème année.';
TRANSLATIONS.en.frm_but_desc   = '3-year university technology program focused on network administration, IT security, embedded systems and development. Work-study available in years 2 and 3.';
TRANSLATIONS.fr.frm_bac_desc   = 'Baccalauréat général avec spécialités orientées informatique et sciences. Apprentissage de la programmation Python, des bases de données SQL, des protocoles réseau et de la sécurité informatique.';
TRANSLATIONS.en.frm_bac_desc   = 'French baccalaureate with computer science and science specialisations. Learned Python programming, SQL databases, network protocols and IT security.';
TRANSLATIONS.fr.frm_brevet_desc= 'Formation générale avec initiation à la technologie et à la programmation via Scratch. Obtention du DNB avec Mention Très Bien.';
TRANSLATIONS.en.frm_brevet_desc= 'General education with introduction to technology and Scratch programming. Obtained National Diploma with Very Good Honours.';
TRANSLATIONS.fr.frm_see_detail = 'Voir le détail complet';
TRANSLATIONS.en.frm_see_detail = 'See full details';

// ── Expériences page ──
TRANSLATIONS.fr.exp_stage_desc = 'Immersion professionnelle au sein de l\'agence Crédit Mutuel de Fessenheim pour découvrir les métiers du secteur bancaire, les outils numériques et les techniques de relation client.';
TRANSLATIONS.en.exp_stage_desc = 'Professional immersion at the Crédit Mutuel branch in Fessenheim to discover banking careers, digital tools and customer relationship techniques.';
TRANSLATIONS.fr.exp_see_detail = 'Voir le détail';
TRANSLATIONS.en.exp_see_detail = 'See details';

// ── Diplômes page ──
TRANSLATIONS.fr.dpl_see_grades  = 'Voir les résultats détaillés + relevé de notes';
TRANSLATIONS.en.dpl_see_grades  = 'See detailed results + transcript';
TRANSLATIONS.fr.dpl_see_detail  = 'Voir le détail du diplôme';
TRANSLATIONS.en.dpl_see_detail  = 'See diploma details';
TRANSLATIONS.fr.dpl_see_cert    = 'Voir les résultats par domaine + certificat';
TRANSLATIONS.en.dpl_see_cert    = 'See results by domain + certificate';

// ── Stage detail page ──
TRANSLATIONS.fr.stg_title        = 'Stage d\'Observation de 3ème';
TRANSLATIONS.en.stg_title        = '9th Grade Observation Internship';
TRANSLATIONS.fr.stg_subtitle     = 'Secteur bancaire · Découverte professionnelle · 1 semaine';
TRANSLATIONS.en.stg_subtitle     = 'Banking sector · Professional discovery · 1 week';
TRANSLATIONS.fr.stg_programme    = 'Programme de la semaine';
TRANSLATIONS.en.stg_programme    = 'Week programme';
TRANSLATIONS.fr.stg_competences  = 'Compétences développées';
TRANSLATIONS.en.stg_competences  = 'Skills developed';
TRANSLATIONS.fr.stg_apports      = 'Apports';
TRANSLATIONS.en.stg_apports      = 'Takeaways';

// ── NAS detail page ──
TRANSLATIONS.fr.nas_title        = 'Infrastructure Domestique Sécurisée';
TRANSLATIONS.en.nas_title        = 'Secure Home Infrastructure';
TRANSLATIONS.fr.lbl_services     = '12 services déployés';
TRANSLATIONS.en.lbl_services     = '12 deployed services';
TRANSLATIONS.fr.lbl_net_map      = 'Carte réseau des services';
TRANSLATIONS.en.lbl_net_map      = 'Service network map';
TRANSLATIONS.fr.lbl_roadmap      = 'Roadmap';
TRANSLATIONS.en.lbl_roadmap      = 'Roadmap';
TRANSLATIONS.fr.lbl_results      = 'Résultats clés';
TRANSLATIONS.en.lbl_results      = 'Key results';

// ── CVWeb detail page ──
TRANSLATIONS.fr.cvw_title        = 'Portfolio CV Web Multi-pages';
TRANSLATIONS.en.cvw_title        = 'Multi-page CV Web Portfolio';
TRANSLATIONS.fr.lbl_site_online  = 'Site en ligne';
TRANSLATIONS.en.lbl_site_online  = 'Live site';
TRANSLATIONS.fr.lbl_project_desc = 'Description du projet (SAÉ 1.04)';
TRANSLATIONS.en.lbl_project_desc = 'Project description (SAÉ 1.04)';

// ── BUT detail page ──
TRANSLATIONS.fr.but_title    = 'IUT de Colmar — Université de Haute-Alsace';
TRANSLATIONS.en.but_title    = 'IUT of Colmar — University of Haute-Alsace';
TRANSLATIONS.fr.lbl_modules  = 'Modules — Semestres 1 & 2 (Année 1)';
TRANSLATIONS.en.lbl_modules  = 'Modules — Semesters 1 & 2 (Year 1)';
TRANSLATIONS.fr.lbl_deep_content = 'Contenus approfondis';
TRANSLATIONS.en.lbl_deep_content = 'Key content areas';
TRANSLATIONS.fr.lbl_sae_done    = 'SAÉ réalisées';
TRANSLATIONS.en.lbl_sae_done    = 'Completed SAÉ projects';
TRANSLATIONS.fr.lbl_skills_aim  = 'Compétences visées (diplôme)';
TRANSLATIONS.en.lbl_skills_aim  = 'Target skills (degree)';

// ── CTF detail page ──
TRANSLATIONS.fr.ctf_title    = 'CTF Rhin Tech 2025';
TRANSLATIONS.en.ctf_title    = 'CTF Rhin Tech 2025';
TRANSLATIONS.fr.ctf_subtitle = 'Capture The Flag · Cybersécurité · Équipe de 3 via l\'IUT de Colmar';
TRANSLATIONS.en.ctf_subtitle = 'Capture The Flag · Cybersecurity · Team of 3 via IUT Colmar';
TRANSLATIONS.fr.ctf_rank_label = 'sur 40 équipes participantes';
TRANSLATIONS.en.ctf_rank_label = 'out of 40 participating teams';
TRANSLATIONS.fr.lbl_tools    = 'Outils & techniques utilisés';
TRANSLATIONS.en.lbl_tools    = 'Tools & techniques used';
TRANSLATIONS.fr.lbl_challenges = 'Catégories de challenges';
TRANSLATIONS.en.lbl_challenges = 'Challenge categories';

// ── SAÉ pages ──
TRANSLATIONS.fr.sae101_title = 'Sensibilisation à l\'hygiène informatique et à la cybersécurité';
TRANSLATIONS.en.sae101_title = 'IT security and cybersecurity awareness';
TRANSLATIONS.fr.sae102_title = 'S\'initier aux réseaux informatiques';
TRANSLATIONS.en.sae102_title = 'Introduction to computer networks';
TRANSLATIONS.fr.sae103_title = 'Découvrir un dispositif de transmission';
TRANSLATIONS.en.sae103_title = 'Discovering a transmission device';
TRANSLATIONS.fr.sae105_title = 'Traiter les données sur internet';
TRANSLATIONS.en.sae105_title = 'Processing data on the internet';

// ── Contact page ──
TRANSLATIONS.fr.cnt_title    = 'Formulaire de contact';
TRANSLATIONS.en.cnt_title    = 'Contact Form';
TRANSLATIONS.fr.cnt_social   = 'Mes liens';
TRANSLATIONS.en.cnt_social   = 'My links';
TRANSLATIONS.fr.cnt_coords   = 'Coordonnées directes';
TRANSLATIONS.en.cnt_coords   = 'Direct contact';
TRANSLATIONS.fr.cnt_firstname= 'Prénom';
TRANSLATIONS.en.cnt_firstname= 'First name';
TRANSLATIONS.fr.cnt_lastname = 'Nom';
TRANSLATIONS.en.cnt_lastname = 'Last name';
TRANSLATIONS.fr.cnt_email    = 'Email';
TRANSLATIONS.en.cnt_email    = 'Email';
TRANSLATIONS.fr.cnt_company  = 'Entreprise / Organisation';
TRANSLATIONS.en.cnt_company  = 'Company / Organization';
TRANSLATIONS.fr.cnt_subject  = 'Sujet';
TRANSLATIONS.en.cnt_subject  = 'Subject';
TRANSLATIONS.fr.cnt_message  = 'Message';
TRANSLATIONS.en.cnt_message  = 'Message';
TRANSLATIONS.fr.cnt_send     = 'ENVOYER LE MESSAGE';
TRANSLATIONS.en.cnt_send     = 'SEND MESSAGE';
TRANSLATIONS.fr.cnt_opt_alt  = 'Proposition d\'alternance';
TRANSLATIONS.en.cnt_opt_alt  = 'Work-study proposal';
TRANSLATIONS.fr.cnt_opt_stage= 'Proposition de stage';
TRANSLATIONS.en.cnt_opt_stage= 'Internship proposal';
TRANSLATIONS.fr.cnt_opt_proj = 'Collaboration projet';
TRANSLATIONS.en.cnt_opt_proj = 'Project collaboration';
TRANSLATIONS.fr.cnt_opt_q    = 'Question générale';
TRANSLATIONS.en.cnt_opt_q    = 'General question';
TRANSLATIONS.fr.cnt_opt_other= 'Autre';
TRANSLATIONS.en.cnt_opt_other= 'Other';

// ── Referentiel ──
TRANSLATIONS.fr.ref_title = 'Référentiel de compétences BUT R&T';
TRANSLATIONS.en.ref_title = 'BUT R&T Skills Framework';
TRANSLATIONS.fr.ref_ac    = 'Apprentissages Critiques (AC)';
TRANSLATIONS.en.ref_ac    = 'Critical Learning (AC)';
TRANSLATIONS.fr.ref_ce    = 'Critères d\'Évaluation (CE)';
TRANSLATIONS.en.ref_ce    = 'Evaluation Criteria (CE)';

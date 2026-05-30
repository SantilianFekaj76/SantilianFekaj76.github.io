// shared.js — injects nav and footer, highlights active link
(function () {
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  const navHTML = `
  <nav>
    <a href="index.html" class="nav-logo">Harrow <span>&</span> Black</a>
    <ul class="nav-links">
      <li><a href="collections.html" ${currentPage === 'collections.html' ? 'class="active"' : ''}>Collections</a></li>
      <li><a href="bespoke.html"     ${currentPage === 'bespoke.html'     ? 'class="active"' : ''}>Bespoke</a></li>
      <li><a href="atelier.html"     ${currentPage === 'atelier.html'     ? 'class="active"' : ''}>Atelier</a></li>
    </ul>
    <a href="contact.html" class="nav-cta">Book Consultation</a>
  </nav>`;

  const footerHTML = `
  <footer>
    <div class="footer-brand">
      <a href="index.html" class="nav-logo">Harrow <span style="color:var(--gold)">&</span> Black</a>
      <p>Premium bespoke tailoring since 1987. Crafted by hand in our London atelier for those who understand that excellence is never accidental.</p>
    </div>
    <div class="footer-col">
      <h4>Collections</h4>
      <ul>
        <li><a href="collections.html">The Obsidian</a></li>
        <li><a href="collections.html">The Sterling</a></li>
        <li><a href="collections.html">The Sovereign</a></li>
        <li><a href="collections.html">Black Label</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <ul>
        <li><a href="bespoke.html">Bespoke Tailoring</a></li>
        <li><a href="bespoke.html">Made to Measure</a></li>
        <li><a href="bespoke.html">Alterations</a></li>
        <li><a href="bespoke.html">Trunk Shows</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Atelier</h4>
      <ul>
        <li><a href="atelier.html">London</a></li>
        <li><a href="atelier.html">New York</a></li>
        <li><a href="atelier.html">Milan</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
  </footer>
  <div class="footer-bottom">
    <p>© 2024 Harrow & Black Ltd. All rights reserved.</p>
    <p>Privacy Policy · Terms of Service</p>
  </div>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Kintsugi background veins
  const kintsugiSVG = `<svg xmlns="http://www.w3.org/2000/svg" style="position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.18" preserveAspectRatio="none" viewBox="0 0 1440 900">
    <defs>
      <filter id="kglow">
        <feGaussianBlur stdDeviation="2.5" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <linearGradient id="vein1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#c9a84c" stop-opacity="0"/>
        <stop offset="30%" stop-color="#e8c96b" stop-opacity="1"/>
        <stop offset="70%" stop-color="#c9a84c" stop-opacity="0.8"/>
        <stop offset="100%" stop-color="#c9a84c" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="vein2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#c9a84c" stop-opacity="0"/>
        <stop offset="40%" stop-color="#e8c96b" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#c9a84c" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="vein3" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#c9a84c" stop-opacity="0"/>
        <stop offset="50%" stop-color="#e8c96b" stop-opacity="1"/>
        <stop offset="100%" stop-color="#c9a84c" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <g filter="url(#kglow)">
      <!-- Main fracture left — thick primary crack -->
      <path d="M 180,0 L 210,45 L 195,110 L 230,175 L 215,260 L 245,340 L 228,420 L 260,510 L 240,600 L 270,700 L 255,820 L 248,900" stroke="url(#vein1)" stroke-width="2.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Branch from main left -->
      <path d="M 215,260 L 310,295 L 370,280 L 440,310 L 490,295" stroke="#c9a84c" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.7"/>
      <!-- Sub-branch -->
      <path d="M 370,280 L 395,350 L 380,430" stroke="#c9a84c" stroke-width="0.8" fill="none" stroke-linecap="round" opacity="0.5"/>
      <!-- Main fracture right — primary -->
      <path d="M 1260,0 L 1230,80 L 1255,155 L 1220,230 L 1240,320 L 1210,400 L 1235,490 L 1205,580 L 1228,670 L 1200,780 L 1218,900" stroke="url(#vein2)" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Branch from main right -->
      <path d="M 1220,230 L 1140,265 L 1070,250 L 1010,278" stroke="#c9a84c" stroke-width="1.2" fill="none" stroke-linecap="round" opacity="0.65"/>
      <!-- Mid horizontal fracture -->
      <path d="M 490,295 L 560,320 L 650,305 L 740,335 L 830,315 L 920,342 L 1010,278" stroke="url(#vein3)" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Drop from mid -->
      <path d="M 740,335 L 758,410 L 744,500 L 762,590 L 748,680" stroke="#c9a84c" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.6"/>
      <!-- Upper connector -->
      <path d="M 210,45 L 290,30 L 390,58 L 470,38 L 570,62 L 680,42 L 790,68 L 900,48 L 1020,72 L 1130,50 L 1230,80" stroke="#c9a84c" stroke-width="0.9" fill="none" stroke-linecap="round" opacity="0.5"/>
      <!-- Fine hairline cracks -->
      <path d="M 228,420 L 300,445 L 360,435 L 400,460" stroke="#c9a84c" stroke-width="0.5" fill="none" stroke-linecap="round" opacity="0.4"/>
      <path d="M 650,305 L 660,380 L 648,450" stroke="#c9a84c" stroke-width="0.5" fill="none" stroke-linecap="round" opacity="0.35"/>
      <path d="M 920,342 L 940,415 L 928,488 L 945,560" stroke="#c9a84c" stroke-width="0.6" fill="none" stroke-linecap="round" opacity="0.4"/>
      <path d="M 1140,265 L 1125,355 L 1142,440" stroke="#c9a84c" stroke-width="0.7" fill="none" stroke-linecap="round" opacity="0.45"/>
      <!-- Bottom region cracks -->
      <path d="M 248,820 L 350,840 L 450,825 L 548,848 L 650,832 L 748,855 L 840,838 L 940,858 L 1060,840 L 1160,860 L 1218,900" stroke="#c9a84c" stroke-width="0.9" fill="none" stroke-linecap="round" opacity="0.4"/>
    </g>
  </svg>`;
  const bg = document.querySelector('.gold-lines-bg');
  if (bg) bg.innerHTML = kintsugiSVG;

  // Scroll reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

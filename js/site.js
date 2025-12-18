function toggleNav() {
  const links = document.querySelector('.nav-links');
  const toggle = document.querySelector('.nav-toggle');
  if (!links || !toggle) return;

  const isOpen = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

const THEME_KEY = 'site-theme';

function applyTheme(theme) {
  const isLight = theme === 'light';
  document.body.classList.toggle('theme-light', isLight);
  const toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.textContent = isLight ? '🌙' : '☀️';
    toggle.setAttribute('aria-pressed', isLight ? 'true' : 'false');
  }
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const theme = saved || (prefersLight ? 'light' : 'dark');
  applyTheme(theme);

  const toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = document.body.classList.contains('theme-light') ? 'dark' : 'light';
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }
}

const NAV_ITEMS = [
  { href: '#home', label: 'Home', key: 'home' },
  { href: '#notes', label: 'Notes', key: 'notes' },
  { href: '#projects', label: 'Work', key: 'work' }
];

function scrollToTarget(target) {
  const section = document.querySelector(target);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return true;
  }
  return false;
}

function handleNavClick(event, item) {
  event.preventDefault();

  const onPage = scrollToTarget(item.href);
  if (!onPage) {
    // If the section isn't on this page (blog/work), take the user to the main page anchor.
    window.location.href = `index.html${item.href}`;
  }
}

function closeMobileNav() {
  const nav = document.querySelector('.nav-links');
  if (nav) {
    nav.classList.remove('open');
  }

  const toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.setAttribute('aria-expanded', 'false');
  }
}

function buildNav(activePage) {
  const nav = document.querySelector('.nav-links');
  if (!nav) return;

  nav.innerHTML = NAV_ITEMS.map((item) => `<a href="${item.href}" data-nav-key="${item.key}" class="${item.key === activePage ? 'active' : ''}">${item.label}</a>`).join('');

  const toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.setAttribute('aria-expanded', 'false');
  }

  nav.querySelectorAll('a').forEach((link, index) => {
    link.addEventListener('click', (event) => {
      handleNavClick(event, NAV_ITEMS[index]);
      closeMobileNav();
    });
  });
}

function renderStats() {
  const statRow = document.querySelector('[data-stats]');
  if (!statRow || !Array.isArray(SITE_DATA?.stats)) return;
  statRow.innerHTML = SITE_DATA.stats
    .map((stat) => `<div class="stat"><div class="section-title">${stat.value}</div><div class="section-subtitle">${stat.label}</div></div>`)
    .join('');
}

function renderSkills() {
  const skillGrid = document.querySelector('[data-skills]');
  if (!skillGrid || !Array.isArray(SITE_DATA?.skills)) return;
  skillGrid.innerHTML = SITE_DATA.skills
    .map(
      (skill) => `
        <div class="badge-card">
          <div class="badge-icon">${skill.icon}</div>
          <div>
            <h4 class="card-title">${skill.title}</h4>
            <p class="card-desc">${skill.description}</p>
          </div>
        </div>
      `
    )
    .join('');
}

function renderHighlights() {
  const container = document.querySelector('[data-highlights]');
  if (!container || !Array.isArray(SITE_DATA?.highlights)) return;
  container.innerHTML = SITE_DATA.highlights
    .map(
      (item) => `
        <div class="list-item">
          <div class="meta"><span class="tag">${item.icon}</span></div>
          <h4 class="card-title">${item.title}</h4>
          <p class="card-desc">${item.summary}</p>
        </div>
      `
    )
    .join('');
}

function buildTags(tags = []) {
  return tags.map((tag) => `<span class="tag">${tag}</span>`).join('');
}

function renderProjects(limit) {
  const grid = document.querySelector('[data-projects]');
  if (!grid || !Array.isArray(SITE_DATA?.projects)) return;
  const items = limit ? SITE_DATA.projects.slice(0, limit) : SITE_DATA.projects;
  grid.innerHTML = items
    .map(
      (project) => `
        <article class="card">
          <img src="${project.image}" alt="${project.title} preview" class="preview" />
          <h3 class="card-title">${project.title}</h3>
          <p class="card-desc">${project.description}</p>
          <div class="card-meta">${buildTags(project.tags)}</div>
          <div class="card-actions">
            <a class="button secondary" href="${project.link}" target="_blank" rel="noopener">View case study</a>
            <span class="tag">Project</span>
          </div>
        </article>
      `
    )
    .join('');
}

function renderNotes(limit) {
  const list = document.querySelector('[data-notes]');
  if (!list || !Array.isArray(SITE_DATA?.notes)) return;
  const items = limit ? SITE_DATA.notes.slice(0, limit) : SITE_DATA.notes;
  list.innerHTML = items
    .map(
      (note) => `
        <article class="list-item">
          <div class="meta">
            <span>${new Date(note.date).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}</span>
            <span class="tag">Note</span>
          </div>
          <h3 class="card-title">${note.title}</h3>
          <p class="card-desc">${note.description}</p>
          <a class="button secondary" href="${note.link}" target="_blank" rel="noopener">Read</a>
        </article>
      `
    )
    .join('');
}

function bindMailTos() {
  const buttons = document.querySelectorAll('[data-email-link]');
  buttons.forEach((btn) => {
    btn.setAttribute('href', SITE_DATA.links.email);
  });
}

function setupScrollSpy() {
  const sections = document.querySelectorAll('[data-section]');
  const navLinks = document.querySelectorAll('.nav-links a');
  if (!sections.length || !navLinks.length) return;

  const navByKey = NAV_ITEMS.reduce((acc, item) => {
    const link = document.querySelector(`.nav-links a[data-nav-key="${item.key}"]`);
    if (link) acc[item.key] = link;
    return acc;
  }, {});

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const key = entry.target.getAttribute('data-section');
          navLinks.forEach((link) => link.classList.remove('active'));
          if (navByKey[key]) {
            navByKey[key].classList.add('active');
          }
        }
      });
    },
    {
      threshold: 0.35,
      rootMargin: '-20% 0px -20% 0px'
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function bindBrandRefresh() {
  const brand = document.querySelector('.brand');
  if (!brand) return;

  brand.addEventListener('click', (event) => {
    event.preventDefault();
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
      window.location.reload();
    } else {
      window.location.href = 'index.html';
    }
  });
}

function initPage(activePage) {
  initTheme();
  buildNav(activePage);
  renderStats();
  renderSkills();
  renderProjects(activePage === 'home' ? 3 : undefined);
  renderNotes(activePage === 'home' ? 3 : undefined);
  renderHighlights();
  bindMailTos();
  bindBrandRefresh();
  setupScrollSpy();

  const toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', toggleNav);
  }
}

// Navegación móvil accesible
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    nav.classList.remove('is-open');
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    toggle.setAttribute('aria-label', open ? 'Abrir menú' : 'Cerrar menú');
    nav.classList.toggle('is-open', !open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
}

// Animaciones de entrada discretas (sin ocultar contenido si JS está desactivado)
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px 30px 0px' });
  document.querySelectorAll('.hero, .section, .page-intro, .card, .post-item, .reveal').forEach(el => {
    el.classList.add('will-reveal');
    observer.observe(el);
  });
}

// Búsqueda local: no envía consultas a servidores
const search = document.querySelector('#project-search');
if (search) {
  const cards = [...document.querySelectorAll('.project-card')];
  const count = document.querySelector('#project-count');
  const empty = document.querySelector('#project-empty');
  const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('es');
  const filter = () => {
    const query = normalize(search.value.trim());
    let visible = 0;
    cards.forEach(card => {
      const match = normalize(card.dataset.search || '').includes(query);
      card.hidden = !match;
      if (match) visible++;
    });
    count.textContent = `${visible} ${visible === 1 ? 'proyecto' : 'proyectos'}`;
    empty.hidden = visible !== 0;
  };
  search.addEventListener('input', filter);
  filter();
}

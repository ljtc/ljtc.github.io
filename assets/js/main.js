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


// Numeración de secciones, subsecciones, resultados y referencias por artículo.
(() => {
  const paper = document.querySelector('[data-numbered-paper]');
  if (!paper) return;

  let section = 0;
  let subsection = 0;
  let result = 0;
  const references = new Map();
  const labels = { 'teorema': 'Teorema', 'lema': 'Lema', 'proposición': 'Proposición', 'proposicion': 'Proposición', 'corolario': 'Corolario', 'definición': 'Definición', 'definicion': 'Definición', 'ejemplo': 'Ejemplo', 'observación': 'Observación', 'observacion': 'Observación' };
  const register = (node, number, kind) => {
    if (!node.id) return;
    if (references.has(node.id)) console.warn('Identificador duplicado:', node.id);
    references.set(node.id, { number, kind });
  };

  // Los encabezados h2/h3 reciben números visibles. El contador de
  // teoremas solo se reinicia en h2 (no en h3).
  paper.querySelectorAll('h2, h3, .math-statement').forEach(node => {
    if (node.matches('h2, h3')) {
      const isSection = node.matches('h2');
      if (isSection) {
        section++;
        subsection = 0;
        result = 0;
      } else {
        subsection++;
      }
      const number = isSection ? `${section}` : `${section || 1}.${subsection}`;
      // No duplicar un prefijo numérico escrito manualmente.
      // Es preferible dejar los títulos Markdown sin números.
      if (!/^\s*\d+(?:\.\d+)*\.?(?:\s|$)/.test(node.textContent)) {
        const prefix = document.createElement('span');
        prefix.className = 'heading-number';
        prefix.textContent = `${number}. `;
        prefix.setAttribute('aria-hidden', 'true');
        node.prepend(prefix);
      }
      register(node, number, 'Sección');
      return;
    }

    result++;
    const kind = (node.dataset.statement || 'teorema').toLocaleLowerCase('es');
    const number = `${section || 1}.${result}`;
    const numberEl = node.querySelector('.statement-number');
    if (numberEl) numberEl.textContent = number;
    register(node, number, labels[kind] || kind.charAt(0).toUpperCase() + kind.slice(1));
  });

  paper.querySelectorAll('a[data-ref]').forEach(link => {
    const target = references.get(link.dataset.ref);
    if (!target) {
      link.classList.add('reference-missing');
      console.warn('Referencia sin destino:', link.dataset.ref);
      return;
    }
    const prefix = link.dataset.refPrefix === 'none' ? '' : `${target.kind} `;
    link.textContent = `${prefix}${target.number}`;
    link.setAttribute('aria-label', `Ir a ${target.kind} ${target.number}`);
  });
})();


// Bibliografía con estilos numérico, autor-año y alfabético.
(() => {
  const paper = document.querySelector('[data-numbered-paper][data-bib-url]');
  if (!paper) return;
  const citations = [...paper.querySelectorAll('a[data-cite]')];
  const target = paper.querySelector('#bibliografia.bibliography-auto');
  if (!citations.length && !target) return;
  const style = ['numeric', 'author-year', 'alphabetic'].includes(paper.dataset.citationStyle)
    ? paper.dataset.citationStyle : 'numeric';

  // Lector ligero: soporta entradas habituales con valores entre llaves o comillas.
  function parseBib(text) {
    const entries = new Map(); let i = 0;
    const skip = () => { while (i < text.length && /\s/.test(text[i])) i++; };
    const balanced = (open, close) => {
      if (text[i] !== open) return '';
      i++; let depth = 1, value = '';
      while (i < text.length && depth) {
        const c = text[i++];
        if (c === '\\' && i < text.length) { value += c + text[i++]; continue; }
        if (c === open) depth++;
        if (c === close) depth--;
        if (depth) value += c;
      }
      return value;
    };
    while (i < text.length) {
      const at = text.indexOf('@', i); if (at < 0) break;
      i = at + 1; const match = /^[A-Za-z]+/.exec(text.slice(i)); if (!match) continue;
      const type = match[0].toLowerCase(); i += match[0].length; skip();
      if (!'{('.includes(text[i] || '!')) continue;
      const open = text[i], body = balanced(open, open === '{' ? '}' : ')');
      if (['comment', 'preamble', 'string'].includes(type)) continue;
      const comma = body.indexOf(','); if (comma < 0) continue;
      const key = body.slice(0, comma).trim(); if (!key) continue;
      let j = comma + 1; const fields = {};
      while (j < body.length) {
        while (j < body.length && /[\s,]/.test(body[j])) j++;
        const fieldMatch = /^[A-Za-z][A-Za-z0-9_-]*/.exec(body.slice(j)); if (!fieldMatch) break;
        const field = fieldMatch[0].toLowerCase(); j += fieldMatch[0].length;
        while (/\s/.test(body[j] || '')) j++;
        if (body[j] !== '=') break;
        j++; while (/\s/.test(body[j] || '')) j++;
        let value = '';
        if (body[j] === '{' || body[j] === '"') {
          const left = body[j], right = left === '{' ? '}' : '"'; j++; let depth = 1;
          while (j < body.length && depth) {
            const c = body[j++];
            if (c === '\\' && j < body.length) { value += c + body[j++]; continue; }
            if (left === '{' && c === '{') depth++;
            if (c === right) depth--;
            if (depth) value += c;
          }
        } else { while (j < body.length && body[j] !== ',') value += body[j++]; }
        fields[field] = value.trim().replace(/[{}]/g, '');
        while (j < body.length && body[j] !== ',') j++;
        j++;
      }
      entries.set(key, { type, ...fields });
    }
    return entries;
  }
  const authors = entry => (entry.author || entry.editor || 'Autor desconocido').split(/\s+and\s+/i).map(x => x.trim());
  const surname = name => {
    if (name.includes(',')) return name.split(',')[0].trim();
    const parts = name.trim().split(/\s+/); return parts[parts.length - 1] || name;
  };
  const authorLabel = entry => {
    const names = authors(entry).map(surname);
    return names.length === 1 ? names[0] : names.length === 2 ? names.join(' y ') : `${names[0]} et al.`;
  };
  const year = entry => entry.year || 's. f.';
  const formatEntry = entry => {
    const people = authors(entry).join(', ');
    const details = [entry.journal || entry.booktitle || entry.publisher || '', entry.volume ? `vol. ${entry.volume}` : '', entry.number ? `núm. ${entry.number}` : '', entry.pages ? `pp. ${entry.pages.replace(/--/g, '–')}` : '', year(entry)].filter(Boolean);
    return `${people}. ${entry.title || 'Sin título'}. ${details.join(', ')}.`;
  };
  const showStatus = message => {
    if (!target) return;
    const p = document.createElement('p'); p.className = 'bib-status'; p.textContent = message;
    target.replaceChildren(p);
  };
  fetch(paper.dataset.bibUrl)
    .then(response => { if (!response.ok) throw new Error(`HTTP ${response.status}`); return response.text(); })
    .then(text => {
      const entries = parseBib(text);
      const used = [];
      for (const citation of citations) {
        for (const key of citation.dataset.cite.split(',').map(x => x.trim()).filter(Boolean)) {
          if (entries.has(key) && !used.includes(key)) used.push(key);
        }
      }
      const sorted = style === 'numeric' ? used : [...used].sort((a, b) =>
        authorLabel(entries.get(a)).localeCompare(authorLabel(entries.get(b)), 'es') ||
        year(entries.get(a)).localeCompare(year(entries.get(b))) || a.localeCompare(b));
      const labels = new Map();
      if (style === 'numeric') used.forEach((key, i) => labels.set(key, String(i + 1)));
      if (style === 'alphabetic') {
        const counts = new Map();
        for (const key of sorted) {
          const entry = entries.get(key);
          const base = surname(authors(entry)[0]).replace(/[^A-Za-zÀ-ÿ]/g, '').slice(0, 3) + year(entry).slice(-2);
          const n = (counts.get(base) || 0) + 1; counts.set(base, n);
          labels.set(key, base + (n > 1 ? String.fromCharCode(96 + n) : ''));
        }
      }
      if (style === 'author-year') {
        const groups = new Map();
        for (const key of sorted) {
          const entry = entries.get(key); const base = `${authorLabel(entry)}|${year(entry)}`;
          if (!groups.has(base)) groups.set(base, []);
          groups.get(base).push(key);
        }
        for (const keys of groups.values()) keys.forEach((key, i) => {
          const entry = entries.get(key);
          labels.set(key, `${authorLabel(entry)}, ${year(entry)}${keys.length > 1 ? String.fromCharCode(97 + i) : ''}`);
        });
      }
      for (const citation of citations) {
        const keys = citation.dataset.cite.split(',').map(x => x.trim()).filter(Boolean);
        const valid = keys.filter(key => entries.has(key));
        const missing = keys.filter(key => !entries.has(key));
        if (missing.length) { citation.classList.add('reference-missing'); console.warn('Claves BibTeX no encontradas:', missing.join(', ')); }
        const locator = (citation.dataset.locator || '').trim();
        const content = keys.map(key => labels.has(key) ? labels.get(key) : `? ${key}`).join('; ');
        citation.textContent = style === 'author-year' ? `(${content}${locator ? ', ' + locator : ''})` : `[${content}${locator ? ', ' + locator : ''}]`;
        if (valid.length) citation.href = `#bib-${encodeURIComponent(valid[0])}`;
        citation.setAttribute('aria-label', `Cita bibliográfica ${content}`);
      }
      if (!target) return;
      target.replaceChildren();
      if (!used.length) { showStatus('No hay citas bibliográficas válidas en este artículo.'); return; }
      const list = document.createElement('ol'); list.className = `bibliography bibliography-${style}`;
      for (const key of sorted) {
        const entry = entries.get(key);
        const li = document.createElement('li'); li.id = `bib-${key}`;
        if (style !== 'numeric') {
          const prefix = document.createElement('span'); prefix.className = 'bib-label';
          prefix.textContent = style === 'alphabetic' ? `[${labels.get(key)}] ` : '';
          li.append(prefix);
        }
        li.append(document.createTextNode(formatEntry(entry)));
        if (entry.doi || entry.url) {
          const link = document.createElement('a');
          const doi = entry.doi && /^10\.\d{4,9}\//.test(entry.doi) ? entry.doi : '';
          const url = doi ? `https://doi.org/${doi}` : entry.url;
          if (url && /^https:\/\//i.test(url)) {
            link.href = url; link.textContent = doi ? ' DOI' : ' Enlace'; link.rel = 'noopener noreferrer'; li.append(link);
          }
        }
        list.append(li);
      }
      target.append(list);
    })
    .catch(error => { console.error('Error cargando bibliografía:', error); showStatus('No se pudo cargar la bibliografía. Comprueba la ruta del archivo .bib.'); });
})();


// Referencias entre artículos: descarga el HTML publicado en el mismo sitio,
// reproduce el mismo algoritmo de numeración y resuelve el ID de destino.
// Sin plugins de Jekyll, índices manuales ni APIs externas.
(() => {
  const paper = document.querySelector('[data-numbered-paper]');
  if (!paper) return;
  const links = [...paper.querySelectorAll('a[data-cross-ref][data-cross-ref-url]')];
  if (!links.length) return;
  const kinds = { 'teorema':'Teorema', 'lema':'Lema', 'proposición':'Proposición', 'proposicion':'Proposición', 'corolario':'Corolario', 'definición':'Definición', 'definicion':'Definición', 'ejemplo':'Ejemplo', 'observación':'Observación', 'observacion':'Observación' };
  const cache = new Map();
  function indexPaper(root) {
    let section = 0, subsection = 0, result = 0;
    const index = new Map();
    root.querySelectorAll('h2, h3, .math-statement').forEach(node => {
      let number, kind;
      if (node.matches('h2')) {
        section++; subsection = 0; result = 0;
        number = String(section); kind = 'Sección';
      } else if (node.matches('h3')) {
        subsection++;
        number = `${section || 1}.${subsection}`; kind = 'Sección';
      } else {
        result++;
        number = `${section || 1}.${result}`;
        const type = (node.dataset.statement || 'teorema').toLocaleLowerCase('es');
        kind = kinds[type] || type.charAt(0).toUpperCase() + type.slice(1);
      }
      if (node.id) index.set(node.id, { number, kind });
    });
    return index;
  }
  function getIndex(url) {
    if (!cache.has(url)) {
      cache.set(url, fetch(url, { credentials: 'same-origin' }).then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.text();
      }).then(html => {
        const documentCopy = new DOMParser().parseFromString(html, 'text/html');
        const remote = documentCopy.querySelector('[data-numbered-paper]');
        if (!remote) throw new Error('La página no contiene un artículo académico');
        return indexPaper(remote);
      }));
    }
    return cache.get(url);
  }
  links.forEach(async link => {
    const url = link.dataset.crossRefUrl;
    const id = link.dataset.crossRef;
    try {
      const index = await getIndex(url);
      const found = index.get(id);
      if (!found) throw new Error(`No existe el identificador ${id}`);
      const prefix = link.dataset.refPrefix === 'none' ? '' : `${found.kind} `;
      link.textContent = `${prefix}${found.number}`;
      link.setAttribute('aria-label', `Ir a ${found.kind} ${found.number} en otro artículo`);
    } catch (error) {
      link.classList.add('reference-missing');
      console.warn('Referencia entre artículos no resuelta:', url, id, error);
    }
  });
})();


/* Controles globales de demostraciones */

(() => {
  const paper = document.querySelector(
    "[data-numbered-paper]"
  );

  const controls = document.querySelector(
    "[data-proof-controls]"
  );

  if (!paper || !controls) return;

  const proofs = [
    ...paper.querySelectorAll("details.math-proof")
  ];

  // No mostrar botones si no hay demostraciones.
  if (proofs.length === 0) return;

  controls.hidden = false;

  const showButton = controls.querySelector(
    '[data-proof-action="show"]'
  );

  const hideButton = controls.querySelector(
    '[data-proof-action="hide"]'
  );

  function updateButtons() {
    const allOpen = proofs.every(proof => proof.open);
    const allClosed = proofs.every(proof => !proof.open);

    showButton.disabled = allOpen;
    hideButton.disabled = allClosed;
  }

  showButton.addEventListener("click", () => {
    proofs.forEach(proof => {
      proof.open = true;
    });

    updateButtons();
  });

  hideButton.addEventListener("click", () => {
    proofs.forEach(proof => {
      proof.open = false;
    });

    updateButtons();
  });

  // Actualizar controles al abrir una prueba individual.
  proofs.forEach(proof => {
    proof.addEventListener("toggle", updateButtons);
  });

  updateButtons();
})();


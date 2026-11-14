---
title: Proyectos
permalink: /proyectos/
---
<section class="page-intro reveal"><p class="eyebrow">MI TRABAJO</p><h1>Proyectos<span class="accent">.</span></h1><p class="lead">Una selección de ideas, experimentos y trabajos.</p></section>
<div class="project-tools reveal">
  <label class="search-label" for="project-search"><svg class="ui-icon" aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/></svg><span>Buscar proyectos</span></label>
  <input id="project-search" type="search" placeholder="Buscar por título, descripción o etiqueta…" autocomplete="off" aria-controls="project-grid">
  <p id="project-count" class="search-count" role="status" aria-live="polite"></p>
</div>
<div class="card-grid" id="project-grid">
{% for project in site.projects %}
  <a class="card reveal project-card" href="{{ project.url | relative_url }}" data-search="{{ project.title | append: ' ' | append: project.description | append: ' ' | append: project.tags | downcase | escape }}">
    <span class="card-kicker"><svg class="ui-icon" aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg> PROYECTO</span>
    <h2>{{ project.title | escape }}</h2><p>{{ project.description | escape }}</p>
    {% if project.tags %}<div class="tags">{% for tag in project.tags %}<span class="tag">{{ tag | escape }}</span>{% endfor %}</div>{% endif %}
    <span class="card-arrow">Ver detalles <svg class="ui-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg></span>
  </a>
{% endfor %}
</div>
<p id="project-empty" class="empty-state" hidden>No se encontraron proyectos. Prueba con otra palabra.</p>

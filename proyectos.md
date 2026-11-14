---
title: Proyectos
permalink: /proyectos/
---
<section class="page-intro"><p class="eyebrow">MI TRABAJO</p><h1>Proyectos<span class="accent">.</span></h1><p class="lead">Una selección de ideas, experimentos y trabajos.</p></section><div class="card-grid">{% for project in site.projects %}<a class="card" href="{{ project.url | relative_url }}"><span class="card-kicker">PROYECTO</span><h2>{{ project.title }}</h2><p>{{ project.description }}</p><span class="card-arrow">Ver detalles ↗</span></a>{% endfor %}</div>
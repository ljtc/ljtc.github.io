---
title: Inicio
layout: default
---
<section class="hero">
<p class="eyebrow">Bienvenidos</p>
<h1>Algunos proyectos en los que trabajo<span class="accent">.
</span></h1>
<p class="lead">En este espacio estaré compartiendo mis proyectos</p>
<div class="hero-actions"><a class="button" href="{{ '/proyectos/' | relative_url }}">Explorar proyectos ↗</a>
<a class="button button-secondary" href="{{ '/acerca/' | relative_url }}">Sobre mí</a>
</div>
</section>
<section class="section"><div class="section-heading"><h2>Proyectos destacados</h2><a href="{{ '/proyectos/' | relative_url }}">Ver todos →</a></div><div class="card-grid">{% assign featured = site.projects | where: 'featured', true %}{% for project in featured limit:3 %}<a class="card" href="{{ project.url | relative_url }}"><span class="card-kicker">PROYECTO</span><h3>{{ project.title }}</h3><p>{{ project.description }}</p><span class="card-arrow">Explorar ↗</span></a>{% endfor %}</div></section>
<section class="section"><div class="section-heading"><h2>Últimas publicaciones</h2><a href="{{ '/blog/' | relative_url }}">Ir las notas →</a></div><div class="post-list">{% for post in site.posts limit:3 %}<a class="post-item" href="{{ post.url | relative_url }}"><div><h3>{{ post.title }}</h3><p>{{ post.description }}</p></div><time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%d/%m/%Y' }}</time></a>{% endfor %}</div></section>
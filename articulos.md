---
title: Artículos académicos
permalink: /articulos/
---
<section class="page-intro"><p class="eyebrow">INVESTIGACIÓN Y NOTAS</p><h1>Artículos<span class="accent">.</span></h1><p class="lead">Notas, demostraciones y publicaciones matemáticas.</p></section>
<section class="post-list" aria-label="Artículos académicos">
{% assign papers = site.papers | sort: 'date' | reverse %}
{% for paper in papers %}
  <article class="post-item"><div><h2><a href="{{ paper.url | relative_url }}">{{ paper.title | escape }}</a></h2>{% if paper.abstract %}<p>{{ paper.abstract | escape }}</p>{% endif %}</div>{% if paper.date %}<time datetime="{{ paper.date | date: '%Y-%m-%d' }}">{{ paper.date | date: '%d/%m/%Y' }}</time>{% endif %}</article>
{% endfor %}
</section>

---
title: Blog
permalink: /blog/
---
<section class="page-intro"><p class="eyebrow">NOTAS Y APRENDIZAJES</p><h1>Blog<span class="accent">.</span></h1><p class="lead">Artículos, tutoriales y reflexiones.</p></section><div class="post-list">{% for post in site.posts %}<a class="post-item" href="{{ post.url | relative_url }}"><div><h2>{{ post.title }}</h2><p>{{ post.description }}</p></div><time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%d/%m/%Y' }}</time></a>{% endfor %}</div>
---
title: Matemáticas y diagramas
permalink: /matematicas/
math: true
tikz: true
---
<section class="page-intro"><p class="eyebrow">DEMOSTRACIÓN</p><h1>Matemáticas y diagramas<span class="accent">.</span></h1><p class="lead">Ejemplos de MathJax y TikZJax en GitHub Pages.</p></section>
<div class="prose">
<h2>MathJax</h2>
<p>Una fórmula en línea: \(e^{i\pi}+1=0\).</p>
<p>Una fórmula centrada:</p>
\[
\int_0^1 x^2\,dx = \frac{1}{3}.
\]
<h2>TikZJax</h2>
<p>Un diagrama sencillo:</p>
<script type="text/tikz">
\begin{tikzpicture}
  \draw[->] (0,0) -- (3,0) node[right] {$x$};
  \draw[->] (0,0) -- (0,2) node[above] {$y$};
  \draw[thick] (0,0) -- (2,1.5);
  \fill (2,1.5) circle (2pt);
\end{tikzpicture}
</script>
<p>Los diagramas se procesan en el navegador. TikZJax no admite todos los paquetes de una instalación completa de TeX.</p>
</div>

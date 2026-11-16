---
title: "Una identidad elemental y diagramas"
authors: ["Autor del portafolio"]
date: 2026-11-13
abstract: "Ejemplo de teoremas, demostraciones, ecuaciones numeradas, referencias, bibliografía y diagramas."
keywords: ["Álgebra", "LaTeX", "Jekyll"]
tikz: true
---

## Introducción

Para una aplicación en otro artículo, véase el {% include cross_ref.html paper="segunda-nota" id="thm-producto" %}.

También podemos citar la
{% include cross_ref.html paper="segunda-nota" id="sec-propiedades" %}.

{:#sec-introduccion}

Consulta la {% include ref.html id="sec-resultados" %} y la {% include ref.html id="subsec-pares" %}.

Este artículo es una plantilla. Las expresiones en línea, como $a^2+b^2$, se procesan con MathJax.

## Resultados
{:#sec-resultados}

### Enteros pares
{:#subsec-pares}

Los teoremas siguen numerándose por sección, no por subsección.

{% capture contenido_def %}
Un **entero par** es un entero  $n$  para el cual existe $k\in\mathbb Z$ tal que $n=2k$.
{% endcapture %}
{% include theorem.html type="definición" id="def-par" title="Entero par" content=contenido_def %}

{% capture contenido_teorema %}
La suma de dos enteros pares es par.
{% endcapture %}
{% include theorem.html type="teorema" id="thm-suma" title="Suma de pares" content=contenido_teorema %}

{% capture contenido_prueba %}
Sean $a=2m$ y $b=2n$, con $m,n\in\mathbb Z$. Entonces

\begin{equation}
a+b=2(m+n). \label{eq:suma-pares}
\end{equation}

Como $m+n\in\mathbb Z$, la suma es par.
{% endcapture %}
{% include proof.html content=contenido_prueba %}

La ecuación \(\eqref{eq:suma-pares}\) justifica el resultado. También puedes consultar el {% include ref.html id="thm-suma" %} y la {% include ref.html id="def-par" %}.


\begin{equation}
1+3+5+\cdots+(2n-1)=n^2.\label{eq:impares}
\end{equation}

Referencia cruzada: \(\eqref{eq:impares}\).

## Diagrama conmutativo

El siguiente diagrama sencillo se dibuja mediante TikZJax:

<script type="text/tikz">
\begin{tikzpicture}
  \node (A) at (0,1.5) {$A$};
  \node (B) at (3,1.5) {$B$};
  \node (C) at (0,0) {$C$};
  \node (D) at (3,0) {$D$};
  \draw[->] (A) -- node[above] {$f$} (B);
  \draw[->] (A) -- node[left] {$g$} (C);
  \draw[->] (B) -- node[right] {$h$} (D);
  \draw[->] (C) -- node[below] {$k$} (D);
\end{tikzpicture}
</script>

<script type="text/tikz">
  \begin{tikzcd}
    A \arrow[r, "\phi"] \arrow[d]
      & B \arrow[d, "\psi"] \\
    C \arrow[r, "\eta"]
      & D
  \end{tikzcd}
</script>

## Referencias

Para conocer más sobre TeX, consulta {% include cite.html key="knuth1984" %}.
El sistema LaTeX se describe en {% include cite.html key="lamport1994" locator="p. 25" %}.
También podemos citar ambas obras {% include cite.html keys="knuth1984,lamport1994" %}.
Podemos citar de nuevo {% include cite.html key="knuth1984" %} sin duplicar la entrada.

<div class="bibliography-auto" id="bibliografia" aria-label="Bibliografía automática">
  <p class="bib-status">Cargando bibliografía…</p>
</div>

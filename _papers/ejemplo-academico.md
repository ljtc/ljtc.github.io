---
title: "Una identidad elemental y diagramas"
authors: ["Autor del portafolio"]
date: 2026-11-13
abstract: "Ejemplo de teoremas, demostraciones, ecuaciones numeradas, referencias, bibliografía y diagramas."
keywords: ["Álgebra", "LaTeX", "Jekyll"]
tikz: true
---

## 1. Introducción

Este artículo es una plantilla. Las expresiones en línea, como \(a^2+b^2\), se procesan con MathJax.

## 2. Resultados

{% capture contenido_def %}
Un **entero par** es un entero \(n\) para el cual existe \(k\in\mathbb Z\) tal que \(n=2k\).
{% endcapture %}
{% include theorem.html type="definición" id="def-par" title="Entero par" content=contenido_def %}

{% capture contenido_teorema %}
La suma de dos enteros pares es par.
{% endcapture %}
{% include theorem.html type="teorema" id="thm-suma" title="Suma de pares" content=contenido_teorema %}

{% capture contenido_prueba %}
Sean \(a=2m\) y \(b=2n\), con \(m,n\in\mathbb Z\). Entonces

\begin{equation}
a+b=2(m+n). \label{eq:suma-pares}
\end{equation}

Como \(m+n\in\mathbb Z\), la suma es par.
{% endcapture %}
{% include proof.html content=contenido_prueba %}

La ecuación \(\eqref{eq:suma-pares}\) justifica el resultado. También puedes enlazar directamente al [teorema](#thm-suma) o a la [definición](#def-par).


\begin{equation}
1+3+5+\cdots+(2n-1)=n^2.\label{eq:impares}
\end{equation}

Referencia cruzada: \(\eqref{eq:impares}\).

## 3. Diagrama conmutativo

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

## 4. Referencias

<ol class="bibliography">
  <li id="ref-lamport">L. Lamport, <em>LaTeX: A Document Preparation System</em>, Addison-Wesley, 1994.</li>
  <li id="ref-knuth">D. E. Knuth, <em>The TeXbook</em>, Addison-Wesley, 1984.</li>
</ol>

Un ejemplo de cita bibliográfica: [Lamport, 1994](#ref-lamport).

---
layout: page
title: Categorías
description: Lo básico de teoría de categorías
img: assets/img/6.jpg
importance: 2
category: fun
tikzjax: true
---

Trataré de escribir una serie de posts acerca de teoría de categorías. Antes
necesito hacer pruebas para dibujar diagramas con `tikz-cd` mediante [TikzJax](https://tikzjax.com/).

> <script type="text/tikz">
>   \begin{tikzcd}
>     A \arrow[r, "\phi"] \arrow[d]
>       & B \arrow[d, "\psi"] \\
>     C \arrow[r, "\eta"swap]
>       & D
>   \end{tikzcd}
> </script>
{: .block-tikz}

Diagrama de producto

> <script type="text/tikz">
>   \begin{tikzcd}
>     A & A \times B \arrow[l, "\pi_A"swap] \arrow[r, "\pi_B"] & B \\
>     & C\arrow[ul, "f"] \arrow[u, dashed, "h"] \arrow[ur, "g"swap]
>   \end{tikzcd}
> </script>
{:.block-tikz}

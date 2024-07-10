---
layout: page
title: Categorías
description: Lo básico de teoría de categorías
img: assets/img/6.jpg
importance: 2
category: fun
tikzjax: true
---

Trataré de escribir una serie de posts acerca de teoría de categorías. Para esto
se requiere una buena forma de dibujar diagramas conmutativos y que se vean bien
en la página. 

[MathJax](https://www.mathjax.org/) tiene incluido
[amscd](https://docs.mathjax.org/en/latest/input/amscd.html) pero no es
suficiente ya que sólo se pueden hacer cuadrados. 

También pensé en incluir los diagramas como imágenes, pero no me gusta la idea
de tener que guardar cientos de imágenes en el repositorio.

Hasta el momento lo mejor que he encontrado es [TikzJax](https://tikzjax.com/).
Con este se puede hacer todo lo que hace [TikZ](https://tikz.dev/), aunque no
estoy seguro que bibliotecas se puedan usar. 
afortunadamente se puede usar la biblioteca `cd` que es la que necesito para
dibujar los diagramas de esta serie de posts. Como dice en la página de
[TikzJax](https://tikzjax.com/), todo lo hace el navegador. La desventaja de
esto es que no todos los navegadores pueden hacer lo necesario para que
funcione. Así que si no ves los diagramas, te recomiendo que uses un navegador
diferente (tal vez incluso en un dispositivo diferente, las versiones para
celulares no son tan completas como las versiones para computadoras).

Para ver si tu navegador soporta TikzJax puedes desplegar el diagrama de
producto de abajo.

{% details Diagrama de producto %}
> <script type="text/tikz">
>   \begin{tikzcd}
>     A & A \times B \arrow[l, "\pi_A"swap] \arrow[r, "\pi_B"] & B \\
>     & C\arrow[ul, "f"] \arrow[u, dashed, "h"] \arrow[ur, "g"swap]
>   \end{tikzcd}
> </script>
{:.block-tikz}
{% enddetails %}

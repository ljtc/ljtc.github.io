---
layout: page
title: Conjuntos 1
description: 2025-2
img: assets/img/1.jpg
importance: 4
category: work
toc:
  sidebar: left
---

Este curso está dividido en dos partes. Una parte clásica, donde se estudiara la
teoría de conjuntos de Zermelo-Fraenkel. La otra parte será una introducción a
la categoría de conjuntos abstractos de Lawvere (y de cierta forma, de Cantor).

En esta página se irán agregando notas acerca de las clases

## La categoría de conjuntos abstractos

### Clases 1 y 2

La definición más básica para poder dar la *categoría de conjuntos abstractos*
es la de categoría.

> ##### Definición
>
> Una categoría consta de:
>  * Una colección de objetos, denotados $$A$$, $$B$$, $$C$$, \ldots
>  * Una colección de flechas, denotadas $$f$$, $$g$$, $$h$$, \ldots
>  * Para cada flecha $$f$$, un par de objetos $$\text{dom}(f)$$ y $$\text{cod}(f)$$.
>    De esta forma, si $$\text{dom}(f)=A$$ y $$\text{cod}(f)=B$$, escribimos 
>    $$f\colon A\to B$$.
>  * Para cada objeto $$A$$, una flecha identidad $$\text{id}_A\colon A\to A$$.
>  * Para cada par de flechas $$f\colon A\to B$$ y $$g\colon B\to C$$, una
>    composición $$gf\colon A\to C$$.
>
>  Esta información debe satisfacer los siguientes axiomas:
>  * La composición es asociativa, $$h(gf)=(hg)f$$, y
>  * Las identidades son neutras, $$f\text{id}_A=f=\text{id}_Bf$$.
{: .block-thm }

Un tipo especial de objeto, que sirvió cómo motivación para la definición de
categoría es el terminal.

> ##### Definición
>
> Un objeto $$1$$ en una categoría $$\mathbf{A}$$ es *terminal* si para cada
> objeto $$A$$ en $$\mathbf{A}$$ existe una única flecha $$f\colon A\to 1$$.
{: .block-thm }

Recordemos que la notación para la única flecha hacia el terminal es $$!_A$$.

Finalmente, notamos que los conjuntos abstractos podrían ser conjuntos variables
y, para que se comporten como los conjunto usuales, agregamos algo para detener
la variación.

> ##### Definición
>
> Un objeto $$S$$ en una categoría $$\mathbf{A}$$ es un *separador* si para
> cualesquiera dos flechas $$f,g\colon A\to B$$, si se satisface que para toda
> $$x\colon S\to A$$ se tiene que $$fx=gx$$, entonces $$f=g$$.
{: .block-thm }

Denotamos con $$\mathcal{S}$$ a la colección de conjuntos abstractos y flechas
entre ellos. Hasta este momento tenemos los siguientes axiomas para
$$\mathcal{S}$$:

1. $$\mathcal{S}$$ es una categoría.
2. $$\mathcal{S}$$ tiene un objeto terminal $$1$$.
3. El objeto terminal $$1$$ es un separador en $$\mathcal{S}$$.


<iframe width="560" height="315" src="https://www.youtube.com/embed/wPSP7RoWdBo?si=4szb7cDDkmMM1R08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Clase 3

Empezamos con la definición de isomorfismo.

> ##### Definición
> 
> Sean $$A$$ y $$B$$ en $$\mathbf{A}$$. Una flecha $$f\colon A\to B$$ es un
> iso(morfismo) si existe una flecha $$g\colon B\to A$$ tal que
> $$gf=\text{id}_A$$ y $$fg=\text{id}_B$$. En este caso, decimos que $$A$$ y
> $$B$$ son isomorfos y escribimos $$A\cong B$$.
{: .block-thm }

<script type="text/tikz">
\begin{tikzcd}
  A\ar[r,"f"]\ar[dr,"\text{id}_A"'] & B\ar[d,"g"]\\
  & A
\end{tikzcd}

\begin{tikzcd}
  B\ar[r,"g"]\ar[dr,"\text{id}_B"'] & A\ar[d,"f"]\\
  & B
\end{tikzcd}
</script>

Un isomorfismo en $$\mathbf{Con}$$ es una biyección. En una categoría generada
por un orden parcial, un isomorfismo es una igualdad.

> ##### Proposición
>
> En una categoría arbitraria, el objeto terminal es único salvo isomorfismo.
>
> ##### Demostración
>
> Supongamos que $$1$$ y $$1'$$ son objetos terminales. Entonces, por
> definición, existen flechas $$!_1\colon 1\to 1'$$ y $$!_{1'}\colon 1'\to 1$$. 
> Además, como $$1$$ es terminal, existe una única flecha 
> $$\text{id}_1\colon 1\to 1$$. Así, $$!_{1'}\,!_1=\text{id}_1$$. De forma
> análoga, $$!_1\,!_{1'}=\text{id}_{1'}$$. Por lo tanto, $$1\cong 1'$$.
{: .block-thm }

De forma análoga a lo que hemos visto con el objeto terminal, podemos definir el
objeto inicial. Este tendrá ejemplos y propiedades análogas a las del terminal.

> ##### Definición
>
> Un objeto $$0$$ en una categoría $$\mathbf{A}$$ es *inicial* si para cada
> objeto $$A$$ en $$\mathbf{A}$$ existe una única flecha $$f\colon 0\to A$$.
{: .block-thm }

La notación para la única flecha desde el inicial es $$!_A$$. No habrá confusión
con la del objeto terminal ya que siempre se especificaran dominios y
codominios.

Es fácil ver que $$\emptyset$$ es un objeto inicial en $$\mathbf{Con}$$. Si
$$\mathbf{P}$$ es la categoría generada por el orden parcial 
$$\langle P,\leq\rangle$$, entonces $$\mathbf{P}$$ tiene un objeto inicial si y
sólo si $$P$$ tiene mínimo.

Un ejemplo de categoría diferente a las que hemos estado usando es la categoría
de espacios verctoriales sobre un campo $$k$$. Los objetos de esta categoría son
espacios vectoriales y las flechas son transformaciones lineales. En esta
categoría el espacio vectorial trivial, $$\{0\}$$, es un objeto tanto inicial
como terminal.

> ##### Axioma 3
>
> $$\mathcal{S}$$ tiene un objeto inicial $$0$$ y $$0\not\cong 1$$.
{: .block-thm }

Aunque tenemos pocos axiomas, ya podemos demostrar que el inicial en
$$\mathcal{S}$$ se parece al vacío.

> ##### Proposición
>
> En $$\mathcal{S}$$, el objeto inicial $$0$$ no tiene elementos globales.
>
> ##### Demostración
>
> Supongamos que $$0$$ tiene un elemento global, digamos $$x\colon 1\to 0$$.
> Como $$0$$ es inicial, existe una única flecha $$!_1\colon 0\to 1$$. Luego, si
> usamos que $$0$$ es inicial y $$1$$ es terminal, tenemos que 
> $$x\,!_1=\text{id}_1$$ y $$!_1\,x=\text{id}_0$$. Así, $$1\cong 0$$, lo cual es
> una contradicción.
{: .block-thm }

Finalmente, vimos la definición de inyectividad y suprayectividad en una
categoría con objeto terminal.

> ##### Definición
>
> * Una flecha $$f\colon A\to B$$ es *inyectiva* si ...
> * $$f\colon A\to B$$ es *suprayectiva* si ...
> * $$f\colon A\to B$$ es *biyectiva* si ...
{: .block-thm }

> ##### Proposición
>
> $$f\colon A\to B$$ es inyectiva si y sólo si para cualesquiera dos elementos
> globales $$a_1,a_2\colon 1\to A$$ se tiene que $$fa_1=fa_2$$ implica
> $$a_1=a_2$$.
{: .block-thm }

<iframe width="560" height="315" src="https://www.youtube.com/embed/DYBUWzdJ3t4?si=KRXYNpGYjq2WPWDb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Clase 4

En esta clase necesitamos la definición de mono(morfismo) y epi(morfismo).

> ##### Definición
>
> Sea $$f\colon A\to B$$ en $$\mathbf{A}$$. Decimos que $$f$$ es un
> + *monomorfismo* si para cualesquiera dos flechas $$x,y\colon T\to A$$ se
>   tiene que $$fx=fy$$ implica $$x=y$$.
> + *epimorfismo* si para cualesquiera dos flechas $$g,h\colon B\to C$$ se tiene
>   que $$gf=hf$$ implica $$g=h$$.
{: .block-thm }

Luego, vimos cómo son este tipo de flechas en $$\mathbf{Con}$$. De hecho, vimos
que si aceptamos un principio más, entonces las demostraciones se pueden hacer
en $$\mathcal{S}$$.

> ##### Proposición
>
> En $$\mathbf{Con}$$, una flecha $$f\colon A\to B$$ es un mono si y
> sólo si es inyectiva.
{: .block-thm }

Luego, para enunciar el principio que nos falta necesitamos dos conceptos más.

> ##### Definición
>
> Sean $$r\colon A\to B$$ y $$s\colon B\to A$$ en $$\mathbf{A}$$. Si se
> satisface que $$rs=\text{id}_B$$, entonces decimos que $$r$$ es una
> *retracción* (de $$s$$) y que $$s$$ es una *sección* (de $$r$$).
{: .block-thm }

Ahora sí, el principio que nos falta.

> ##### Axioma de elección
>
> Todo epi tiene una sección.
{: .block-thm }

> ##### Proposición
>
> En $$\mathbf{Con}$$, una flecha $$f\colon A\to B$$ es un epi si y sólo
> si es suprayectiva.
{: .block-thm }

<iframe width="560" height="315" src="https://www.youtube.com/embed/5b_lZ-GNDTs?si=rhF0Mf_lTFLIXifJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
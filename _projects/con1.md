---
layout: page
title: Conjuntos 1
description: 2025-2
img: assets/img/1.jpg
importance: 4
category: work
giscus_comments: true
toc:
  sidebar: left
---

Este curso está dividido en dos partes. Una parte clásica, donde se estudiara la
teoría de conjuntos de Zermelo-Fraenkel. La otra parte será una introducción a
la categoría de conjuntos abstractos de Lawvere (y de cierta forma, de Cantor).

En esta página se irán agregando notas acerca de las clases

## La categoría de conjuntos abstractos

### Semana 1

#### Clases 1 y 2

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

<br>
<br>

### Semana 2

#### Clase 3

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
> * Una flecha $$f\colon A\to B$$ es *inyectiva* si para cualquier
>   elemento global $$b\colon 1\to B$$ existe a lo más un elemento global 
>   $$a\colon 1\to A$$ tal que $$fa=b$$.
> * $$f\colon A\to B$$ es *suprayectiva* si para todo $$b\colon 1\to B$$ existe
>   un $$a\colon 1\to A$$ tal que $$fa=b$$.
> * $$f\colon A\to B$$ es *biyectiva* si es inyectiva y suprayectiva.
{: .block-thm }

> ##### Proposición
>
> $$f\colon A\to B$$ es inyectiva si y sólo si para cualesquiera dos elementos
> globales $$a_1,a_2\colon 1\to A$$ se tiene que $$fa_1=fa_2$$ implica
> $$a_1=a_2$$.
{: .block-thm }

<iframe width="560" height="315" src="https://www.youtube.com/embed/DYBUWzdJ3t4?si=KRXYNpGYjq2WPWDb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>

#### Clase 4

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

> ##### Axioma 4 (axioma de elección)
>
> En $$\mathcal{S}$$, todo epi tiene una sección.
{: .block-thm }

> ##### Proposición
>
> En $$\mathbf{Con}$$, una flecha $$f\colon A\to B$$ es un epi si y sólo
> si es suprayectiva.
{: .block-thm }

<iframe width="560" height="315" src="https://www.youtube.com/embed/5b_lZ-GNDTs?si=rhF0Mf_lTFLIXifJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>
<br>

### Semana 3

#### Clase 5
En esta clase definimos pertenencia y contensión en $$\mathcal{S}$$. Algo
importante que hay que notar es que estas nociones no son exactamente las mismas
que en conjuntos usuales. Por ejemplo, ninguna de ellas es global y admiten
propiedades que no satisfacen los conjunto usuales.

Antes de las definiciones importantes definimos un *subobjeto* de $$A$$ como un
mono de la forma $$m\colon S\to A$$.

> ##### Definición
>
> Sean $$x\colon X\to A$$ y $$m\colon S\to A$$. Decimos que $$x$$ 
> *pertenece a $$m$$ según $$A$$*, y lo denotamos $$x\in_A m$$, si existe
> $$h\colon X\to S$$ tal que $$mh=x$$.
>
> $$
> \begin{CD}
> X @>h>> S\\
> @VxVV @VVmV\\
> A @= A
> \end{CD}
> $$
{: .block-thm }

> ##### Definición
>
> Sean $$m\colon S\to A$$ y $$n\colon T\to A$$. Decimos que $$m$$ 
> *está contenido en $$n$$ según $$A$$*, y lo denotamos $$m\subseteq_A n$$, si
> existe $$h\colon S\to T$$ tal que $$nh=m$$.
>
> $$
> \begin{CD}
> S @>h>> T\\
> @VmVV @VVnV\\
> A @= A
> \end{CD}
> $$
{: .block-thm }

Observamos que en ambas definiciones, de existir la flecha $$h$$, esta es única.
Además, en la definición de contensión, mostramos que $$h$$ es mono.

> ##### Proposición
>
> Sean $$m\colon S\to A$$ y $$n\colon T\to A$$.
> 1. $$m\in_A m$$.
> 2. $$n\in_A m$$ si y sólo si $$n\subseteq_A m$$.
> 3. $$n\subseteq_A m$$ si y sólo si para todo $$x\colon X\to A$$ se tiene que 
>    $$x\in_A n$$ implica $$x\in_A m$$.
{: .block-thm }

<iframe width="560" height="315" src="https://www.youtube.com/embed/1UxG0Uf52zI?si=52uGFldcl7JZJz43" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>

#### Clase 6

La definición principal de esta clase fue la de *producto fibrado*. 

> ##### Definición
>
> Sean $$f\colon A\to B$$ y $$g\colon A\to C$$ en $$\mathbf{A}$$. Un 
> *producto fibrado* de $$g$$ a lo largo de $$f$$ es un objeto $$P$$ y dos
> flechas que hacen conmutar al siguiente diagrama:
>
> $$
> \begin{CD}
> P @>p_B>> B\\
> @Vp_AVV @VVgV\\
> A @>>f> C
> \end{CD}
> $$
>
> Además, si $$X$$ es otro objeto con flechas $$x_B\colon X\to B$$ y
> $$x_A\colon X\to A$$ que hacen conmutar a
>
> $$
> \begin{CD}
> X @>x_B>> B\\
> @Vx_AVV @VVgV\\
> A @>>f> C
> \end{CD}
> $$
>
> entonces existe una única flecha $$h\colon X\to P$$ tal que $$p_Bh=x_B$$ y
> $$p_Ah=x_A$$.
{: .block-thm }  

Vimos que, en $$\mathbf{Con}$$, el producto fibrado de $$g$$ a lo largo de $$f$$
es el conjunto

$$
P=\{(a,b)\in A\times B\mid f(a)=g(b)\}
$$

junto con las proyecciones a cada entrada.

Como queremos que la categoría de conjuntos abstractos se parezca a la de
conjuntos usuales, necesitamos pedir la existencia de productos fibrados.

> ##### Axioma 5
>
> $$\mathcal{S}$$ tiene productos fibrados.
{: .block-thm }

Luego, queremos al producto fibrado para hacer algunas construcciones. Por
ejemplo, podemos definir la imagen inversa como sigue.

> ##### Definición
>
> Sean $$f\colon A\to B$$ e $$n\colon T\rightarrowtail B$$. La *imagen inversa*
> de $$n$$ bajo $$f$$ es el producto fibrado de $$n$$ a lo largo de $$f$$.
>
> $$
> \begin{CD}
> f^{-1}n @>>> T\\
> @VVV @VVnV\\
> A @>>f> B
> \end{CD}
> $$
{: .block-thm }

<iframe width="560" height="315" src="https://www.youtube.com/embed/jwYDF6fah9o?si=AgMIEXGLWn1kKbw4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>

#### Clase 7

Lo primero que deberíamos revisar en la definición de imagen inversa es que esta
nos da un subobjeto de $$A$$.

> ##### Proposición
>
> Con la notación de la definición de producto fibrado, si $$g$$ es mono, 
> entonces $$p_A$$ es mono.
{: .block-thm }

Ahora, podemos ver que nuestra definición satisface lo mismo que la imagen
inversa en conjunto usuales.

> ##### Proposición
>
> Sean $$f\colon A\to B$$ e $$n\colon T\rightarrowtail B$$. Para cualquier
> elemento generalizado $$x\colon X\to A$$, se tiene que $$x\in_A p_A$$ si y
> sólo si $$fx\in_B n$$.
{: .block-thm }

Así como la imagen inversa es un caso particular de un producto fibrado, la
intersección es un caso particular de imagen inversa.

> ##### Definición
>
> Sean $$m\colon S\rightarrowtail A$$ y $$n\colon T\rightarrowtail A$$. 
> La *intersección* de $$m$$ y $$n$$ es el subobjeto de $$A$$ dado por la
> imagen inversa de $$n$$ bajo $$m$$.
>
> $$
> \begin{CD}
> S\cap T @>>> T\\
> @VVV @VVnV\\
> S @>>m> A
> \end{CD}
> $$
{: .block-thm }

Como la composición de monos es un mono, entonces la intersección es un
subobjeto de $$A$$. Así, la intersección de los subobjetos $$m$$ y $$n$$ de
arriba será denotada $$m\cap n\colon S\cap T\rightarrowtail A$$.

De nuevo vimos que la intersección satisface lo que esperamos de ella.

> ##### Proposición
>
> Sean $$m\colon S\rightarrowtail A$$ y $$n\colon T\rightarrowtail A$$. Para
> cualquier elemento generalizado $$x\colon X\to A$$, se tiene que $$x\in_A
> m\cap n$$ si y sólo si $$x\in_A m$$ y $$x\in_A n$$.
{: .block-thm }

Finalmente vimos la definición de clasificador de subobjetos. Seguimos lo que
pasa en conjuntos usuales con el conjunto $$2=\{0,1\}$$. Este conjunto sirve
como un conjunto de valores de verdad y puede ser usado para representar
subconjuntos por medio de funciones características.

<iframe width="560" height="315" src="https://www.youtube.com/embed/7i2lS9Vx6ZI?si=jXLPtI9Wx1yVNq1A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>
<br>


### Semana 4
#### Clase 8

En esta clase vimos la definición de clasificador de subobjetos.

> ##### Definición
>
> Un *clasificador de subobjetos* en $$\mathbf{A}$$ es un objeto $$\Omega$$ y
> una flecha $$v\colon 1\to\Omega$$ tal que para cualquier subobjeto 
> $$m\colon S\rightarrowtail A$$ existe una única flecha $$\chi_m\colon A\to\Omega$$
> tal que el siguiente diagrama es un producto fibrado.
>
> $$
> \begin{CD}
> S @>>> 1\\
> @VmVV @VVvV\\
> A @>>\chi_m> \Omega
> \end{CD}
> $$
{: .block-thm }

Esta definición sigue lo que satisface el conjunto $$2$$ en conjuntos usuales.
Además, vimos que el clasificador de subobjetos es único salvo isomorfismo.

> ##### Proposición
>
> Si $$v\colon 1\to\Omega$$ y $$v'\colon 1\to\Omega'$$ son clasificadores de 
> subobjetos en $$\mathbf{A}$$, entonces $$\Omega\cong\Omega'$$.
{: .block-thm }

<iframe width="560" height="315" src="https://www.youtube.com/embed/mSCb5aZz5uM?si=36bP1fZ4I3sbkQeh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>

#### Clase 9

Para demostrar que el clasificado de subobjetos es único salvo isomorfismo, es
necesario usar un resultado acerca de productos fibrados.

> ##### Lema del producto fibrado
>
> Consideremos el diagrama conmutativo \eqref{eq:lpf}. Si los dos cuadrados
> son productos fibrados, entonces el rectángulo también es un producto
> fibrado. Además, si el rectángulo y el cuadrado de la derecha son productos
> fibrados, entonces el cuadrado de la izquierda también es un producto
> fibrado.
> $$
> \begin{equation}\label{eq:lpf}
>   \begin{CD}
>     \bullet @>>> \bullet @>>> \bullet\\
>     @VVV @VVV @VVV\\
>     \bullet @>>> \bullet @>>> \bullet\\
>   \end{CD}
> \end{equation}
> $$
{: .block-thm }

<iframe width="560" height="315" src="https://www.youtube.com/embed/HT-Yycr1B4o?si=uWuSML3RQ72D6hGi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>
<br>

### Semana 5
#### Clases 10 y 11

En estas clases vimos algunas construcciones y propiedades con el clasificador
de subobjetos. La primera, y la razón por la cual necesitamos el lema del
producto fibrado es la siguiente.

> ##### Proposición
>
> El clasificador de subobjetos es único salvo iso.
{: .block-thm }

Como habíamos comentado, una flecha de la forma $$A\to\Omega$$ se puede
interpretar como una propiedad de "elementos" de $$A$$. Una de las propiedades
que estaremos usando es la que es verdadera en todos los elementos de $$A$$.
Esta es una flecha $$v_A\colon A\to\Omega$$ definida como la siguiente
composición

$$
\begin{CD}
A @>!_A>> 1 @>v>> \Omega.
\end{CD}
$$

Lo siguiente que necesitamos para hacer la construcción que queremos es la
diagonal del producto $$A\times A$$. En conjuntos sabemos como es,

$$
\Delta_A=\{(a,a)\mid a\in A\}.
$$

Este conjunto se puede ver como la imagen de la función 
$$\Delta_A\colon A\to A\times A$$ definida por $$a\mapsto(a,a)$$. Finalmente,
esta función satisface que al componerla con las proyecciones se obtiene la
identidad en $$A$$. Así, la diagonal se define mediante la propiedad universal
del producto, como en el siguiente diagrama. (Escrito aquí usando cuadrados en
lugar de triángulos ya que TiKzJax dejó de funcionar en esta página y amscd sólo
soporta cuadrados.)

$$
\begin{CD}
A @<p_2<< A\times A @>p_1>> A\\
@A{id_A}AA @A{\Delta_A}AA @AA{id_A}A\\ 
A @= A @= A
\end{CD}
$$

Una observación acerca de la flecha diagonal es que esta es mono.

> ##### Proposición
>
> La diagonal $$\Delta_A\colon A\to A\times A$$ es mono.
{: .block-thm }

Ahora podemos usar al clasificador de subobjetos para obtener la característica
de la diagonal. Esto es, consideramos el siguiente producto fibrado,

$$
\begin{CD}
A @>!_A>> 1\\
@V{\Delta_A}VV @VVvV\\
A\times A @>>{=_A}> \Omega
\end{CD}
$$

Finalmente, mostramos que $$=_A$$ es de verdad el predicado de igualdad en
$$A$$. Un predicado con dos variables libres del mismo tipo.

> ##### Proposición
>
> Sean $$x,y\colon X\to A$$. Sucede que $$=A(x,y)=v_X$$ si y sólo si $$x=y$$.
{: .block-thm }

<iframe width="560" height="315" src="https://www.youtube.com/embed/ogl6Kg7U3iE?si=5ouER4-ZnGgOb7d8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

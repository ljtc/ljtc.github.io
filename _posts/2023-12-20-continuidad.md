---
layout: distill
title: Un poco del axioma de continuidad
date: 2023-12-20
description: Breve descripción de lo que sabemos que implica que un topos es cohesivo.
tags: math
categories: cohesión
tikzjax: true
related_posts: false
bibliography: 2023-12-02-igor.bib
---

# Introducción
El axioma de continuidad fue presentado por Lawvere en <d-cite key="Lawvere2007"></d-cite>. Para enunciar dicho axioma empezamos con dos categorías extensivas y cartesianas cerradas, en casi todo lo que hagamos las categorías será dos topos $$\mathcal{E}$$ y $$\mathcal{S}$$. Luego tomamos funtores $$p_{!},p_{*}\colon\mathcal{E}\to\mathcal{S}$$ y $$p^{*},p^{!}\colon\mathcal{S}\to\mathcal{E}$$ tales que

$$
p_{!}\dashv p^{*}\dashv p_{*}\dashv p^{!}.
$$

Esta cadena de cuatro funtores adjuntos se abreviará con $$p\colon\mathcal{E}\to\mathcal{S}$$. Decimos que $$p$$ es precohesivo, o que $$\mathcal{E}$$ es precohesivo sobre $$\mathcal{S}$$ si se satisfacen los siguientes axiomas:
1. $$p_{!}$$ preserva productos finitos,
2. $$p^{*}$$ es fiel y pleno,
3. (*Nullstellensatz*) la transformación natural canónica $$\theta\colon p_{*}\to p_{!}$$ es puntualmente epi.

Dados $$E\in\mathcal{E}$$ y $$S\in\mathcal{S}$$, podemos definir el morfismo de comparación $$\kappa\colon p_{!}(E^{p^{*}S})\to (p_{!}E)^{p_{!}p^{*}S}$$ mediante la siguiente correspondencia:

$$
\begin{array}
{p}_{!}(E^{p^{*}S})\xrightarrow{\kappa} (p_{!}E)^{p_{!}p^{*}S}\\
\hline
p_{!}(E^{p^{*}S})\times p_{!}p^{*}S \to p_{!}E\\
\hline
p_{!}(E^{p^{*}S}\times p^{*}S) \xrightarrow{p_{!}\text{ev}} p_{!}E.
\end{array}
$$

Escrito de otra forma, $$\kappa$$ es el único morfismo que hace conmutar al siguiente diagrama

$$
\begin{CD}
  p_{!}(E^{p^{*}S})\times p_{!}p^{*}S @>{\cong}>> p_{!}(E^{p^{*}S}\times p^{*}S)\\
  @V{\kappa\times 1}VV @VV{p_{!}\text{ev}}V\\
  p_{!}(E)^{p_{!}p^{*}S}\times p_{!}p^{*}S @>>{\text{ev}}> p_{!}E
\end{CD}
$$

Como $$p^{*}$$ es fiel y pleno, entonces la counidad $$\tau\colon p_{!}p^{*}\to 1$$ es iso y así podemos formar la siguiente composición

$$
  \begin{CD}
    p_{!}(E^{p^{*}S}) @>{\kappa}>> p_{!}(E)^{p_{!}p^{*}S}
    @>{p_{!}(E)^{\tau^{-1}_{S}}}>> p_{!}(E)^{S},
  \end{CD}
$$

con la que podemos enunciar el axioma que nos interesa.

> **Axioma de continuidad** El morfismo canónico $$p_{!}(E^{p^{*}S})\to p_{!}(E)^{S}$$ es iso.

Además, decimos que un morfismo precohesivo $$p\colon\mathcal{E}\to\mathcal{S}$$ es cohesivo si se satisface el axioma de continuidad.

Hasta el momento hemos fallado en entender el significado de este axioma. Sin embargo, en algunos casos podemos dar condiciones para que se satisfaga.


# Continuidad en conjuntos
Lo primero que haremos en el camino para dar condiciones que impliquen que ciertos morfismos de topos son cohesivos es simplificar la situación. Desde este momento $$\mathcal{S}$$ es el topos $$\mathsf{Con}$$ y $$p\colon\mathcal{E}\to\mathsf{Con}$$ es un morfismo geométrico acotado, que puesto de una forma simple en este contexto significa que podemos pensar que $$\mathcal{E}$$ es un topos de gavillas.

Johnstone encontró condiciones necesarias y suficientes para que exista un morfismo precohesivo en la situación a la cual nos hemos restringido

> ##### Teorema
>
> Un morfismo geométrico acotado $$p\colon\mathcal{E}\to\mathsf{Con}$$ es precohesivo si y sólo si $$\mathcal{E}$$ tiene un sitio de definición $$\text{Gav}(\mathsf{C},J)$$ conexo, localmente conexo y tal que todo objeto de $$\mathsf{C}$$ tiene un punto.
{: .block-theorem }

En el caso de pregavillas, es decir, cuando la topología de Grothendieck es discreta, Menni escribió la la equivalencia en <d-cite key="Menni2014"></d-cite>.

> ##### Teorema
>
> Si $$\mathsf{C}$$ es una categoría tal que los idempotentes se escinden, entones el morfismo canónico $$p\colon\mathsf{Con}^{\mathsf{C}^{\text{op}}}\to\mathsf{Con}$$ es precohesivo si y sólo $$\mathsf{C}$$ tiene objeto terminal y todo objeto tiene un punto.
{: .block-theorem }

Además, en el mismo artículo Menni encuentra la única propiedad que conocemos que implica la satisfacción del axioma de continuidad. Antes de ver esa propiedad veremos cómo se calculan los objetos que aparecen en el morfismo canónico del axioma de continuidad en el caso de pregavillas.

Sea $$\mathsf{C}$$ una categoría tal que el morfismo canónico $$p\colon\widehat{\mathsf{C}}\to\mathsf{Con}$$ es precohesivo. Recordemos que dicho morfismo canónico es:

$$
\text{colim} \dashv \Delta \dashv \text{ev}_1 \dashv \square^{\mathsf{C}(1,-)}.
$$

Tomemos $$E\in\widehat{\mathsf{C}}$$ y $$S\in\mathsf{Con}$$. Los objetos que aparecen en el morfismo canónico del axioma de continuidad se pueden escribir de manera espacial en este contexto de pregavillas,

$$
  E^{p^{*}S} \cong \prod_{S}E.
$$

El isomorfismo está dado por la transformación natural que, en la componente $$C$$, es la función que a cada transformación natural $$\gamma\colon p^{*}S\times \mathsf{y}C\to E$$ le asigna el elemento $${\langle\gamma_{C}(s,\text{id}_{C})\rangle}_{s\in S}$$.

Con este isomorfismo podemos ver quién es la función en la componente $$C$$ del axioma de continuidad. En este caso se tiene que esta es la función

\begin{equation}
\label{eq:morcan}
  \varinjlim_{C\in\mathsf{C}}\prod_{S}EC \longrightarrow \left(\varinjlim_{C\in\mathsf{C}} EC\right)^{S}
\end{equation}

que a una clase $$\overline{(x_{s})_{s\in S}}$$ la manda a la función $$f\colon S\to\varinjlim_{C\in\mathsf{C}} EC$$ definida como $$s\mapsto\overline{x_{s}}$$.

> ##### Definición 
>
> Dado un morfismo precohesivo $$p\colon\mathcal{E}\to\mathcal{S}$$, diremos que un objeto $$E\in\mathcal{E}$$ es *débilmente Kan* si para cualquier $$S\in\mathcal{S}$$ el morfismo canónico $$p_{!}(E^{p^{*}S})\to p_{!}(E)^{S}$$ es iso.
{: .block-theorem }

Con estas observaciones podemos enunciar el siguiente resultado.

> ##### Teorema 
>
> Sea $$E\in\widehat{\mathsf{C}}$$. Los siguientes enunciados son equivalentes:
> 1. $$E$$ es débilmente Kan,
> 2. el morfismo canónico en \eqref{eq:morcan} es un iso para todo $$S\in\mathsf{Con}$$,
> 3. el morfismo canónico en \eqref{eq:morcan} es un iso con $$S=\mathbb{N}$$,
> 4. el morfismo canónico $$p_{!}(E^{p^{*}\mathbb{N}})\to p_{!}(E)^{\mathbb{N}}$$ es iso,
> 5. existe $$M\in\mathbb{N}$$ tal que si $$\overline{x}=\overline{y}$$ en $$p_{!}E$$, entonces existe una trayectoria de longitud menor o igual a $$M$$ que conecta a $$\overline{x}$$ con $$\overline{y}$$.
{: .block-theorem }

Para demostrar que alguien es débilmente Kan se usará el inciso 5 del teorema anterior. Además, para demostrar que un morfismo precohesivo $$p\colon\mathcal{E}\to\mathcal{S}$$ es cohesivo se demostrará que todo objeto $$E\in\mathcal{E}$$ es débilmente Kan. Por lo tanto, lo que nos interesa es ver qué es una trayectoria en $$p_{!}E$$ y ver cómo se pueden acotar.


# Trayectorias
Sean $$p\colon\widehat{\mathsf{C}}\to\mathsf{Con}$$ precohesivo y $$E\in\widehat{\mathsf{C}}$$. Dados $$x\in EC$$ y $$x'\in ED$$, diremos que el cospan

$$
\begin{CD}
C @>{\gamma_0}>> A @<{\gamma_1}<< D
\end{CD}
$$

conecta a $$x$$ con $$x'$$ en $$p_{!}E$$ si existe $$y\in EA$$ tal que $$y\cdot\gamma_0=x$$ y $$y\cdot\gamma_1=x'$$.

Además, cuando $$x\in EC$$ y $$x'\in ED$$ estén conectados con un cospan como arriba diremos que están conectados por una trayectoria de longitud $$1$$. Finalmente, $$x$$ y $$x'$$ están conectados si hay una trayectoria de longitud $$n$$ que los conecta, es decir, existe una suceción de cospans

$$
\begin{CD}
C @>{\gamma^{1}_{0}}>> A_1 @<{\gamma^{1}_{1}}<< B_1 @>>> \ldots
@<{\gamma^{n}_{0}}<< A_n @>{\gamma^{n}_{1}}>> D
\end{CD}
$$

y elementos $$x_i\in EA_{i}$$ y $$y_i\in EA_{i}$$ tales que $$y_i\cdot\gamma^{i}_{0}=x_{i-1}$$ y $$y_i\cdot\gamma^{i}_{1}=x_{i}$$, donde $$x_{0}=x$$ y $$x_{n}=x'$$.

No es difícil ver que la relación "estar conectado" es de equivalencia. Denotemos con $$\sim$$ a dicha relación.

> ##### Proposición
>
> Dada $$E\in\widehat{\mathsf{C}}$$, se tiene $$p_{!}E = (\coprod EC) / {\sim}$$.
{: .block-theorem }

Con este resultado podemos denotar a los elementos del colímite $$p_{!}E$$ como clases de equivalencia de elementos del coproducto, $$[x\in EC]$$, o bin identificar las dos notaciones de clase de equivalencia del colímite.

Ahora ya tenemos el significado completo del inciso 5 del teorema anterior, el cual seguiremos desarrollando para encontrar condiciones para que alguien sea débilmente Kan.

Primero, si $$\mathsf{C}$$ es una categoría con objeto terminal y tal que todo objeto tiene un punto, de tal forma que el morfismo canónico $$p\colon\widehat{\mathsf{C}}\to\mathsf{Con}$$ es precohesivo, entonces basta conectar puntos, es decir elementos de $$p_{*}E=E1$$.

> ##### Proposición
>
> Sea $$\mathsf{C}$$ una categoría con objeto terminal y tal que todo objeto tiene un punto. Todo elemento $$x\in EC$$ está conectado con un punto.
{: .block-theorem }

Si tomamos $$x\in EC$$ y $$c\colon 1\to C$$, entonces es fácil ver que 

$$
\begin{CD}
  C @>{\text{id}}>> C @<{c}<< 1
\end{CD}
$$

conecta a $$x\in EC$$ con $$x\cdot c\in E1$$.

Gracias a la proposición anterior nos podemos restringir a conectar puntos de una pregavilla.


# Conector
Como el nombre sugiere, un conector es objeto que captura la idea de conexión. Siguiendo la intuición del intervalo unitario $$I=[0,1]$$, un conector debe ser un objeto con dos puntos $$0,1\colon 1\to I$$.

Dado $$p\colon\widehat{\mathsf{C}}\to\mathsf{Con}$$ precohesivo, podemos pensar a una pregavilla $$E\in\widehat{\mathsf{C}}$$ como un espacio. El conjunto de puntos de este espacio es $$p_{*}E = E1$$. Lo que queremos es que $$EI$$ sea al conjunto de trayectorias del espacio, de tal forma que una trayectoria $$y\in EI$$ conecta a su punto inicial $$y\cdot 0$$ con su punto final $$y\cdot 1$$.

Notemos que de la definición de $$p_{*}$$, evaluar en $$1$$, y la de exponencial en $$\widehat{\mathsf{C}}$$ se tiene que si $$C\in\mathsf{C}$$ e identificamos a $$C$$ con el funtor representable $$\mathsf{C}(-,C)$$, entonces $$p_{*}(E^{C})=EC$$. En particular con el objeto bipuntuado $$I$$. Así, para decir que conexiones entre puntos están dadas por trayectorias tenemos la siguiente

> ##### Definición
>
> Sea $$\mathsf{C}$$ una categoría tal que el morfismo canónico $$p\colon\widehat{\mathsf{C}}\to\mathsf{Con}$$ es precohesivo. Un objeto bipuntuado $$0,1\colon 1\to I$$ en $$\mathsf{C}$$ es un conector si 
>
> <script type="text/tikz">
> \begin{tikzpicture}
>     \node at (0,0) {$$X$$};
>     \draw[->] (0,0) -- (3,0);
> \end{tikzpicture}
</script>
> es un coigualador. Test 4
{: .block-theorem }


# Intervalo abstracto

# Intervalo Igor
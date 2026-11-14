---
title: "Segunda nota: propiedades de los enteros pares"
authors: ["Autor del portafolio"]
date: 2026-11-14
abstract: "Demostración de referencias entre artículos académicos."
keywords: ["Álgebra", "Referencias cruzadas"]
---

## Propiedades
{:#sec-propiedades}

### Producto de enteros pares
{:#subsec-producto}

{% capture producto %}
El producto de dos enteros pares es un entero par.
{% endcapture %}
{% include theorem.html type="teorema" id="thm-producto" title="Producto de pares" content=producto %}

{% capture demostracion %}
Si $a=2m$ y $b=2n$, entonces $ab=2(2mn)$, que es par.
{% endcapture %}
{% include proof.html content=demostracion %}

La {% include ref.html id="sec-propiedades" %} contiene el resultado anterior.

En el artículo de ejemplo se encuentra la
{% include cross_ref.html paper="ejemplo-academico" id="def-par" %}
y el {% include cross_ref.html paper="ejemplo-academico" id="thm-suma" %}.

# Portafolio Jekyll para GitHub Pages

Portafolio oscuro, responsive y editable mediante Markdown.

## Publicar como sitio personal

1. Crea un repositorio público llamado `USUARIO.github.io` (sustituye `USUARIO` por tu nombre de usuario de GitHub).
2. Sube **el contenido de esta carpeta** a la raíz del repositorio (no la carpeta contenedora).
3. En **Settings → Pages → Build and deployment**, selecciona **Deploy from a branch**, rama `main`, carpeta `/ (root)` y guarda.
4. Visita `https://USUARIO.github.io/` después de que termine la publicación.

Para este caso, deja `url: ""` y `baseurl: ""` en `_config.yml`; las rutas relativas funcionarán.

## Publicar como repositorio de proyecto

Si el repositorio se llama `portafolio`, cambia en `_config.yml`:

```yaml
url: "https://USUARIO.github.io"
baseurl: "/portafolio"
```

La dirección será `https://USUARIO.github.io/portafolio/`.

## Personalización

- Edita `title` y `description` en `_config.yml`.
- Cambia el texto de `index.md` y `acerca.md`.
- Añade proyectos en `_projects/` con `title`, `description`, `featured` y `tags` en el encabezado YAML.
- Añade artículos en `_posts/` con nombres `AAAA-MM-DD-titulo.md`.
- Modifica los colores en `assets/css/style.css`.

## Probar localmente (opcional)

Instala Ruby, Bundler y las dependencias de compilación correspondientes a tu sistema. Luego:

```bash
bundle install
bundle exec jekyll serve
```

Abre `http://localhost:4000/`. Para probar una instalación en subruta, revisa `baseurl` y utiliza la ruta correspondiente.

## Notas

El archivo `Gemfile` utiliza la gema `github-pages` para mantener compatibilidad con las versiones soportadas por GitHub Pages. No es necesario ejecutar comandos localmente para publicar desde la rama `main`.


## Mejoras v2

- Animaciones suaves de entrada y hover, con respeto a `prefers-reduced-motion`.
- Iconos SVG integrados (no necesitas instalar una biblioteca).
- Buscador de proyectos en `/proyectos/`: filtra título, descripción y etiquetas, sin servidor.
- MathJax y TikZJax activables por página con `math: true` y `tikz: true` en el front matter.
- Página de demostración en `/matematicas/`.

### Añadir matemáticas a un artículo

En el front matter Markdown añade `math: true`. En el cuerpo usa `\( ... \)` para matemáticas en línea o `\[ ... \]` para fórmulas centradas. Puedes usar HTML en Markdown para evitar problemas de escapes.

### Añadir un diagrama TikZ

En el front matter añade `tikz: true` (también carga MathJax). En el cuerpo incluye:

```html
<script type="text/tikz">
\begin{tikzpicture}
  \draw (0,0) -- (2,1);
\end{tikzpicture}
</script>
```

Los scripts se cargan desde los CDN públicos de MathJax y TikZJax; el visitante necesita conexión a Internet. TikZJax admite un subconjunto de TikZ y no reemplaza a LuaLaTeX/TeX Live. Si un dibujo no funciona, compílalo localmente a SVG y enlaza el SVG desde `assets/`.

### Actualizar tu repositorio

Descomprime el ZIP y copia el **contenido** de `portafolio-jekyll-v2/` en la raíz del repositorio, conservando los archivos personales que hayas añadido. Revisa diferencias antes de sobrescribir `_config.yml`, `index.md`, `acerca.md` u otros archivos personalizados. GitHub Pages reconstruirá el sitio tras confirmar los cambios.


## v3: Publicaciones académicas

- `/articulos/`: índice de artículos.
- `_papers/`: cada archivo Markdown genera una publicación.
- `_layouts/paper.html`: diseño de artículo, autores, resumen y palabras clave.
- `_includes/theorem.html`: resultados con estilos (teorema, lema, definición, etc.).
- `_includes/proof.html`: demostraciones con símbolo QED.
- `math: true` viene activado por defecto para los artículos; `tikz: true` activa TikZJax.

### Escribir un teorema

```liquid
{% capture enunciado %}
Sea \(x\in\mathbb R\). Entonces \(x^2\ge 0\).
{% endcapture %}
{% include theorem.html type="lema" id="lema-uno" title="Positividad" content=enunciado %}
```

El diseño y la numeración visual de teoremas se controlan con CSS/JavaScript; para referencias fiables a resultados utiliza enlaces Markdown como `[Lema](#lema-uno)`. La numeración de ecuaciones y `\eqref` los realiza MathJax. Las referencias bibliográficas de ejemplo son enlaces internos manuales; no se incluye procesador BibTeX.

**Atención:** TikZJax solo admite una parte de TikZ. Los diagramas complejos se deben compilar como SVG externamente. MathJax y TikZJax dependen de sus CDN, por lo que requieren conexión a Internet.

### Actualizar una instalación existente

Sube los archivos nuevos y modificados, preservando tus cambios personales en `_config.yml`, páginas y publicaciones. Fusiona la configuración `papers` y sus `defaults` si ya modificaste `_config.yml`.


## Numeración y referencias automáticas (v4)

En artículos de `_papers/`, cada encabezado Markdown `##` inicia una sección.
Los resultados (teoremas, definiciones, lemas, etc.) comparten un contador que se
reinicia por sección. Por ejemplo, Definición 2.1 y Teorema 2.2.
No escribas manualmente el número delante del título de la sección.

Para insertar un resultado:

```liquid
{% capture enunciado %}
Para todo $x\in\mathbb R$, se cumple $x^2\geq 0$.
{% endcapture %}
{% include theorem.html type="teorema" id="thm-positivo" title="Positividad" content=enunciado %}
```

Para referenciarlo desde el mismo artículo:

```liquid
Como vimos en el {% include ref.html id="thm-positivo" %}, ...
```

La referencia se transforma automáticamente en «Teorema 2.1» (según la sección)
y enlaza al resultado. También admite `prefix="none"` para mostrar solo el número.
Los identificadores deben ser únicos dentro del artículo.

La numeración y las referencias de teoremas dependen de JavaScript en el navegador.
MathJax sigue gestionando las referencias a ecuaciones con `\label` y `\eqref`.
Este sistema no genera referencias entre artículos diferentes.


## v5 — Secciones y referencias cruzadas

En los artículos (`_papers`), los encabezados `##` se numeran como 1, 2, 3 y los `###` como 1.1, 1.2, 2.1. Los resultados (teoremas, definiciones, etc.) mantienen un contador compartido por sección `##`; las subsecciones no lo reinician.

Añade identificadores explícitos con Kramdown, en una línea inmediatamente posterior al encabezado:

```markdown
## Preliminares
{:#sec-preliminares}

### Grupos
{:#sec-grupos}
```

Para citar secciones, utiliza el mismo include que para teoremas:

```liquid
Véase la {% include ref.html id="sec-preliminares" %}.
Véase la {% include ref.html id="sec-grupos" %}.
Solo el número: {% include ref.html id="sec-grupos" prefix="none" %}.
```

No escribas los números manualmente en los títulos. Si no asignas un identificador explícito, Kramdown puede generar uno automáticamente, pero se recomienda usar IDs estables. Los números y las referencias se completan en el navegador mediante JavaScript; no se incluyen en el HTML inicial ni funcionan con JavaScript desactivado. No hay referencias entre artículos distintos.

**Actualización desde v4:** sustituye `assets/js/main.js` y `assets/css/style.css` por las versiones v5; puedes añadir los ejemplos de `_papers/ejemplo-academico.md` sin sobrescribir tus artículos. El CSS v5 elimina los contadores antiguos que duplicaban la numeración.


## Bibliografía BibTeX (v6)

- Edita `assets/bibliografia.bib` con tus entradas BibTeX (`@book`, `@article`, etc.).
- Cita en Markdown: `{% include cite.html key="knuth1984" %}`. Puedes citar varias veces la misma clave.
- Al final del artículo añade `<div id="bibliografia" class="bibliography-auto"></div>`.
- Las referencias se numeran por orden de primera cita y solo se muestran las citadas.
- Si deseas un `.bib` diferente por artículo, define `bibliography: /assets/otro.bib` en el front matter.
- El procesador es intencionalmente ligero: soporta campos entre llaves/comillas, pero no macros `@string`, concatenación `#`, `crossref`, ni conversión completa de comandos LaTeX. Para bibliografías complejas se recomienda una compilación previa.
- Las citas se resuelven en el navegador, por lo que requieren JavaScript.


## Estilos bibliográficos (v7)

Configura `citation_style: numeric` en `_config.yml` para el valor por defecto.
Puedes sobrescribirlo en el front matter de cada artículo:

```yaml
citation_style: author-year # numeric | author-year | alphabetic
```

Citas simples: `{% include cite.html key="knuth1984" %}`.
Citas múltiples: `{% include cite.html keys="knuth1984,lamport1994" %}`.
Con localizador: `{% include cite.html key="lamport1994" locator="p. 25" %}`.

El estilo numérico ordena las referencias por primera aparición; autor-año y alfabético
las ordenan por apellido. Las etiquetas alfabéticas son aproximaciones breves, no un
estilo bibliográfico formal completo. El lector BibTeX es ligero y no admite macros
`@string`, `crossref` ni toda la sintaxis LaTeX. Las citas múltiples enlazan a la
primera entrada; la bibliografía completa contiene enlaces por entrada.


## Referencias cruzadas entre artículos (v8)

En el artículo origen utiliza la clave (`slug`) del archivo Markdown de destino
(sin `.md`) y el `id` del teorema o sección:

```liquid
Véase el {% include cross_ref.html paper="segunda-nota" id="thm-producto" %}.
Véase la {% include cross_ref.html paper="segunda-nota" id="sec-propiedades" %}.
Solo el número: {% include cross_ref.html paper="segunda-nota" id="thm-producto" prefix="none" %}.
```

La plantilla `_includes/cross_ref.html` busca el artículo dentro de `site.papers`,
genera una URL compatible con `baseurl` y deja un enlace permanente al `id`.
El JavaScript descarga el HTML del artículo de destino, calcula los números
siguiendo la misma lógica que las referencias locales y actualiza el texto del
vínculo. Cada artículo de destino se descarga **una sola vez por página**.

**Requisitos y limitaciones:** los artículos deben estar publicados en el mismo
sitio; el sistema requiere JavaScript y acceso HTTP (en `file://` no funciona).
Los IDs deben ser únicos dentro de cada artículo. Las referencias entre artículos
no incluyen automáticamente el título del artículo. Si la página no existe o el
ID es incorrecto, queda el texto alternativo y aparece una advertencia en consola.
Los números se calculan con base en el orden de `h2`, `h3` y `.math-statement`;
los encabezados numerados manualmente no cambian ese orden. El mecanismo no
resuelve referencias a ecuaciones de MathJax en otro artículo.

**Actualización desde v7:** agrega `_includes/cross_ref.html` y reemplaza
`assets/js/main.js`. Los ejemplos son opcionales. No necesitas cambiar CSS,
`_config.yml`, bibliografía ni los includes anteriores.

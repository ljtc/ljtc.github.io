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

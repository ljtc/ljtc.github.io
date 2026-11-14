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

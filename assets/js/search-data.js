// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-notas",
          title: "notas",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cursos",
          title: "cursos",
          description: "Aquí organizaré los cursos para la facultad",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositorios",
          title: "repositorios",
          description: "Cosas que podrían ser útiles",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-otros",
          title: "otros",
          description: "Algunos enlaces y material adicional",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-notas",
              title: "notas",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "dropdown-cursos",
              title: "cursos",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-news",
              title: "news",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "post-equivalencias-e-implicaciones-lógicas",
      
        title: "Equivalencias e implicaciones lógicas",
      
      description: "Daremos una lista de ellas y veremos cómo se pueden usar.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/s1eqimp/";
        
      },
    },{id: "post-límites-y-colímites",
      
        title: "Límites y colímites",
      
      description: "Veremos cómo se definen y algunas de sus propiedades.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/limit/";
        
      },
    },{id: "post-categorías-funtores-y-transformaciones-naturales",
      
        title: "Categorías, Funtores y Transformaciones Naturales",
      
      description: "Veremos definiciones y ejemplos de estos tres conceptos.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/basic/";
        
      },
    },{id: "post-inducción-matemática",
      
        title: "Inducción matemática",
      
      description: "Presentamos un método de demostración muy útil.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/s1ind/";
        
      },
    },{id: "post-cardinalidad-conjuntos-finitos-e-infinitos",
      
        title: "Cardinalidad, conjuntos finitos e infinitos",
      
      description: "¿Qué más se puede hacer con funciones?",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/s1card/";
        
      },
    },{id: "post-equivalencias-de-inducción",
      
        title: "Equivalencias de inducción",
      
      description: "Veremos la equivalencia del buen orden con inducción",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/s1indequiv/";
        
      },
    },{id: "post-funciones-inyectivas-suprayectivas-y-biyectivas",
      
        title: "Funciones inyectivas, suprayectivas y biyectivas",
      
      description: "Veremos lo básico de estas tres clases de funciones",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/s1biy/";
        
      },
    },{id: "post-relaciones-de-equivalencia-y-particiones",
      
        title: "Relaciones de equivalencia y particiones",
      
      description: "Veremos la relación que hay entre estos dos conceptos",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/s1eqpar/";
        
      },
    },{id: "post-composición-de-funciones-y-funciones-inversas",
      
        title: "Composición de funciones y funciones inversas",
      
      description: "Introducimos uno de los conceptos más importantes en el estudio de funciones",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/s1funcomp/";
        
      },
    },{id: "post-cálculo-combinatorio",
      
        title: "Cálculo combinatorio",
      
      description: "Algo de permutaciones, combinaciones y otras.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/s1com/";
        
      },
    },{id: "post-más-acerca-de-funciones",
      
        title: "Más acerca de funciones",
      
      description: "¿Qué más se puede hacer con funciones?",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/morefun/";
        
      },
    },{id: "post-funciones",
      
        title: "Funciones",
      
      description: "Introducción al concepto de función",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/s1fun/";
        
      },
    },{id: "post-relaciones",
      
        title: "Relaciones",
      
      description: "Definición y algunas relaciones especiales",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/s1rel/";
        
      },
    },{id: "post-producto-cartesiano",
      
        title: "Producto cartesiano",
      
      description: "Definición y propiedades elementales del producto cartesiano",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/s1prodcart/";
        
      },
    },{id: "post-familias-de-conjuntos",
      
        title: "Familias de conjuntos",
      
      description: "Propiedades de las familias de conjuntos",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/s1fam/";
        
      },
    },{id: "post-conjuntos",
      
        title: "Conjuntos",
      
      description: "Revisión del concepto de conjunto y las relaciones entre ellos",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/con/";
        
      },
    },{id: "post-instalación-de-lean-en-vs-code",
      
        title: "Instalación de Lean en VS Code",
      
      description: "Seguiremos las guías para instalar Lean y VS Code",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/inst/";
        
      },
    },{id: "post-operaciones-con-conjuntos",
      
        title: "Operaciones con conjuntos",
      
      description: "Definición y propiedades de las operaciones básicas",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/s1conop/";
        
      },
    },{id: "post-lógica-de-primer-orden",
      
        title: "Lógica de primer orden",
      
      description: "Un poco de primer orden",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/s1fol/";
        
      },
    },{id: "post-lógica-de-proposiciones",
      
        title: "Lógica de proposiciones",
      
      description: "Resumen de lógica de proposiciones",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/s1prop/";
        
      },
    },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-test-de-anuncio-en-una-línea",
          title: 'Test de anuncio en una línea.',
          description: "",
          section: "News",},{id: "news-anuncio-más-grande",
          title: 'Anuncio más grande',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/bla/";
            },},{id: "projects-categorías",
          title: 'Categorías',
          description: "Lo básico de teoría de categorías",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cats/";
            },},{id: "projects-conjuntos-1",
          title: 'Conjuntos 1',
          description: "2025-2",
          section: "Projects",handler: () => {
              window.location.href = "/projects/con1/";
            },},{id: "projects-lean",
          title: 'Lean',
          description: "Intentaremos usar un asistente de pruebas para demostrar teoremas",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lean/";
            },},{id: "projects-lógica-2",
          title: 'Lógica 2',
          description: "2025-1 grupo 4280",
          section: "Projects",handler: () => {
              window.location.href = "/projects/log2/";
            },},{id: "projects-superior-1",
          title: 'Superior 1',
          description: "2025-1 Grupo 4002",
          section: "Projects",handler: () => {
              window.location.href = "/projects/supi/";
            },},{id: "projects-topos-elementales",
          title: 'Topos Elementales',
          description: "semestre 2023-2",
          section: "Projects",handler: () => {
              window.location.href = "/projects/topos/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%6A%74%63@%63%69%65%6E%63%69%61%73.%75%6E%61%6D.%6D%78", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ljtc", "_blank");
        },
      },{
        id: 'social-keybase',
        title: 'Keybase',
        section: 'Socials',
        handler: () => {
          window.open("https://keybase.io/ljtc", "_blank");
        },
      },{
        id: 'social-telegram',
        title: 'telegram',
        section: 'Socials',
        handler: () => {
          window.open("https://telegram.me/ljtc108", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@LuisTurcio", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

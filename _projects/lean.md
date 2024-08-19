---
layout: page
title: Lean
description: Intentaremos usar un asistente de pruebas para demostrar teoremas
img: assets/img/4.jpg
importance: 2
category: fun
---

El objetivo de este proyecto es aprender a usar el asistente de pruebas
[Lean](https://lean-lang.org/) y ver si la interacción con él es útil para
"aprender a demostrar".


## Instalación


### Instalación de VS Code

1. Ir a la página de [visual studio](https://code.visualstudio.com/)
2. Descargar el instalador para el sistema operativo correspondiente
3. Seguir las instrucciones para instalar la aplicación
En mi caso, en Ubuntu, después de descargar el archivo deb en una terminal escribo:
```
sudo dpkg -i code_1.92.0-1722473020_amd64.deb
```
la versión puede cambiar, basta con escribir las primeras letras y dar tab para
que se complete.


## Instalación de git

Para ver de qué se trata git y github revisar esta [presentación](https://jpyamamoto.github.io/github-workshop/#/) .

El proceso de instalación depende del sistema operativo que uses:
* para [Linux](https://git-scm.com/download/linux)
* para [Mac](https://git-scm.com/download/mac)
* para [Winbugs](https://gitforwindows.org/)

En Mac se recomienda usar [homebrew](https://brew.sh/) para instalar git.
Actualmente tiene más paquetes que MacPorts, más actualizaciones y es más fácil
de usar.

Para usar Lean no es necesario tener una cuenta en github, pero es muy útil así
que se recomienda hacer una.

1. Hacer una cuenta en [github](https://github.com/)
2. Después de la instalación se tiene que configurar, asociar nuestro nombre y correo de la cuenta de github
	```
	git config --global user.name "mi nombre de usraio"
	git config --global user.email "mi correo electrónico"
	```
Todo esto y más aparece en la presentación mencionada arriba. Además incluye
explicaciones y ejemplos de cómo usar git y github. Por lo tanto, se recomienda
ampliamente revisar la presentación. 


## Instalación de curl

Para poder usar la biblioteca de matemáticas de Lean hay que instalar [curl](https://curl.se/)
+ En Linux se puede hacer desde la terminal. Por ejemplo, en Ubuntu se instala con
	```
	sudo apt install curl
	```
+ En Mac, con [homebrew](https://brew.sh/) se instala con el comando
	```
	brew install curl
	```
+ En Winbugs, si no está instalado hay que seguir las instrucciones del sitio de [curl](https://curl.se/windows/)


## Instalación de Lean

Seguiremos las [instrucciones oficiales](https://lean-lang.org/lean4/doc/quickstart.html) para la instalación
1. Abrir VS Code
2. Buscar la extensión "lean4" e instalarla
3. Seguir las instrucciones del *Setup Guide*. Si no se abre después de haber instalado la extensión, dar clic en el $$\forall$$ en la parte superior derecha de la ventana y luego ir a *Documentation > Docs: Show Setup Guide*.
	1. La primera parte es instalar las dependencias. Estas son git y curl, que ya fueron instaladas en los pasos previos
	2. La parte importante está en *Install Lean Version Manager*. En esta parte
	simplemente hay que dar clic en el botón de instalar
	

## Uso de Lean en VS Code

Técnicamente podemos acceder a todo los referente a Lean desde el símbolo
$$\forall$$ en la parte superior derecha de la ventana de VS Code. 

Algo común es acceder a la documentación. Por ejemplo, en
*Documentation > Docs: Show Documentation Resources*  se puede acceder a las dos
guías que más me han gustado, *Mathematics in Lean* y *Theorem Proving in Lean*.
En ese mismo lugar se puede acceder a *Functional Programming in
Lean*. Para mí no fue tan divertido como las otras dos, pero para alguien de
computación que tal vez necesite aprender algún lenguaje funcional puede se de
utilidad. 

Otra cosa común que hacer es crear un proyecto. Hay dos opciones, la
*Standalone* y usando la biblioteca de matemáticas *Mathlib*. La segunda opción es
la que estaremos usando, aunque no lo haremos de esa manera.

Para "instalar" el proyecto con el que estaremos trabajando en una terminal hay
que ir al directorio donde queremos que viva el proyecto, por ejemplo si
quisiera guardarlo en la carpeta Documentos, entonces hay que escribir
```
cd Documentos
```
Después hay que clonar el repositorio de github, por ejemplo con
```
git clone https://github.com/ljtc/cursoLean.git
```
Luego hay que entrar a la carpeta del proyecto
```
cd cursoLean
```
y finalmente hay que "instalar" la biblioteca de matemáticas
```
lake exe cache get
```

Ahora sí, ya se puede abrir la carpeta en VS Code y empezar a trabajar.

De cualquier forma se puede ver el [proyecto](https://github.com/ljtc/cursoLean)
desde la página de github.


## Sesiones

Las sesiones serán en línea y se llevarán a cabo los miércoles a las 5:00 pm en
[zoom](https://cuaieed-unam.zoom.us/j/84254919471)

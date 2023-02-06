# Reto 2 SofkaU – Luis Ramirez
_En esta segunda presentación del reto sofka IU, vamos a realizar un proyecto que se basa en la **Clasificación de las naves espaciales*** ¡[link]( https://moaramore.com/2016/05/14/clasificacion-de-las-naves-espaciales/), el cual he nombrado RETO2, es un reto para la presentación del Automation Training League de Sofka, el cual consiste en aplicar POO (Programación Orientada a Objetos) bajo unas condiciones o requerimientos que he desarrollado bajo el lenguaje de programación **javascript** ; sin embargo, cada pre-requisito, instalación, análisis y presentación la describiremos a continuación:_

## Iniciar 🚀

_Vamos a iniciar  explicando los requisitos necesarios para ejecutar el proyecto, posteriormente conoceremos cada uno de los pasos y herramientas que utilizaremos a lo largo de la documentación para finalizar con éxito la instalación, ejecución y visualización de **RETO2**_


## Pre-requisitos 📋

_***Pasos:***_

_1. Debemos instalar apache con sus versiones php7 actuales, donde les recomiendo utilizar [VISUAL STUDIO CODE](https://code.visualstudio.com/) o [XAMPP](https://www.apachefriends.org/es/index.html)_

_2. Descargar el repositorio de **Github** /RETO2 el cual contiene todos los archivos necesarios para su funcionamiento_


## Instalación 🔧

_1. Ejecutar xampp e instalar en el disco local_

```
C:/xampp
```

_2. Activar las casillas Apache y MYSQL_

![Ejemplo]( https://reto2-sofka-luis.000webhostapp.com/git/xampp.png)

_3. copiamos los archivos descargados y los pegamos en la ruta de localhost donde crearemos una carpeta llamada <sub>RETO2</sub>_

```
C:/xampp/htdocs/
```

_4. Ejecutamos la URL **localhost/phpmyadmin/** y creamos una nueva base de datos llamada "navessofka", donde vamos a importar el archivo <sub>navessofka.sql</sub> que esta dentro del proyecto_

```
http://localhost/phpmyadmin/
```

![Ejemplo]( https://reto2-sofka-luis.000webhostapp.com/git/phpmyadmin.png)

_podemos observar la base de datos relacional implementada_

![Ejemplo]( https://reto2-sofka-luis.000webhostapp.com/git/BD.png)

_5. Ingresamos a nuestro navegador de preferencia y ejecutaremos el proyecto mediante la siguiente URL:_

```
http://localhost/RETO2/index.html
```
_o desde Visual Studio Code "reload PHP" como:_

```
http://localhost:3000/index.html
```
_ya dependerá del puerto que asigne automáticamente; veamos un ejemplo:_

![Ejemplo]( https://reto2-sofka-luis.000webhostapp.com/git/interfaz.png)


## Ejecutando las pruebas ⚙️

_Como el desarrollo del reto fue aplicado mediante el lenguaje de programación **javascript** las pruebas las podemos enfocar mediante la consola del navegador y/o dentro del mismo código con la palabra reservada <sub>console.log()</sub>_

### Explicación del código fuente 🔩

_1. Iniciar creando un <sub>index.html</sub> que contiene las librerías js y css de **Bootstrap** [librerías](https://getbootstrap.com/) , dentro de este archivo especificamos un script llamado "controlador.js" que va a contener todas las clases, instancias e interfaces del reto basados bajo un MVC_

_2. El script <sub>controlador.js</sub> esta sectorizado en 3 partes MODELO - CONTROLADOR - VISTA como se observa en la siguiente imagen:

### MODELO

_Se crea todas las clases con sus respectivos atributos y métodos_

![Ejemplo]( https://reto2-sofka-luis.000webhostapp.com/git/clases.png)

### CONTROLADOR

_Se crea un control de  las clases y las vistas mediante el DOM por medio de instancias_

![Ejemplo]( https://reto2-sofka-luis.000webhostapp.com/git/controlador.png)

### VISTA

_Se crean métodos visuales de HTML utilizando template y fragment en funciones declaradas como <sub>pintar</sub>CualquierCosa y son reflejadas en el DOM_

![Ejemplo]( https://reto2-sofka-luis.000webhostapp.com/git/vista.png)

## Despliegue y DEMO 📦

_Para la realización del deploy utilice un hosting compartido donde aloje el reto tal cual se encuentra en /retoSofkaNaves_

**Demo:** [Ejecutar demo]( https://reto2-sofka-luis.000webhostapp.com/index.html)

## Construcción 🛠️

_Las herramientas utilizadas para la construcción del reto fueron:_

* [Xampp](https://www.apachefriends.org/es/index.html) - Xampp como servidor local de prueba
* [Boostrap](https://getbootstrap.com/) - Boostrap como librerías de estilos 
* [VSC](https://code.visualstudio.com/) - Como editor se utilizó Visual Studio Code

## Contribuyendo 🖇️

Por favor lee el [README.md](https://github.com/Lramirezavila89/RETO2/blob/main/README.md) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests o mejoras.




## Autor ✒️

* **Luis Enrique Ramírez Ávila** - *Presentación # 2*  - *Documentación*  - *Desarrollo* - *Presentación*  [Lramirezavila89](https://github.com/Lramirezavila89)

## Gracias por visualizar y contribuir a este Reto 🎁
* Comenta a otros sobre este proyecto 📢
* Invita e incentiva a las personas que deseen aprender POO con javascript. 
* gracias a todo 🤓.



---
⌨️ con ❤️ por [Lramirezavila89](https://github.com/Lramirezavila89) 😊


# Proyecto RIA

## Diseño y Tecnologías
La aplicación ha sido desarrollada utilizando el framework Angular. La cual es un framework de código abierto mantenido por Google que se utiliza para construir aplicaciones web de una sola página y aplicaciones de línea de negocio. 

Para la capa de estilos CSS, se ha empleado Bootstrap. Un framework front-end que facilita el diseño y la creación de interfaces de usuario atractivas y responsivas. Su conjunto de componentes y estilos predefinidos permite agilizar el desarrollo y garantizar una apariencia coherente en diferentes dispositivos y tamaños de pantalla.

## Configuración e Instalación
 Se debe tener instalado Node.js y npm para poder realizar los siguientes pasos de configuración e instalación.

 ```bash
# Instalar la CLI de Angular
$ npm install -g @angular/cli

# En la carpeta del proyecto
# Instalar dependencias necesarias
$ npm install

# Levantar el servicio 
$ ng serve -o

```
Al realizar estos pasos, automáticamente se abrira una pestaña en el navegador hacia [Futbol.Uy](http://localhost:4200/).

## Historias de usuario
![image](https://github.com/BrunoEspalter/ProyectoRIA/assets/81487084/16740eeb-fd46-42c4-ad29-3f64ff4ad258)
![image](https://github.com/BrunoEspalter/ProyectoRIA/assets/81487084/03dc4b68-cb46-4198-8198-421f75a52450)
![image](https://github.com/BrunoEspalter/ProyectoRIA/assets/81487084/0583151c-110d-4cdb-bb8f-9743fdec757b)
![image](https://github.com/BrunoEspalter/ProyectoRIA/assets/81487084/eae49887-0819-487f-8b3b-bb412e599ae1)


## Mock ups 
![image](https://github.com/BrunoEspalter/ProyectoRIA/assets/81487084/976b07cb-2d8f-4999-bfad-6a54cdc67e23)

![image](https://github.com/BrunoEspalter/ProyectoRIA/assets/81487084/682d986c-c190-4d4b-928a-9fe4ed2e6142)

![image](https://github.com/BrunoEspalter/ProyectoRIA/assets/81487084/948649d1-5697-40c1-9b7e-99398a240fd6)


## Mapa de navegación 
![Mapa (1)](https://github.com/BrunoEspalter/ProyectoRIA/assets/81487084/46528805-86f2-4708-a573-d1746166d47c)

## Servicios REST
Se eligió como temática una app de futbol, la cual brindara una serie de listados con diferentes temáticas y una trivia a modo de juego para el usuario. Entre los diversos servicios que investigamos, se destaca la Api de BeSoccer. Una API muy completa y bien documentada incluso en niveles de complejidad de las llamadas. Sin embargo optamos por otras APIs las cuales son ScoreBat y AllSportsAPI. Esta última si bien es de muchos deportes, también incluye futbol y ambas son accesibles en cuanto a planes gratuitos  y accesibilidad, algo que la mayoría de las demás APIs no resultaron ser.


# Boilerplate 


## Objetivos del Proyecto

-Boilerplate con configuración lista para conectarse a base de datos SQL con sequelize y react


## Comenzando

 1. Forkear el repositorio para tener una copia del mismo en sus cuentas
 2. Clonar el repositorio en sus computadoras para comenzar a trabajar

Tendrán un `boilerplate` con la estructura general tanto del servidor como de cliente.

__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.


En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `yourmodel`

El contenido de `client` fue creado usando: Create React App.

Pueden cambiar `yourmodel` por el nombre que crean conveniente, pero si quieren correr los test y demás deben cambiar todas las instancias de `yourmodel` donde se requiera, ejemplo en la carpeta Models y cambiar la definición de las tablas y demás. 

Espero les sea útil el repo.

Sugerencias y cambios siempre son bienvenidos.

# Tomate Todo - Sitio Web de Coctelería

_Entrega del proyecto final para el curso de ReactJS de Coderhouse._

_El mismo consiste en imitar un e-commerce con diferentes productos (en este caso, cócteles) donde el usuario pueda filtrar por categoría, ver detalles de producto seleccionado y agregar artículos a un carrito de compras._

## Instalación local 🔧

_Clonar directorio_

```
$ git clone https://github.com/AyeSegoviano/preentrega-coderhouse.git
```

_Ubicarse en el directorio raíz_

```
$ cd tomatetodo-app
```

_Instalar paquetes necesarios e iniciar la app_

```
$ npm install
$ npm start
```

## Navegando 🚢

*_Las diferentes rutas que existen hasta ahora consisten en:_

*_Un directorio '/' que muestra la home de la página, donde se puede ver el listado de todos los productos (ItemListContainer)_

*_Un directorio 'category/id' que muestra los resultados de filtrar la lista de artículos en tres diferentes categorías (el mismo componente ItemListContainer reutilizado)_

*_Un directorio 'detail/id' al cual se puede acceder presionando el botón "ver detalle" en las tarjetas. Dicha acción nos muestra el componente ItemDetailContainer, donde se podrá ver el detalle de cualquiera de las tarjetas elegidas._

*_El directorio '/cart' muestra la lista de productos que el usuario haya seleccionado, con la posibilidad de volver al inicio para seguir agregando productos, eliminar los ya existentes o finalizar la compra._

*_El directorio '/checkout' contiene un formulario que, al ser llenado correctamente, permite al usuario terminar su compra y generar un id de la misma_

## Muestra de navegación en formato gif

https://imgur.com/a/CfIMVP7

## Observaciones 🧐

*_Si bien la funcionalidad de la página ya está establecida y no será cambiada; el maquetado en general (y en consecuencia, la estética) está sujeto a modificaciones permanentemente._

## Autora ✒️

Ayelen Segoviano

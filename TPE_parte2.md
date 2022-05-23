# Trabajo Práctico Especial 2022 - Parte 2

La segunda entrega de la materia consiste en

1.El sitio web actualizado con las nuevas tecnologías y técnicas vistas.

2. Screenshot del sitio web.

**LEER CUIDADOSAMENTE TODA LA CONSIGNA**

**REVISAR CADA PARTE ANTES DE ENTREGAR**

La presentación es de acuerdo a los grupos definidos en la planilla correspondiente. Se considera fundamental la aplicación de buenas prácticas, y la elección apropiada de cada tecnología para cada punto a resolver.

La exposición/defensa se realizará en una computadora dada por la cátedra, por lo que se recomienda probar la página web en diferentes monitores y sistemas operativos.

En el caso de trabajos grupales, la nota de la defensa es de cada miembro por separado. Todos los integrantes deben poder responder a cualquier pregunta de cualquier parte del trabajo.

La defensa de los trabajos será en una única defensa junto al TPE1 y TPE3.

**Método de entrega**

Se entrega por medio de la tarea de Moodle creada para tal fin. Cada grupo deberá subir un trabajo, no importa que los compañeros figuren con tarea sin entregar, eso se controlará internamente.

Se debe subir a la tarea la captura de pantalla y un archivo comprimido con el sitio web.

**Archivo comprimido con nombre según número (Columna &quot;\*\***N° Trab&quot;\***\*) de grupo, comisión y nombres y subirlo a la tarea de entrega de MOODLE.** **Uno solo por grupo.**

**Ejemplo 1\*\*** (&quot;009 - C1 Jose Perez y Juan García&quot;), ambos en comisión C1\*\*

**Ejemplo 2 (&quot;010 - C1 Raul Gomez y C2 Fernando Hernandez&quot;), en comisiones C1 y C2**

La fecha de entrega es:

- **Tandil:** Entrega antes del Viernes **10/06 11:00 AM**.
- **Tres Arroyos:** Entrega Sabado 11/06 11:00 AM.

Por problemas laborales avisar y se coordinará para la siguiente clase que asistan. **Si no avisan previamente se considera que no entregaron/defendieron.**

## Sitio web

La página web consiste en los requerimientos iniciales acordados en base a la planilla de grupos. Se exigirán las mismas condiciones que antes respecto a los requerimientos de tabla, lista, etc.

Para la segunda entrega se solicita:

- Utilizar HTML **semántica**.
- El sitio debe ser **Responsive.** Que el sitio web sea &quot;responsive&quot; diseñado e implementado como **&quot;mobile first&quot;** es **requisito indispensable**.
  - Como mínimo se debe soportar celular y escritorio.
  - El menú debe ser responsive. En la vista de celular debe estar oculto y poder desplegarse o similar.
  - La **tabla es tolerable** que **no sea responsive.**
  - Se puede usar Flexbox o GRID, o ambos.

**NOTA: La página no requiere conservar exactamente el mismo diseño que su versión de la primera entrega.**

- Tabla dinámica
  - La tabla del sitio con su información debe ser cargada de forma dinámica por el usuario mediante un **formulario** para completar todas las columnas. Se puede suponer que la página del sitio de la tabla la puede ver solamente el administrador del sitio en caso que sea una carga de información con ese sentido (no es necesario hacer un acceso restringido). También puede ser que de acuerdo al caso, el contenido de la tabla lo carguen los usuarios.
  - Los datos de la tabla (filas) se deben almacenar en **un arreglo con objetos (JSON)**.
  - La tabla se debe mantener **actualizada** a medida que el usuario carga información. Al entrar por el nav a la página que tiene la tabla, automáticamente debe mostrarse la tabla con datos precargados en el arreglo sin que el usuario tenga que hacer ningún click adicional.
  - Debe haber un botón que permita crear varios ítems automáticamente (al menos 3 items)
  - Permitir borrar todos los elementos de la tabla con un solo botón (vaciar la tabla)

**Notas:**

1. Es posible que en algunos casos para que tenga sentido la carga del contenido de la tabla dinámica se deba modificar la información o columnas de la tabla existente o usar una nueva.

1. Los datos de la tabla se mantienen actualizados mientras el usuario está en la página de la tabla. Cuando se refresca la página o se navega a otra sección el arreglo local con la información de la tabla se borra o solo quedará el contenido precargado si lo hubiese al reingresar en la página de la tabla. No es necesario guardar los datos en una memoria especial, ni que se guarden en un archivo.

- Limitar tamaño de imágenes y peso del sitio. La carpeta completa del sitio no puede superar los 5 Mb.
- El trabajo debe funcionar correctamente en un servidor Apache, se puede usar XAMPP u otro servidor local.

Opcionales:

- Filas resaltadas (+1): Aplicar estilos a filas en base a algún dato de la tabla (lo eligen ustedes según su contexto, ejemplo: resaltar ofertas con descuento mayor a 15%)

**Aclaración Tabla:**

- _**Todas las operaciones de modificación (agregado, borrado, etc) deben mantener sincronizado correctamente el arreglo de objetos subyacente en Javascript.**_
- Tabla: La tabla de la página debe estar vacía en el HTML. En caso de haber datos iniciales, estos datos deben ser parte del arreglo inicial.
- Botón x3: Debe haber alguna forma de agregar 3 elementos de forma rápida (algo como hacer un click en un botón sin tener que completar el formulario 3 veces). Dichos datos pueden ser generados al azar, ser fijos, leerse o como se prefiera.
- Debe haber un formulario para agregar elementos de a uno con datos introducidos por el usuario.

Los requerimientos deben ser los definidos en la planilla de trabajos y estar en el lugar indicado. La estructura HTML, CSS y JS si lo hubiera debe ser de acuerdo a las diferentes pautas explicadas. En caso de errores graves se puede desaprobar el trabajo (lo que implica la pérdida de cursada).

## Planificación sugerida:

Se recomienda fuertemente usar timeboxing (ver slide de GApps) y tener avance constante. Sugerencias:

- Se sugiere comenzar desde cero copiando **contenido** de la entrega anterior, no editando el sitio a las nuevas técnicas vistas.
- Revisar cada palabra de esta consigna y comprobarla que ande bien.

## Criterios de evaluación:

- Iguales a la primera entrega. Los opcionales tienen peso diferente según su complejidad.

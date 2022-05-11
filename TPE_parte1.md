#
# Trabajo Práctico Especial

#
## Parte 1

Esta entrega de la materia consiste en:

1. Un **sitio web** desarrollado con las tecnologías vistas.
2. Incluir un screenshot (captura de pantalla) del sitio web en el raiz del sitio.

La presentación es de acuerdo a los grupos definidos en la planilla correspondiente.

Todos los grupos deben tener el contenido definido en la **planilla de trabajos** y estar en el lugar acordado. Si no tienen permiso de escritura, acceder desde el mail que pertenece al Google Group.

# ENTREGA

**Archivo comprimido con nombre según número (Columna &quot;****N° Trab&quot;****) de grupo, comisión y nombres y subirlo a la tarea de entrega de MOODLE.**  **Uno solo por grupo.**

**Ejemplo 1**** (&quot;009 - C1 Jose Perez y Juan García&quot;), ambos en comisión C1**

**Ejemplo 2 (&quot;010 - C1 Raul Gomez y C2 Fernando Hernandez&quot;), en comisiones C1 y C2**

La fecha de entrega:

- **TANDIL: ENTREGA antes del Viernes 13/05, 11.00 hs AM**

- **TRES ARROYOS: antes del Sabado 14/05 10.00 hs AM**

**La entrega del trabajo se hace por Moodle, ingresando al link &quot;Entrega Primer Parte&quot;, que aparecerá próximo a la fecha .**

# Consigna

La temática del sitio web es a libre elección. Se deben acordar los requerimientos en la planilla de grupos.

El sitio web deben tener **como mínimo:**

1. tres archivos HTML (3 páginas contando el Home)
2. una barra o menú de navegación entre las páginas del sitio
3. una lista (diferente a la de navegación)
4. una tabla
5. un formulario
6. una imagen
7. validación por Javascript del formulario con un **captcha** \*

**Opcionales**

1. Los datos a introducir en el captcha en Javascript se generan al azar. (Item opcional)

**Aclaraciones**

- El formulario no debe enviarse a ningún lugar
- El resultado del captcha (correcto/incorrecto) debe verse en el sitio web (no usar alert)
- Usar **flexbox** en al menos uno de los HTML (el nav no cuenta)
- Cuando vas navegando el sitio web, debe parecer que siempre estas en el mismo sitio, misma línea gráfica, en general mismo header, etc, etc.
- Tamaño del sitio total comprimido menor a 5Mb: por restricciones de conectividad y de Moodle el sitio debe ser lo más liviano posible, esto se logra usando imágenes que no sean demasiado pesadas y no subiendo videos.

**\*Validación Javascript del formulario**

El formulario debe tener un campo tipo captcha para comprobar que el usuario es un humano. Para esto la página debe mostrar un texto o número (o algo similar) y pedir introducirlo en el formulario. En caso de que no coincida con el valor mostrado por pantalla se debe rechazar el envío del formulario. El valor a tipear puede ser fijado en el código, no es necesario calcularlo al azar ni similares.

**Aclaración adicionales**

- Estas aclaraciones fueron agregadas por diversas consultas, no eran parte de la consigna original, ni cambian la misma, solamente aclaran la misma.

1. Está permitido usar \&lt;nav\&gt;, \&lt;footer\&gt;, \&lt;header\&gt;. No es obligatorio para esta entrega

#

# Planificación sugerida

Se recomienda usar timeboxing (ver slide de GApps). Se sugiere tener la página web lista con varios días de anticipación y luego revisar cada palabra de esta consigna y comprobar el correcto funcionamiento del sitio.

# Defensa

La corrección se realizará en una computadora de la cátedra, por lo que se recomienda probar la página web en diferentes monitores y sistemas operativos. El sitio **NO DEBE SER RESPONSIVE** para esta entrega, por lo que **NO** es necesario que el layout cambie de acuerdo al dispositivo.

En _ **modo remoto** _, la defensa se realizará a través de videollamada el profesor presentará el trabajo subido a Moodle y los alumnos defenderán y explicarán como lo resolvieron. Por lo que es **sumamente importante** contar con un micrófono o conectarse también con un teléfono en caso que no funcione el audio de la computadora.

# Criterios de evaluación

La entrega es obligatoria. La no entrega de este TPE implica pérdida de cursada.

La estructura HTML, CSS y JS debe ser de acuerdo a las diferentes pautas explicadas. En caso de errores graves se descontará puntaje. puede desaprobar el trabajo ( **lo que implica desaprobar la cursada** ).

Se evaluará la correcta implementación del TPE: no repetición de código, identificadores (nombres de clases, variables, etc) descriptivos, etc. Los trabajos deben implementar la **totalidad de los requerimientos funcionando correctamente** , sin tolerancia a bugs.

Se considera fundamental la aplicación de buenas prácticas, y la elección apropiada de cada tecnología para cada punto a resolver.

El sitio debe ejecutar correctamente desde otra computadora (tener cuidado en las rutas de los archivos y dimensiones demasiado rígidas de los elementos, etc). Para esta instancia no se exige que el sitio se adapte a múltiples dispositivos (móvil, tablet, PC, etc.). Si es importante que se vea aceptablemente durante la corrección / exposición / defensa del trabajo.

La nota se calculará partiendo de 10, a partir de ahí se suma/resta:

- Item sin implementar (o mal implementado, por ej, no se corresponde con la planilla): -4.
- Item que no anda: -2.
- Item con bug menor: -1.
- Poca Prolijidad General: (código difícil de leer, etc): hasta -4.
- Malos nombres (nombres no representativos, error general, no casos puntuales): pierde promoción y -2
- Hacer prácticas marcadas como malas durante la cursada: hasta -6
- Item Opcional: +1 (no resta nunca).
- Defensa individual: se puede desaprobar o disminuir la nota por una defensa insuficiente
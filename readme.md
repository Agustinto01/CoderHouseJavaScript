Reentrega 21/11/2024
Hola Marco, me dieron solo 48hs para hacer todas las correcciones y la verdad que entre temas personales y laborales el tiempo que pude dedicarle me resultó muy escaso. Intenté recibir una prórroga pero no me la aceptaron.
Igualmente pude enfocarme lo mas que pude y siguiendo el video intenté solucionar los problemas que fuiste enumerando. Gracias por tus comentarios, me fueron muy útiles para entender que cosas pueden mejorarse.
Quité los valores pre cargados. En la documentacion de CoderHouse dice que hay que dejar valores ya cargados para facilitar la correccion del tutor, es por eso que los dejé en un primer momento.
Eliminé los prompts y alerts que existian, realicé validaciones sobre los campos, incorporé luxon entre otras cosas que fui corrigiendo.
Me faltó tiempo para mejorar la parte visual como armar una grilla en vez de un recuadro flotando.
Una vez mas gracias.





Hola Marco, David y equipo de CoderHouse.
Esta pagina la hice en el curso anterior de desarrollo web, y es sobre un estudio jurídico. 
Se me ocurrió agregarle un modulo de cálculo de costos de los trámites de abogacia (jubilaciones en este caso) 
recibiento un input por pantalla. El carrito de compras me resulta dificil de imaginar ya que no son productos tangibles pero igual así armé una versión adaptada.
La pagina nueva es la entrada de menú Tarifas de index.html.
 
Edit reentrega: Corregí la asociación del archivo js al html para que no de error por consola.

Entrega final: Autorrellené los campos de datos para que el instructor no tenga que ingresar nada a mano.
Agregué local storage para que los datos del cliente queden almacenados. Luego se consultan y quedan flotando en la pantalla.
No es asi como esperaría verlo, pero el curso de html y css lo hice hace mucho y tendría que invertir un tiempo considerable en reflotar esos conocimientos para que se vean mas adecuadamente, tiempo que ahora me resulta escaso.
Luego de cargados los valores, el botón Calcular Suma hace la sumatoria y la muestra en el total. Tambien ejecuta la funcion importeEnUsd que hace un fetch a una api que consume el valor del tipo de cambio USD del dia, lo busca en internet, lo trae y realiza el cálculo de cuanto es el costo en dólares. 

Breve descripcion de que hace la aplicacion:

Validación de Usuario:

Se define una lista de usuariosHabilitados.
Se solicita al usuario que ingrese su nombre mediante un prompt.
Se valida si el usuario ingresado está en la lista de usuarios habilitados. Si no lo está, se muestra un mensaje de "Acceso denegado" y se vuelve a solicitar el nombre.

Cálculo de Suma:
La función calcularSuma obtiene los valores de varios inputs en el formulario.
Calcula la suma total de estos valores y muestra el resultado en el elemento con id resultado.

Obtención del Tipo de Cambio:
La función getTipoDeCambio obtiene el tipo de cambio actual del dólar a pesos argentinos desde una API.
La función importeEnUsd convierte el importe total en pesos a dólares usando el tipo de cambio obtenido y muestra el resultado.

Clase Cliente:
Se define una clase Cliente con un constructor que inicializa los datos del cliente.
La función confirmar muestra una alerta con los datos del cliente.

Solicitud de Datos del Cliente:
Se solicitan los datos del cliente mediante prompt y se guardan en el localStorage.
Se recuperan los datos del localStorage y se muestran en el elemento con id cliente-info.

Manejo de Productos y Modal:
Se itera sobre una lista de servicios (stockServicios) y se crean elementos HTML para cada servicio.
Se añade un botón "Contratar" para cada servicio. Al hacer clic en este botón, se muestra un modal con un mensaje.
Se añade un evento para cerrar el modal.

Eventos al Cargar la Página:
Se añade un evento DOMContentLoaded para asegurarse de que el DOM esté completamente cargado antes de añadir los event listeners.
Se añade un event listener al botón "Calcular Suma" para ejecutar las funciones calcularSuma e importeEnUsd al hacer clic.
/**
 * Hola Marco, David y equipo de CoderHouse.
 * Esta pagina la hice en el curso anterior de desarrollo web, y es sobre un estudio jurídico. 
 * Se me ocurrió agregarle un modulo de cálculo de costos de los trámites de abogacia (jubilaciones en este caso) 
 * recibiento un input por pantalla ya que no logré imaginar un carrito de compras para este rubro (aunque quizá 
 * en una versión posterior lo pueda hacer.)
 * La pagina nueva es la entrada de menú Tarifas de index.html.
 * 
 * Edit reentrega: Corregí la asociación del archivo js al html para que no de error por consola.
 */





const usuariosHabilitados = ["david", "marco", "coderhouse"]

let usuario

const validarUsuario = (user) => {

    for (let i = 0; i < usuariosHabilitados.length; i++) {

        if (user === usuariosHabilitados[i]) {
            return true
        }
    }
    return false
}

do {
    usuario = prompt("Ingrese su nombre:").toLowerCase()

    if (validarUsuario(usuario) === true) {
        alert("Usted puede corregir esta entrega")
    } else {
        alert("Acceso denegado")
    }
} while (validarUsuario(usuario) !== true)




function calcularSuma() {
    // Obtener los valores de los inputs
    const importe1 = parseFloat(document.getElementById('tramiteJubilatorio').value) || 0
    const importe2 = parseFloat(document.getElementById('calculosPrevisionales').value) || 0
    const importe3 = parseFloat(document.getElementById('reajusteJubilatorio').value) || 0
    const adicional = document.getElementById('facturaConsultaGeneral').checked ? 15000 : 0

    // Calcular la suma total
    const total = importe1 + importe2 + importe3 + adicional

    // Mostrar el resultado
    document.getElementById('resultado').textContent = total

    const servicios = ["Tramite Jubilatorio", "Calculos Previsionales", "Reajuste Jubilatorio", "Consulta Inicial"]

    const costosservicios = [importe1, importe2, importe3, adicional]

    let importetotal = 0
    for (let i = 0; i < servicios.length; i++) {

        console.log(servicios[i] + " " + costosservicios[i])

        importetotal = importetotal + costosservicios[i]

    }
    console.log("El importe final a pagar es $" + importetotal)
}


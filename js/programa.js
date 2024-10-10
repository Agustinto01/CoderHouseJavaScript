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




let fechaActual = new Date()
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

    if (importe1 < 0 || importe2 < 0 || importe3 < 0) {
        alert("No se pueden ingresar valores negativos")
        return
    }

    // Calcular la suma total
    const total = importe1 + importe2 + importe3 + adicional

    // Mostrar el resultado
    document.getElementById('resultado').textContent = total

    const servicios = ["Tramite Jubilatorio", "Calculos Previsionales", "Reajuste Jubilatorio", "Consulta Inicial"]

    const costosservicios = [importe1, importe2, importe3, adicional]

    let importetotal = 0;
    for (let i = 0; i < servicios.length; i++) {

        //console.log(servicios[i] + " " + costosservicios[i])

        importetotal += costosservicios[i];

    }
    //console.log("El importe final a pagar es $" + importetotal)
    //console.log("El cliente es Id:" + cliente.id + " " + cliente.nombre + " " + cliente.apellido)
}



class Cliente {
    static id = 0    //propiedad estátia

    constructor(nombre, apellido, dni, telefono, email) {
        this.id = ++Cliente.id
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.telefono = telefono
        this.email = email
    }

    confirmar() {
        /* console.log("Se ha registrado el cliente " + this.nombre + " " + this.apellido + " con Id " + this.id + " DNI: " + this.dni +
            " Telefono: " + this.telefono + " E-mail: " + this.email + " con fecha " + fechaActual.getDate() + "/" + (fechaActual.getMonth() + 1) + "/" + fechaActual.getFullYear() +
            " a las " + fechaActual.getHours() + ":" + fechaActual.getMinutes() + ":" + fechaActual.getSeconds()) */

        alert("Se ha registrado el cliente " + this.nombre + " " + this.apellido + " con Id " + this.id + " DNI: " + this.dni +
            " Telefono: " + this.telefono + " E-mail: " + this.email + " con fecha " + fechaActual.getDate() + "/" + (fechaActual.getMonth() + 1) + "/" + fechaActual.getFullYear() +
            " a las " + fechaActual.getHours() + ":" + fechaActual.getMinutes() + ":" + fechaActual.getSeconds())
    }
}


// Solicitar datos del cliente por pantalla
const nombre = prompt("Ingrese su nombre:");
const apellido = prompt("Ingrese su apellido:");
const dni = prompt("Ingrese su DNI:");
const telefono = prompt("Ingrese su teléfono:");
const email = prompt("Ingrese su email:");

// Crear una instancia de la clase Cliente con los datos ingresados
const cliente = new Cliente(nombre, apellido, dni, telefono, email);

// Confirmar los datos del cliente
cliente.confirmar();
//console.log("el cliente tiene id " + cliente.id)
//const cliente = new Cliente("Juan", "Perez", 12345678, 1122334455, "lalala@gmail.com")

//cliente.confirmar() 


const stockProductos = [
    {
        id: 1,
        nombre: "Accidentes Laborales ",
        precio: 10000,
        desc: "Servicio Disponible.",
        img:"../img/AccidentesLaborales.jpg"

    },
    {
        id: 2,
        nombre: "Despido Discriminatorio",
        precio: 20000,
        desc: "Servicio Disponible.",
        img: "../img/DespidoDiscriminatorio.jpg"
    },
    {
        id: 3,
        nombre: "Despido Injustificado",
        precio: 15000,
        desc: "Producto en venta.",
        img: "../img/DespidoInjustificado.jpg"
    },
    {
        id: 4,
        nombre: "Jubilaciones y Pensiones",
        precio: 10000,
        desc: "Producto en venta.",
        img: "../img/jubilacionesYPensiones.jpg"
    },
    {
        id: 5,
        nombre: "Liquidacion Blue Corp",
        precio: 25000,
        desc: "Producto en venta.",
        img: "../img/LiquidacionBlueCorp.jpg"
    },

]


const contenedorProductos = document.getElementById("contenedor-productos")

stockProductos.forEach((elm) => {

    const div = document.createElement("div")

    div.classList.add("producto")

    div.innerHTML = `
    <img src="${elm.img}" >
    <hr>
    <h3>${elm.nombre}</h3>
    <p>Precio: $${elm.precio}</p>

    <button>Contratar</button>
    `

    contenedorProductos.appendChild(div)
})




let fechaActual = new Date()
const usuariosHabilitados = ["david", "marco", "coderhouse", "david/marco"]

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
    usuario = prompt("Ingrese su nombre:", "David/Marco").toLowerCase()

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

        

        importetotal += costosservicios[i];

    }
    
    return total
}




async function getTipoDeCambio() {
    const url = 'https://open.er-api.com/v6/latest/USD'
    try {
        const respuesta = await fetch(url)
        if (!respuesta.ok) {
            throw new Error('No hubo respuesta')
        }
        const data = await respuesta.json()
        const arsRate = data.rates.ARS
        return arsRate

    } catch (error) {
        console.error('Hubo un problema con la operación de fetch:', error);
    }
}


async function importeEnUsd() {
    
    const pesosPorDolar = await getTipoDeCambio()
    const importe = calcularSuma()
    const resultadoEnUSD = Number(importe / pesosPorDolar).toFixed(2)
    // Mostrar el resultado
    document.getElementById('tC').textContent = pesosPorDolar
    document.getElementById('resultadoUSD').textContent = resultadoEnUSD
    
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
        
        alert("Se ha registrado el cliente " + this.nombre + " " + this.apellido + " con Id " + this.id + " DNI: " + this.dni +
            " Telefono: " + this.telefono + " E-mail: " + this.email + " con fecha " + fechaActual.getDate() + "/" + (fechaActual.getMonth() + 1) + "/" + fechaActual.getFullYear() +
            " a las " + fechaActual.getHours() + ":" + fechaActual.getMinutes() + ":" + fechaActual.getSeconds())
    }
}


// Solicitar datos del cliente por pantalla
const nombre = prompt("Ingrese su nombre:", "Juan");
const apellido = prompt("Ingrese su apellido:", "Perez");
const dni = prompt("Ingrese su DNI:", "31654789");
const telefono = prompt("Ingrese su teléfono:", "1122334455");
const email = prompt("Ingrese su email:", "juanperez@mail.com");

// Guardar los datos en local storage
localStorage.setItem('cliente', JSON.stringify({ nombre, apellido, dni, telefono, email }));

// Para acceder a la información guardada en el local storage
const clienteGuardado = JSON.parse(localStorage.getItem('cliente'));
if (clienteGuardado) {

    const clienteInfo = `
        <p>Nombre: ${clienteGuardado.nombre}</p>
        <p>Apellido: ${clienteGuardado.apellido}</p>
        <p>DNI: ${clienteGuardado.dni}</p>
        <p>Teléfono: ${clienteGuardado.telefono}</p>
        <p>Email: ${clienteGuardado.email}</p>
    `;
    document.getElementById('cliente-info').innerHTML = clienteInfo;
}

// Crear una instancia de la clase Cliente con los datos ingresados
const cliente = new Cliente(nombre, apellido, dni, telefono, email);

// Confirmar los datos del cliente
cliente.confirmar();




const contenedorProductos = document.getElementById("contenedor-productos")

stockServicios.forEach((elm) => {

    const div = document.createElement("div")

    div.classList.add("producto")

    div.innerHTML = `
    <img src="${elm.img}" >
    <hr>
    <h3>${elm.nombre}</h3>
    <p>Precio: $${elm.precio}</p>
    <button id="contratar-btn${elm.id}">Contratar</button>
    `

    contenedorProductos.appendChild(div)


    let boton = document.getElementById(`contratar-btn${elm.id}`)

    const modalContainer = document.getElementById(`modal-container`)
    const cerrarModal = document.getElementById(`cerrar-modal`)

    boton.addEventListener('click', () => {
        const total = calcularSuma()
        modalContainer.classList.add(`modal-active`)
    })

    cerrarModal.addEventListener('click', () => {
        modalContainer.classList.remove(`modal-active`)
    })

}
)


document.addEventListener('DOMContentLoaded', function() {
    const botonCalcular = document.getElementById('botonCalcular');
    botonCalcular.addEventListener('click', function() {
        calcularSuma();
        importeEnUsd();
    });
});


var DateTime = luxon.DateTime
const now = DateTime.now()

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


}


document.addEventListener('DOMContentLoaded', function () {


    // Mostrar el modal al cargar la página
    const clientModal = document.getElementById('clientModal');
    clientModal.style.display = 'block';

    // Obtener referencias a los elementos del formulario
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const dniInput = document.getElementById('dni');
    const telefonoInput = document.getElementById('telefono');
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');

    // Obtener el valor de now (puede ser la fecha y hora actual)
    const now = new Date().toLocaleString();

    // Insertar el valor de now en el HTML
    document.getElementById('now').textContent = now;

    // Manejar el envío del formulario
    const form = document.getElementById('clientForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Limpiar mensajes de error anteriores
        errorMessage.textContent = '';

        // Validar que el campo de teléfono contenga solo números
        const telefono = telefonoInput.value;
        const telefonoRegex = /^[0-9]+$/;
        if (!telefonoRegex.test(telefono)) {
            errorMessage.textContent = 'Por favor, ingrese un número de teléfono válido.';
            return;
        }


        // Validar que el campo dni contenga solo números
        const dni = dniInput.value;
        const dniRegex = /^[0-9]+$/;
        if (!dniRegex.test(dni)) {
            errorMessage.textContent = 'Por favor, ingrese un número de dni válido.';
            return;
        }



        // Verificar si el cliente ya está en el local storage
        const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
        const clienteExistente = clientes.find(cliente => cliente.dni === dni);
        if (clienteExistente) {
            errorMessage.textContent = 'El cliente ya está registrado.';
            return;
        }



        // Obtener los valores de los campos del formulario
        const nombre = nombreInput.value;
        const apellido = apellidoInput.value;
        const email = emailInput.value;

        // Ocultar el modal
        clientModal.style.display = 'none';

        // Guardar los datos en local storage
        const nuevoCliente = { nombre, apellido, dni, telefono, email, tramiteJubilatorio, calculosPrevisionales, reajusteJubilatorio };
        clientes.push(nuevoCliente);
        localStorage.setItem('clientes', JSON.stringify(clientes));

        // Mostrar los datos del cliente en la página
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
    });
});

// Crear una instancia de la clase Cliente con los datos ingresados
const cliente = new Cliente(nombre, apellido, dni, telefono, email);

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
    const precioServicioElement = document.getElementById('precioServicio');


    boton.addEventListener('click', () => {

        const total = calcularSuma()
        modalContainer.classList.add(`modal-active`)
    })

    cerrarModal.addEventListener('click', () => {
        modalContainer.classList.remove(`modal-active`)
    })

}
)


document.addEventListener('DOMContentLoaded', function () {
    const tramiteJubilatorioInput = document.getElementById('tramiteJubilatorio');
    const calculosPrevisionalesInput = document.getElementById('calculosPrevisionales');
    const reajusteJubilatorioInput = document.getElementById('reajusteJubilatorio');
    const errorMessage = document.getElementById('error-message');
    const botonCalcular = document.getElementById('botonCalcular');
    botonCalcular.addEventListener('click', function () {
        // Limpiar mensajes de error anteriores
        errorMessage.textContent = '';

        // Validar que los campos contengan solo números
        const tramiteJubilatorio = tramiteJubilatorioInput.value;
        const calculosPrevisionales = calculosPrevisionalesInput.value;
        const reajusteJubilatorio = reajusteJubilatorioInput.value;
        const numeroRegex = /^[0-9]+$/;

        if (!numeroRegex.test(tramiteJubilatorio) || !numeroRegex.test(calculosPrevisionales) || !numeroRegex.test(reajusteJubilatorio)) {
            errorMessage.textContent = 'Por favor, ingrese solo números en todos los campos.';
            return;
        }

        calcularSuma();
        importeEnUsd();
    });
});
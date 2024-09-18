

/**
 * Hola Marco, David y equipo de CoderHouse.
 * Esta pagina la hice en el curso anterior de desarrollo web, y es sobre un estudio jurídico. 
 * Se me ocurrió agregarle un modulo de cálculo de costos de los trámites de abogacia (jubilaciones en este caso) 
 * recibiento un input por pantalla ya que no logré imaginar un carrito de compras para este rubro (aunque quizá 
 * en una versión posterior lo pueda hacer.)
 * La pagina nueva es la entrada de menú Tarifas de index.html.
 */


// Variables para almacenar los valores de los inputs
let suma = 0 // Declaración global de 'suma'
const tramiteJubilatorioInput = document.getElementById('tramiteJubilatorio')
const calculosPrevisionalesInput = document.getElementById('calculosPrevisionales')
const reajusteJubilatorioInput = document.getElementById('reajusteJubilatorio')
let checkbox = document.getElementById('facturaConsultaGeneral')
const sumarButton = document.getElementById('sumarButton')
// Función para sumar los valores
function sumarValores() {
    const tramiteJubilatorio = parseFloat(tramiteJubilatorioInput.value) || 0
    const calculosPrevisionales = parseFloat(calculosPrevisionalesInput.value) || 0
    const reajusteJubilatorio = parseFloat(reajusteJubilatorioInput.value) || 0
    const resultado = tramiteJubilatorio + calculosPrevisionales + reajusteJubilatorio
    return resultado
}

// Evento para el checkbox. Si está tildado, suma 15000. Si no, no suma nada.

checkbox.addEventListener('change', function() {

    if (this.checked) {
        // Si el checkbox está tildado, agrega 15000 a 'suma'
        suma += 15000
    } 
   
});


sumarButton.addEventListener('click', function() {
    suma = sumarValores()
    if (checkbox.checked) {
        suma += 15000
    }
    const sumaFormateada = suma.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    alert('El costo del trámite jubilatorio es: ' +'$'+ sumaFormateada)
});
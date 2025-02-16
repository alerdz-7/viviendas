// Recuperar los productos del carrito almacenados en localStorage
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Variables de precios
let subtotal = 0;
let descuento = 0;
let totalFinal = 0;
const DESCUENTO = 0.10; // 10% de descuento

// Función para actualizar el carrito en la página
function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = ''; // Limpiar la lista actual

    // Mostrar los productos en la lista
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.modelo} - $${item.precio}`;
        listaCarrito.appendChild(li);
        subtotal += parseInt(item.precio.replace(/[^0-9.-]+/g,"")); // Convertir a número
    });

    // Actualizar los valores en la página
    document.getElementById('subtotal').textContent = `$${subtotal}`;
    document.getElementById('descuento').textContent = `$${descuento}`;
    document.getElementById('total-final').textContent = `$${totalFinal}`;
}

// Función para aplicar el descuento
document.getElementById('aplicar-descuento').addEventListener('click', function() {
    const codigoDescuento = document.getElementById('codigo-descuento').value;

    // Verificar si el código es válido
    if (codigoDescuento === 'DESCUENTO10') {
        descuento = subtotal * DESCUENTO;
        alert('¡Código de descuento aplicado!');
    } else {
        descuento = 0;
        alert('Código inválido. No se aplicó descuento.');
    }

    // Actualizar los totales
    totalFinal = subtotal - descuento;
    document.getElementById('descuento').textContent = `$${descuento}`;
    document.getElementById('total-final').textContent = `$${totalFinal}`;
});

// Función para finalizar la compra
document.getElementById('finalizar-compra').addEventListener('click', function() {
    const email = document.getElementById('email').value;

    // Validación simple del correo electrónico
    if (email === '' || !validateEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
    } else {
        alert(`Compra finalizada. Sigue los pasos que se te enviaron a tu correo de ${email}.`);
    }
});

// Función simple de validación de correo electrónico
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Función para inicializar los totales
function inicializarTotales() {
    totalFinal = subtotal;
    document.getElementById('subtotal').textContent = `$${subtotal}`;
    document.getElementById('total-final').textContent = `$${totalFinal}`;
}

// Inicializar la página
actualizarCarrito();
inicializarTotales();

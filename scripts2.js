// Evento para los botones de "Agendar Cita"
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que se recargue la página
        alert('¡Has agendado una cita para este modelo de vivienda!');
    });
});

// Inicialización del carrito
let carrito = [];

// Función para actualizar el contador del carrito en la parte superior derecha
function actualizarCarrito() {
    document.getElementById('cart-count').textContent = carrito.length;
}

// Evento para los botones de "Agregar al carrito"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const modelo = this.getAttribute('data-modelo');
        const precio = this.getAttribute('data-precio');
        
        // Agregar el modelo y precio al carrito
        carrito.push({
            modelo: modelo,
            precio: precio
        });

        // Actualizamos el contador del carrito
        actualizarCarrito();

        // Confirmación visual de la acción
        alert(`Has agregado ${modelo} al carrito.`);
    });
});

// Guardar el carrito en localStorage antes de cambiar de página (si es necesario)
window.addEventListener('beforeunload', function() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
});

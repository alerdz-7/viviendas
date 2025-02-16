// Seleccionar todos los botones con la clase "cta-button"
document.querySelectorAll('.cta-button').forEach(function(button) {
    button.addEventListener('click', function(event) {
        
        const href = button.getAttribute('href');
        window.location.href = href;
    });
});

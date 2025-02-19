document.addEventListener("DOMContentLoaded", function () {
    const eventoInput = document.getElementById("evento");
    const fechaInput = document.getElementById("fecha");
    const agregarBtn = document.getElementById("agregar");
    const listaEventos = document.getElementById("lista-eventos");

    let eventos = JSON.parse(localStorage.getItem("eventos")) || [];

    function renderEventos() {
        listaEventos.innerHTML = "";
        eventos.forEach((evento, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                ${evento.nombre} - ${evento.fecha}
                <button class="delete" data-index="${index}">Eliminar</button>
            `;
            listaEventos.appendChild(li);
        });

        document.querySelectorAll(".delete").forEach(btn => {
            btn.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                eventos.splice(index, 1);
                guardarEventos();
                renderEventos();
            });
        });
    }

    function guardarEventos() {
        localStorage.setItem("eventos", JSON.stringify(eventos));
    }

    agregarBtn.addEventListener("click", function () {
        const nombreEvento = eventoInput.value.trim();
        const fechaEvento = fechaInput.value;

        if (nombreEvento === "" || fechaEvento === "") {
            alert("Por favor, complete todos los campos.");
            return;
        }

        eventos.push({ nombre: nombreEvento, fecha: fechaEvento });
        guardarEventos();
        renderEventos();

        eventoInput.value = "";
        fechaInput.value = "";
    });

    renderEventos();
});

const $formulario = document.querySelector("#formulario"),
            $nombre = document.querySelector("#nombre"),
            $correo = document.querySelector("#correo");
        $formulario.onsubmit = evento => {
            evento.preventDefault();
            const nombre = $nombre.value,
                correo = $correo.value;
            // Validar
            if (nombre === "" || nombre === null ) {
                alert("No puede contener vacio el nombre");
                return;
            }
            if (correo.includes(" @ ")) {
                alert("La direccion de mail no es valida");
                return;
            }
            if (mensaje === "" || mensaje === null ) {
                alert("Debe completarse el mensaje a enviar");
                return;
            }
            $formulario.submit();
        };
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Encontramos el código correspondiente al botón que se ha clicado
        const codeBlock = this.previousElementSibling.querySelector('.code').textContent;

        // Creamos un campo de texto temporal para copiar
        const tempInput = document.createElement("textarea");
        tempInput.value = codeBlock;
        document.body.appendChild(tempInput);

        // Seleccionamos y copiamos el contenido
        tempInput.select();
        document.execCommand("copy");

        // Eliminamos el campo temporal
        document.body.removeChild(tempInput);
    });
});
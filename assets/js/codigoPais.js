function handleCustomCode(selectElement) {
    const customCodeInput = document.getElementById("custom-codigo");
    if (selectElement.value === "custom") {
        customCodeInput.style.display = "block"; // Mostrar el campo personalizado
        customCodeInput.setAttribute("required", true); // Hacerlo obligatorio
    } else {
        customCodeInput.style.display = "none"; // Ocultar el campo personalizado
        customCodeInput.removeAttribute("required"); // Eliminar obligatoriedad
    }
}

function updateCode() {
    const customCodeInput = document.getElementById("custom-codigo");
    const selectElement = document.getElementById("codigo");
    if (customCodeInput.value) {
        selectElement.value = customCodeInput.value; // Actualizar el valor del select con el código escrito
    }
}
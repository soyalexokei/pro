document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    function nextItem() {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        showItem(currentIndex);
    }

    document.querySelector('.left.carousel-control').addEventListener('click', function (event) {
        event.preventDefault();  // Prevenir comportamiento predeterminado del enlace
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        showItem(currentIndex);
    });

    document.querySelector('.right.carousel-control').addEventListener('click', function (event) {
        event.preventDefault();  // Prevenir comportamiento predeterminado del enlace
        nextItem();
    });

    // Mostrar el primer testimonio al cargar la página
    showItem(currentIndex);
});
document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.getElementById('menu-icon');
    var mobileMenu = document.getElementById('mobile-menu');
    var contactLink = document.querySelector('#contact-dropdown a');
    var submenu = document.getElementById('submenu');

    // Mostrar/ocultar menú móvil al hacer clic en el ícono del menú
    menuIcon.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });

    // Mostrar/ocultar submenú al hacer clic en el enlace de "Contacto"
    contactLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el enlace se siga después de hacer clic
        submenu.classList.toggle('show');
    });

    // Cerrar menú móvil si se hace clic fuera de él
    document.addEventListener('click', function(event) {
        var isClickInsideMenu = mobileMenu.contains(event.target);
        var isClickOnMenuIcon = menuIcon.contains(event.target);

        if (!isClickInsideMenu && !isClickOnMenuIcon && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
        }

        // Cerrar submenú si se hace clic fuera de él
        if (!submenu.contains(event.target) && event.target !== contactLink) {
            submenu.classList.remove('show');
        }
    });
});

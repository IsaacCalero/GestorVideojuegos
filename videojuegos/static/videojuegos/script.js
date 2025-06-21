document.addEventListener('DOMContentLoaded', () => {
    console.log('Script cargado correctamente');

    // =============================
    // NAVEGACIÓN ACTIVA Y ANIMACIÓN
    // =============================

    const navLinks = document.querySelectorAll('nav a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        // Destacar enlace activo
        if (link.href.includes(currentPath)) {
            link.classList.add('activo');
        }

        // Animación al hacer clic
        link.addEventListener('click', () => {
            console.log(`Navegando a: ${link.textContent.trim()}`);
            link.style.transform = 'scale(0.95)';
            setTimeout(() => link.style.transform = '', 150);
        });
    });

    // =============================
    // SCROLL SUAVE A ANCLAS INTERNAS
    // =============================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // =============================
    // LOCALSTORAGE: ÚLTIMO TÍTULO
    // =============================

    const tituloInput = document.querySelector('input[name="titulo"]');
    if (tituloInput) {
        const ultimoTitulo = localStorage.getItem('ultimoTitulo');
        if (ultimoTitulo) {
            tituloInput.placeholder = `Último: ${ultimoTitulo}`;
        }

        tituloInput.addEventListener('blur', () => {
            if (tituloInput.value.trim() !== '') {
                localStorage.setItem('ultimoTitulo', tituloInput.value);
            }
        });
    }

    // =============================
    // BIENVENIDA SOLO EN LA PRIMERA VISITA
    // =============================

    if (!localStorage.getItem('visitado')) {
        alert('¡Bienvenido al Gestor de Videojuegos!');
        localStorage.setItem('visitado', 'true');
    }
});
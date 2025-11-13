// script.js

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Lógica de Navegación y Resaltado ---
    const navRoutes = {
        'INICIO': 'index.html',
        'AUTORA': 'autora.html',
        'LIBROS': 'libros.html',
        'PLAYLIST': 'playlist.html',
        'GALERÍA': 'galeria.html',
        'BLOG': 'blog.html',
        'CONTACTO': 'contacto.html',
        'MÁS PAGINAS': 'paginas.html'
    };

    const navLinks = document.querySelectorAll('.navbar nav ul li a');
    
    // Resaltar el enlace activo
    const path = window.location.pathname;
    // Maneja si la ruta termina en / o es un nombre de archivo
    const currentPage = path.substring(path.lastIndexOf('/') + 1) || 'index.html'; 
    
    // Busca la clave (texto del link) que coincide con el archivo actual
    const currentPageKey = Object.keys(navRoutes).find(key => navRoutes[key] === currentPage);

    navLinks.forEach(link => {
        // Redirección
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const pageName = event.target.textContent.toUpperCase();
            if (navRoutes[pageName]) {
                window.location.href = navRoutes[pageName];
            }
        });

        // Aplicar clase 'active'
        if (link.textContent.toUpperCase() === currentPageKey) {
            link.classList.add('active');
        }
    });

    // --- 2. Lógica de Botones Interactivos ---
    const setupInteractiveElements = () => {
        const interactiveElements = document.querySelectorAll('[data-target-action]');

        interactiveElements.forEach(element => {
            element.addEventListener('click', (event) => {
                const target = element.getAttribute('data-target-action');
                
                if (target === 'wattpad') {
                    window.open('https://www.wattpad.com/user/TuUsuario', '_blank'); // Reemplaza con tu enlace real
                } else if (target === 'share-art') {
                    alert('¡Gracias por compartir! Se abriría un formulario/modal de subida de arte.');
                } else if (target === 'read-more') {
                    alert('Navegando a la publicación completa del blog...'); // Simulación de navegación a un post
                } else if (target === 'send-message') {
                    // Simulación del envío de formulario
                    const name = document.querySelector('input[name="name"]').value;
                    if (name) {
                         alert(`Mensaje de ${name} enviado. ¡Gracias por contactarme!`);
                    } else {
                         alert('Mensaje enviado. ¡Gracias por contactarme!');
                    }
                    // Aquí iría la lógica de AJAX o Fetch para enviar el formulario real.
                }
            });
        });
    };

    setupInteractiveElements();


    // --- 3. Animación de Bienvenida (Solo en index.html) ---
    const welcomeLetters = document.querySelectorAll('.welcome-letter');
    if (welcomeLetters.length > 0) {
        welcomeLetters.forEach((letter, index) => {
            // Aplica la animación con un retraso basado en el índice de la letra
            setTimeout(() => {
                letter.style.opacity = '1';
                letter.style.transform = 'translateY(0)';
            }, index * 100); // 100ms de retraso entre cada letra
        });
    }

});
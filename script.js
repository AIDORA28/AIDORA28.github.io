document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('videoLightbox');
    const mainVideo = document.getElementById('mainVideo');
    const lightboxVideo = document.getElementById('lightboxVideo');
    const closeBtn = document.getElementById('closeBtn');

    // 1. Abrir al presionar el video pequeño
    if (mainVideo) {
        mainVideo.addEventListener('click', () => {
            lightbox.classList.add('active');
            lightboxVideo.play();
        });
    }

    // 2. Función para cerrar y resetear el video
    const closeFullVideo = () => {
        lightbox.classList.remove('active');
        lightboxVideo.pause();
        lightboxVideo.currentTime = 0;
    };

    // 3. Cerrar al presionar la X
    if (closeBtn) {
        closeBtn.addEventListener('click', closeFullVideo);
    }

    // 4. CERRAR AL PRESIONAR CUALQUIER OTRO LADO (el fondo negro)
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            // Si el clic fue en el fondo negro y no en el video mismo
            if (e.target === lightbox) {
                closeFullVideo();
            }
        });
    }
});

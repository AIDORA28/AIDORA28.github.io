document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('videoLightbox');
    const mainVideo = document.getElementById('mainVideo');
    const lightboxVideo = document.getElementById('lightboxVideo');
    const closeBtn = document.getElementById('closeBtn');

    // Al hacer clic en el video pequeño
    if (mainVideo) {
        mainVideo.addEventListener('click', () => {
            lightbox.classList.add('active');
            lightboxVideo.play();
        });
    }

    // Función para cerrar
    const closeFullVideo = () => {
        lightbox.classList.remove('active');
        lightboxVideo.pause();
        lightboxVideo.currentTime = 0;
    };

    if (closeBtn) closeBtn.addEventListener('click', closeFullVideo);

    // Cerrar si haces clic en el fondo negro
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeFullVideo();
    });
});

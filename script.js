// Esperamos a que el HTML cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    
    const lightbox = document.getElementById('videoLightbox');
    const mainVideo = document.getElementById('mainVideo');
    const lightboxVideo = document.getElementById('lightboxVideo');
    const closeBtn = document.getElementById('closeBtn');

    // Al hacer clic en el video pequeño, abrimos el grande
    if (mainVideo) {
        mainVideo.addEventListener('click', () => {
            lightbox.classList.add('active');
            lightboxVideo.play();
        });
    }

    // Al hacer clic en la X o fuera del video, cerramos
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        lightboxVideo.pause();
        lightboxVideo.currentTime = 0;
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            // Solo cierra si haces clic en el fondo negro, no en el video mismo
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
});

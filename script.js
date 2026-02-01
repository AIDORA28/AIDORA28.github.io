function openLightbox() {
    const lightbox = document.getElementById('videoLightbox');
    const video = document.getElementById('lightboxVideo');
    lightbox.classList.add('active');
    video.play(); 
}

function closeLightbox() {
    const lightbox = document.getElementById('videoLightbox');
    const video = document.getElementById('lightboxVideo');
    lightbox.classList.remove('active');
    video.pause(); 
    video.currentTime = 0; 
}

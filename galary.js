document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
     
    let currentIndex = 0;

    function showLightbox(index) {
        const item = galleryItems[index];
        const imgSrc = item.querySelector('img').src;
        lightboxImg.src = imgSrc;
        lightbox.style.display = 'flex';
        currentIndex = index;
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            showLightbox(index);
        });
    });  

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryItems.length - 1;
        showLightbox(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < galleryItems.length - 1) ? currentIndex + 1 : 0;
        showLightbox(currentIndex);
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
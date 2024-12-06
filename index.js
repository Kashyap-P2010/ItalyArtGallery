const gridItems = document.querySelectorAll('.grid-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

gridItems.forEach(item => {
    item.addEventListener('click', () => {
        lightboxImg.src = item.src;
        lightbox.classList.add('visible');
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('visible');
});

// JavaScript voor het interactief maken van het hartje
document.querySelectorAll('.heart-icon').forEach(heart => {
    heart.addEventListener('click', () => {
        heart.classList.toggle('liked');
    });
});

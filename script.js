const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

const galleryImages = [
    'images/1.jpeg',
    'images/2.jpeg',
    'images/3.jpeg',
    'images/4.jpeg',
    'images/5.jpeg',
    'images/6.jpeg'
];

let currentImageIndex = 0;

function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    modal.classList.add('active');
    modalImage.src = galleryImages[currentImageIndex];
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    }
    
    const modalImage = document.getElementById('modalImage');
    modalImage.src = galleryImages[currentImageIndex];
}

document.getElementById('imageModal').addEventListener('click', (e) => {
    if (e.target.id === 'imageModal') {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('imageModal');
    if (modal.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        }
    }
});

const skillCards = document.querySelectorAll('.skill-card');
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = entry.target.querySelector('.skill-progress');
            const width = progress.style.width;
            progress.style.width = '0%';
            setTimeout(() => {
                progress.style.width = width;
            }, 100);
        }
    });
}, observerOptions);

skillCards.forEach(card => {
    observer.observe(card);
});

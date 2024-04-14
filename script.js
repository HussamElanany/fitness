const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navBar = document.querySelector('.navbar');
let isActive = false

burger.addEventListener('click', function () {
    if (window.innerWidth <= 768 && isActive == false) { // Toggle only on smaller screens (e.g., mobile)
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
        navLinks.style.display = 'block';
        isActive = true
        console.log('test');
    } else if (isActive) {
        isActive = false
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
        navLinks.style.display = 'none';
        console.log('Salem');
    }

});

window.addEventListener('resize', function () {
    if (window.innerWidth > 768) { // Reset on larger screens
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');


    }
});









document.querySelector('.next-btn').addEventListener('click', function () {
    const container = document.querySelector('.portfolio-images');
    container.scrollBy({
        left: container.offsetWidth,
        behavior: 'smooth'
    });
});

document.querySelector('.prev-btn').addEventListener('click', function () {
    const container = document.querySelector('.portfolio-images');
    container.scrollBy({
        left: -container.offsetWidth,
        behavior: 'smooth'
    });
});


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.next-btn-rate').addEventListener('click', function () {
        const container = document.querySelector('.rating-cards');
        container.scrollBy({
            left: container.offsetWidth,
            behavior: 'smooth'
        });
    });

    document.querySelector('.prev-btn-rate').addEventListener('click', function () {
        const container = document.querySelector('.rating-cards');
        container.scrollBy({
            left: -container.offsetWidth,
            behavior: 'smooth'
        });
    });
});

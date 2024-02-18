const hamburger = document.querySelector('#hamburger');
const hamMenu = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
    hamMenu.classList.toggle('hidden');
    hamburger.classList.toggle('bg-white');
});

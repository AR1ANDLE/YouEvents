const menu = document.querySelector('.menu')

function toggleMenu() {
    menu.classList.toggle('hidden')
    menu.classList.toggle('exiting')
}

menuIcon.addEventListener('click', toggleMenu)
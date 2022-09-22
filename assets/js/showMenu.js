let menu = document.getElementById('menu')

function toggleMenu () {
    if (menu.style.height < '320px') {
        menu.style.height = '320px'
        menu.style.animationName = 'increaseMenu'
    } else {
        menu.style.height = '0px'
        menu.style.animationName = 'decreaseMenu'
    }
}
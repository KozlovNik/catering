let humburgerMenu = document.getElementById('toggle'),
    MAX_WIDTH = '940',
    currentWidth = window.innerWidth;

let menu = document.getElementsByClassName('main-nav__list')[0];

humburgerMenu.addEventListener('click', function(event) {
    if (currentWidth < MAX_WIDTH) {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
        menu.style.zIndex = '10';
        }
    }
});

window.addEventListener('click', function(event) {
    if (currentWidth < MAX_WIDTH) {
        if (event.target !== menu && menu.style.display !== 'none' && !menu.contains(event.target) && event.target !== humburgerMenu){
            menu.style.display = 'none'
        }
    }
});

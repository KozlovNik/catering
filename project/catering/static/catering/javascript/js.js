let humburgerMenu = document.getElementById('toggle');


let menu = document.getElementsByClassName('main-nav__list')[0];

humburgerMenu.addEventListener('click', function (event) {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    }
    else {
        menu.style.display = 'block';
        menu.style.zIndex = '10';
    }
});

window.addEventListener('click', function (event) {
    console.log(event.target);
    console.log(menu.contains(event.target));
    if (event.target !== menu && menu.style.display !== 'none' && !menu.contains(event.target) && event.target !== humburgerMenu){
        menu.style.display = 'none'
    }
});

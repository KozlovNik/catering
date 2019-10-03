let humburgerMenu = document.getElementById('toggle');


let h = document.getElementsByClassName('main-nav__list');

humburgerMenu.addEventListener('click', function (event) {
    if (h[0].style.display === 'block') {
        h[0].style.display = 'none';
    }
    else {
        h[0].style.display = 'block';
        h[0].style.zIndex = '10';
    }
});

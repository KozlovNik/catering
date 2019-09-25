let humburgerMenu = document.getElementById('toggle');
// console.log(humburgerMenu);

let h = document.getElementsByClassName('main-nav__list');

humburgerMenu.addEventListener('click', function (event) {
    if (h[0].style.display === 'block') {
        h[0].style.display = 'none';
    }
    else {
        h[0].style.display = 'block';
    }
});


$('.main-nav__link').on('click', function(){
    $('.main-nav__link').removeClass('main-nav__link--pressed');
    $(this).addClass('main-nav__link--pressed');
});

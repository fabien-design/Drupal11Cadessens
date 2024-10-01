document.addEventListener('DOMContentLoaded', function() {
    let burgerMenu = document.querySelector('.menu-mobile--burger');
    let navbar = document.querySelector('#block-cthulhu-responsive-navbar');
    
    if (burgerMenu && navbar) {
        burgerMenu.addEventListener('click', function() {
            if (burgerMenu.classList.contains('active')) {
                burgerMenu.classList.remove('active');
                navbar.classList.remove('active');
                return;
            } 
            burgerMenu.classList.add('active');
            navbar.classList.add('active');
        });
    } else {
        console.error('No burger menu or navbar found');
    }
});

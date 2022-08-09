window.onload = function(){
    const menu_btn = document.querySelector('.hamburger');
    const pages_container = document.querySelector('.mobile-nav');
    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
        pages_container.classList.toggle('is-active');
    });
}
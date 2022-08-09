window.onload = function(){
    const menu_btn = document.querySelector('.hamburger');
    const pages_container = document.querySelector('.mobile-nav');
    const get_off = document.querySelector('#mobile-out');
    const get_a_off = document.querySelector('.nav_a');
    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
        pages_container.classList.toggle('is-active');
    });
    const get_out = document.querySelector('.nav_out');
    get_out.addEventListener('click', function(){
        get_off.classList.toggle('.mobile-out');
        get_a_off.classList.toggle('.nav_a');
    });
}
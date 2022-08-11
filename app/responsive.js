window.onload = function(){
    push_a_service();
    nav_responsive();
}
const nav_responsive = function(){
    const menu_btn = document.querySelector('.hamburger');
    const pages_container = document.querySelector('.mobile-nav');
    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
        pages_container.classList.toggle('is-active');
    });
}
const push_a_service = function(){
    const pushing = document.querySelector('.nav_out');
    const pushing1 = document.querySelector('.nav_out1');
    const pushing2 = document.querySelector('.nav_out2');
    const pushing3 = document.querySelector('.nav_out3');
    const pushing4 = document.querySelector('.nav_out4');
    const pushing5 = document.querySelector('.nav_out5');
    const pages_container = document.querySelector('.mobile-nav');
    const menu_btn = document.querySelector('.hamburger');
    pushing.addEventListener('click', function(){
        pages_container.classList.toggle('is-active');
        menu_btn.classList.toggle('is-active');
    });
    pushing1.addEventListener('click', function(){
        pages_container.classList.toggle('is-active');
        menu_btn.classList.toggle('is-active');
    });
    pushing2.addEventListener('click', function(){
        pages_container.classList.toggle('is-active');
        menu_btn.classList.toggle('is-active');
    });
    pushing3.addEventListener('click', function(){
        pages_container.classList.toggle('is-active');
        menu_btn.classList.toggle('is-active');
    });
    pushing4.addEventListener('click', function(){
        pages_container.classList.toggle('is-active');
        menu_btn.classList.toggle('is-active');
    });
    pushing5.addEventListener('click', function(){
        pages_container.classList.toggle('is-active');
        menu_btn.classList.toggle('is-active');
    });
}
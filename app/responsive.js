window.onload = function(){
    go_start();
    pushbutton();
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
const go_start = function(){
    const start = document.getElementById('logo-header');
    start.addEventListener('click', function(){
        if (window.scrollY) {
            window.scroll(0, 0);
        }
    });
}
const pushbutton = function(){
    const toggle =document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    const facebook = document.querySelector('.facebook');
    const instagram = document.querySelector('.instagram');
    const linkedin = document.querySelector('.linkedin');
    const youtube = document.querySelector('.youtube');
    toggle.addEventListener('click', function(){
        menu.classList.toggle('active');
    });
    facebook.addEventListener('click', function(){
        location.href="https://www.facebook.com";
    });
    instagram.addEventListener('click', function(){
        location.href="https://www.instagram.com";
    });
    linkedin.addEventListener('click', function(){
        location.href="https://www.linkedin.com/";
    });
    youtube.addEventListener('click', function(){
        location.href="https://www.youtube.com/"
    });
}

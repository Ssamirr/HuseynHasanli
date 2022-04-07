let loader = document.querySelector('.loader')
window.onload = loader.classList.add('d-none')

window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".header-navbar-menu");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    document.querySelector('.header-navbar-menu').style.bottom='auto';
  } else {
    navbar.classList.remove("sticky");
    document.querySelector('.header-navbar-menu').style.bottom='0';
  }
}

var menu_button = document.querySelector('.menu-button')
var menu_content = document.querySelector('.menu-content')
var main_header_wrapper = document.querySelector('.main_header_wrapper')
var body = document.querySelector('body')

menu_button.addEventListener('click', function () {
    if (menu_button.classList.contains('is-active')) {
        menu_button.classList.remove('is-active');
        menu_content.classList.add('close');
        menu_content.classList.remove('open');
    }
    else {
        menu_button.classList.add('is-active');
        menu_content.classList.remove('close');
        menu_content.classList.add('open');
    }
})

// window.addEventListener('mouseup',function(event){
//     if(event.target != menu_content){
//         menu_button.classList.remove('is-active');
//         menu_content.classList.add('close');
//         menu_content.classList.remove('open');
//     }
// })
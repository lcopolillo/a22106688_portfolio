/*show/hide menu*/
const navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav_close')

/*show menu*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show_menu')
    })
}

/*hide menu*/
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show_menu')
    })
}

/*remove mobile menu*/
const navLink = document.querySelectorAll('.nav_link')

function closeMenu(){
    const navMenu = document.getElementById('nav_menu')
    // close menu when clicking in one link
    navMenu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click', closeMenu))

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

/*show/hide skills content*/
const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

function showHideSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open' //se tiver fechado, ao clicar muda de classe, ou seja, abre
    }
}    

skillsHeader.forEach((el) => {
    el.addEventListener('click', showHideSkills)
})

/*qualification active/non active tabs*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})